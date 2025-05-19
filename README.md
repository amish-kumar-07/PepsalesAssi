Here’s a complete **`README.md`** for your Notification API (Pepsales), written as a single Markdown file you can drop directly into your project:

---

````markdown
# 📬 Notification API Service - Pepsales

A robust notification system that supports **in-app**, **email**, and **SMS** notifications. Built with **Node.js**, **Express**, **Drizzle ORM**, **RabbitMQ**, **Twilio**, and **MailSender**, this API is designed to handle scalable and asynchronous notifications for user-specific actions.

---

## 🚀 Features

- ✉️ Multiple notification types: `in-app`, `email`, `sms`
- 📋 Notification status tracking
- 🔔 User-specific notifications via REST API
- 📧 Email delivery (MailSender)
- 📱 SMS delivery (Twilio)
- 🕊️ Asynchronous queuing via RabbitMQ
- 🧠 Uses PostgreSQL with Drizzle ORM

---

## 📦 Tech Stack

- **Node.js** + **Express** (Backend)
- **PostgreSQL** with **Drizzle ORM** (Database)
- **RabbitMQ** (Queueing system)
- **Twilio API** (SMS)
- **Nodemailer** or MailSender (Email)
- **Railway** (Deployment)

----
````
## 🛠️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/amish-kumar-07/Pepsales.git
cd Pepsales
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure `.env`

Create a `.env` file in the root directory and include the following:

```env
PORT=3000
DATABASE_URL=your_postgresql_url
RABBITMQ_URL=your_rabbitmq_url
TWILIO_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
TWILIO_PHONE_NUMBER=your_twilio_phone
EMAIL_USER=your_verified_email
EMAIL_PASS=your_email_app_password
```

---

## ▶️ Running the Server

```bash
npm start
```

Server will start on:

```bash
http://localhost:3000
```

Or your [Railway](https://railway.app) deployed URL (e.g., `https://notification-api.up.railway.app`)

---

## 📮 API Endpoints

### 🔹 Create a Notification

**POST** `/notifications`

Sends an in-app/email/SMS notification.

```json
{
  "userId": 1,
  "type": "sms",              // in-app | email | sms
  "message": "This is a test message",
  "receiver": "+918423280190", // required for sms/email
  "status": "Pending"
}
```

✅ **Test-only values:**

* **Email:** `suryansh.singh.5806@gmail.com`
* **SMS:** `+918423280190`

---

### 🔹 Get User Notifications

**GET** `/users/:id/notifications`

Retrieve all notifications for a specific user.

Example:

```http
GET /users/1/notifications
```

## 🧪 Postman Collection

Use this collection to test the endpoints:

🔗 [Pepsales Postman Collection](https://team-test-7339.postman.co/workspace/Team-Test-Workspace~8c86a486-9ff2-49b8-8df4-f02204f01ad0/collection/35001300-61d64344-67bb-4c4c-9146-3a4fc1e7b5f8?action=share&creator=35001300)

Import the `test.json` file if you downloaded it manually.

---

## ⚠️ Important for Testing (Twilio/MailSender)

Since this uses **trial accounts**, ensure the following:

* Only send emails to `rashusingh110@gmail.com`
* Only send SMS to `+917323001107`

Other emails or numbers will be rejected by the trial service.

---

## 📸 Sample Output

```json
{
  "success": true,
  "message": "Notification stored and queued",
  "data": {
    "id": 1,
    "userId": 1,
    "type": "sms",
    "message": "This is a test message",
    "receiver": "+917323001107",
    "status": "Pending"
  }
}
```
![Screenshot 2025-05-18 162454](https://github.com/user-attachments/assets/a6f3436a-e0d1-40e2-9c8c-973934eb9e28)
![sms](https://github.com/user-attachments/assets/6e6e73f8-63aa-425d-b659-3307cc63f891)
![mail](https://github.com/user-attachments/assets/5d36bcb5-0536-46cd-9115-048eeb0eb1ae)



---

## 👨‍💻 Author

**Amish Kumar**
🔗 [GitHub Profile](https://github.com/amish-kumar-07)

---

## 📝 License

This project is licensed under the MIT License.

```

---

Let me know if you'd like me to generate this as a downloadable file or include sections for RabbitMQ consumer setup or Drizzle ORM schema!
```
