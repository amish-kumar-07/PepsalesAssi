import sendSMS from './sms.js';
import sendMailNotification from './email.js';
import { updateNotificationStatus } from './updateNotificationStatus.js';

export default async function worker(data) {
  try {
    const notificationId = parseInt(data.id, 10);

    if (isNaN(notificationId)) {
      throw new Error("Invalid notification ID");
    }

    console.log("Processing notification:", data);

    if (data.type === 'sms') {
      await sendSMS({ message: data.message, receiver: data.receiver });
    } else if (data.type === 'email') {
      const prompt = {
        subject: "System Generated Mail",
        message: data.message
      };
      await sendMailNotification(data.receiver, prompt);
    } else if (data.type === "in-app") {
      console.log(`In-app message: ${data.message}`);
    }

    await updateNotificationStatus(notificationId, 'send');
    console.log(`Notification ${notificationId} processed`);

  } catch (error) {
    console.error('Failed to process notification:', error);
    throw error; 
  }
}
