// services/updateStatus.js
import { db } from '../db/index.js';
import { notificationsTable } from '../db/schema.js';
import { eq } from 'drizzle-orm';

export async function updateNotificationStatus(id, status) {
  const parsedId = parseInt(id, 10);
  if (isNaN(parsedId)) {
    throw new Error(`Invalid notification ID: ${id}`);
  }

  if (!status) {
    throw new Error(`Status is required`);
  }

  try {
    await db
      .update(notificationsTable)
      .set({ status })
      .where(eq(notificationsTable.id, parsedId))
      .execute();

    console.log(`Notification ${parsedId} marked as '${status}'`);
    return { success: true, message: `Notification ${parsedId} updated to '${status}'` };
  } catch (error) {
    console.error(`Failed to update status for Notification ${parsedId}:`, error.message);
    throw error;
  }
}
