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

---

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

🔗 [Pepsales Postman Collection](https://www.postman.com/pepsales-7521/workspace/pepsales/collection/39544043-1852aa88-af33-4cb9-be50-456b7b4dc65f?action=share&creator=39544043)

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
    "receiver": "+918423280190",
    "status": "Pending"
  }
}
```

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
