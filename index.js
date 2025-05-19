import express from 'express';
import bodyParser from "body-parser";
import amqp from 'amqplib';
import dotenv from 'dotenv';
import queue from './services/queue.js';
import { db } from './db/index.js';
import { notificationsTable } from './db/schema.js';
import { eq } from 'drizzle-orm';

dotenv.config();

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let channel;

async function initRabbitMQ() {
  const conn = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await conn.createChannel();
  await channel.assertQueue('notifications');
  console.log('RabbitMQ connected and queue asserted');
}


async function startServer() {
  try {
    await initRabbitMQ();
    await queue(); 
    app.listen(PORT, () => {
      console.log(`Server is running at PORT ${PORT}`);
    });
  } catch (err) {
    console.error('Error initializing server:', err);
    process.exit(1);
  }
}

startServer();

app.post("/notifications", async (req, res) => {
  const { userId, type, message, receiver, status = 'Pending' } = req.body;

  if (!userId || !type || !message || !receiver) {
    return res.status(400).json({ error: "Please provide userId, type, message, and receiver." });
  }

  try {
    const result = await db.insert(notificationsTable).values({
      userId: parseInt(userId, 10) || Math.floor(Math.random() * 100000),
      type,
      message,
      receiver,
      status
    }).returning();

    const notificationWithId = { 
      id: result[0].id,
      userId: result[0].userId,
      type,
      message,
      receiver,
      status
    };

    channel.sendToQueue('notifications', Buffer.from(JSON.stringify(notificationWithId)));

    res.status(200).json({ 
      success: true, 
      message: "Notification stored and queued",
      data: result[0]
    });
  } catch (error) {
    console.error('Error handling notification:', error);
    res.status(500).json({ 
      success: false, 
      message: "Operation failed", 
      error: error.message 
    });
  }
});

app.get("/users/:id/notifications", async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  if (isNaN(userId)) {
    return res.status(400).json({ error: "Invalid user ID" });
  }

  try {
    const rows = await db.select()
      .from(notificationsTable)
      .where(eq(notificationsTable.userId, userId));

    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.error('Error fetching user notifications:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});
