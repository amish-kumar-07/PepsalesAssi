import amqp from 'amqplib';
import worker from './consume.js'; 

export default async function queue() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('notifications');
    
    console.log('Notification consumer is waiting for messages...');
    
    channel.consume('notifications', async (msg) => {
      if (msg) {
        try {
          const notification = JSON.parse(msg.content.toString());
          console.log('Received notification:', notification);

          await worker(notification); 

          channel.ack(msg);
          console.log('Notification processed and acknowledged');
        } catch (error) {
          console.error('Error processing notification in worker:', error);
          channel.nack(msg, false, false); 
        }
      }
    }, { noAck: false }); 
    
  } catch (error) {
    console.error('RabbitMQ consumer error:', error);
    throw error;
  }
}
