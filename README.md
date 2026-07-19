# 📚 ExamNotes.Ai

<div align="center">

<img src="https://img.shields.io/badge/React-19-blue?logo=react"/>
<img src="https://img.shields.io/badge/Node.js-Express-green?logo=node.js"/>
<img src="https://img.shields.io/badge/MongoDB-Database-brightgreen?logo=mongodb"/>
<img src="https://img.shields.io/badge/Google-Gemini-orange"/>
<img src="https://img.shields.io/badge/Razorpay-Payments-0C5EFF"/>
<img src="https://img.shields.io/badge/License-MIT-blue"/>

### 🚀 AI-Powered Exam Notes Generator

Transform lengthy PDF study material into concise, structured, and exam-oriented notes powered by Google Gemini AI.

🌐 **Live Demo:** https://examnotes-ai-ytdj.onrender.com

</div>

---

# 📖 About

ExamNotes.Ai is an AI-powered web application that helps students prepare smarter for exams.

Instead of reading hundreds of pages of notes, users can upload their study material in PDF format and generate beautifully structured notes within minutes.

The generated notes include:

- Chapter Overview
- Learning Objectives
- Definitions
- Key Concepts
- Detailed Explanations
- Formula Sheets
- Revision Notes
- Comparison Tables
- Mermaid Diagrams
- MCQs
- Viva Questions
- Interview Questions
- Last Minute Revision Notes

Users can also download the generated notes as a beautifully formatted PDF for offline study.

---

# ✨ Features

## 🤖 AI Powered Notes

Generate high-quality exam notes using Google Gemini API.

---

## 📄 PDF Upload

Upload your handwritten or typed study material.

Supported Format:

- PDF

---

## 📝 Structured Notes

Automatically generates

- Overview
- Definitions
- Key Concepts
- Detailed Notes
- Revision Notes
- Important Points
- Formula Sheets
- Tables
- Diagrams
- MCQs
- Viva Questions
- Interview Questions

---

## 📥 Download Notes

Download generated notes as a beautifully formatted PDF.

Perfect for:

- Offline Reading
- Printing
- Revision

---

## 💳 Credit System

Integrated with Razorpay.

Users purchase credits before generating AI notes.

---

## 🔐 Authentication

- JWT Authentication
- Secure Cookies
- OTP Password Reset
- Protected Routes

---

## 📚 History

Every generated note is stored.

Users can

- View
- Search
- Read
- Delete

their previous notes anytime.

---

## 📱 Responsive UI

Fully responsive design built using

- React
- Tailwind CSS
- Framer Motion

Works on

- Desktop
- Tablet
- Mobile

---

# 🛠 Tech Stack

## Frontend

- React.js
- React Router
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- Axios
- React Icons

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Multer
- PDF Parser

---

## AI

- Google Gemini API

---

## Payments

- Razorpay

---

## Email Service

- Brevo

---

## Deployment

- Render (Frontend)
- Render (Backend)

---

# 🏗 Project Architecture

```
                User

                  │

                  ▼

          React Frontend

                  │

                  ▼

        Express REST API

      ┌─────────┼──────────┐
      │         │          │
      ▼         ▼          ▼

 MongoDB    Gemini API   Razorpay

      │

      ▼

 Generated Notes
```

---

# 📂 Folder Structure

```
ExamNotes.Ai/

│

├── frontend/

│   ├── public/

│   ├── src/

│   │

│   ├── assets/

│   ├── components/

│   ├── hooks/

│   ├── pages/

│   ├── redux/

│   ├── services/

│   ├── utils/

│   ├── App.jsx

│   └── main.jsx

│

├── backend/

│

│   ├── config/

│   ├── controllers/

│   ├── middleware/

│   ├── models/

│   ├── routes/

│   ├── utils/

│   ├── uploads/

│   └── server.js

│

├── README.md

├── package.json

└── .gitignore
```

---

# ⭐ Highlights

✅ AI Powered Notes

✅ PDF Upload

✅ Download Notes

✅ Razorpay Integration

✅ JWT Authentication

✅ OTP Verification

✅ Credit System

✅ History Management

✅ Responsive UI

✅ Modern Glassmorphism Design

---

# 📖 How to Use

### Step 1

Create a new account.

or

Login to your existing account.

---

### Step 2

Purchase credits from the Pricing page.

---

### Step 3

Navigate to the Upload page.

---

### Step 4

Upload a PDF containing study material.

---

### Step 5

Click **Generate Notes**.

---

### Step 6

The AI processes your PDF and generates structured notes.

---

### Step 7

Read the generated notes directly in the browser.

---

### Step 8

Download the notes as a beautifully formatted PDF.

---

### Step 9

Access your previously generated notes anytime from the History page.

---

# 🤖 AI Workflow

```
Upload PDF
      │
      ▼
Extract Text
      │
      ▼
Clean & Process Content
      │
      ▼
Send Prompt to Gemini API
      │
      ▼
Receive Structured JSON
      │
      ▼
Store Notes in MongoDB
      │
      ▼
Render Beautiful Notes
      │
      ▼
Download as PDF
```

---

# 📄 PDF Processing Flow

```
User Uploads PDF

        │

        ▼

Multer Upload

        │

        ▼

Extract Text

        │

        ▼

Validate Content

        │

        ▼

Send to Gemini

        │

        ▼

Generate Notes

        │

        ▼

Save to Database

        │

        ▼

Display Notes

        │

        ▼

Download PDF
```

---

# 💳 Credit Workflow

```
Purchase Credits

        │

        ▼

Razorpay Payment

        │

        ▼

Payment Verification

        │

        ▼

Credits Added

        │

        ▼

Generate Notes

        │

        ▼

One Credit Deducted

        │

        ▼

Updated Balance
```

---

# 📥 Download Notes

After successful AI generation, users can download the generated notes as a professionally formatted PDF.

The downloaded PDF includes:

- Title
- Overview
- Key Concepts
- Detailed Notes
- Formula Sheets
- Comparison Tables
- Revision Notes
- Important Points
- MCQs
- Viva Questions
- Interview Questions
- Last Minute Revision Notes

Perfect for offline learning and exam revision.

---

# 🔒 Security Features

- JWT Authentication
- HTTP-Only Cookies
- Protected Routes
- Password Hashing
- Email OTP Verification
- Password Reset
- Input Validation
- Secure API Endpoints

---

# 📊 Performance Optimizations

- Lazy Loading
- Component Reusability
- Redux State Management
- Optimized API Calls
- Efficient Database Queries
- Responsive Design
- Fast PDF Rendering
- Modern React Hooks

---

# 🌟 Why ExamNotes.Ai?

✔ Saves hours of manual note-making

✔ Generates exam-oriented study material

✔ Provides revision-ready content

✔ Downloadable PDF notes

✔ AI-powered structured learning

✔ Secure authentication

✔ Seamless payment integration

✔ Modern and responsive user experience

---

# 🔐 Authentication Flow

```
Register
     │
     ▼

Verify Credentials
     │
     ▼

Password Hashing
     │
     ▼

Store User
     │
     ▼

Login
     │
     ▼

Generate JWT
     │
     ▼

Store JWT in HTTP-Only Cookie
     │
     ▼

Access Protected Routes
```

---

# 🔑 Forgot Password Flow

```
Enter Email
      │
      ▼

Send OTP
      │
      ▼

Verify OTP
      │
      ▼

Create New Password
      │
      ▼

Password Updated Successfully
```

---

# 💳 Razorpay Integration

ExamNotes.Ai uses **Razorpay** to manage credit purchases securely.

Workflow

```
Select Plan
      │
      ▼

Create Razorpay Order
      │
      ▼

Complete Payment
      │
      ▼

Verify Signature
      │
      ▼

Update Credits
      │
      ▼

Ready to Generate Notes
```

---

# 📥 PDF Download

Generated notes can be downloaded as a clean, professionally formatted PDF.

The PDF contains:

- Cover Title
- Chapter Overview
- Learning Objectives
- Definitions
- Key Concepts
- Detailed Notes
- Formula Sheets
- Comparison Tables
- Revision Notes
- Important Points
- MCQs
- Viva Questions
- Interview Questions
- Last Minute Revision Notes

---

# 🗂 History Management

Every generated note is automatically saved.

Users can:

- View previous notes
- Search notes
- Open notes
- Delete notes
- Download notes again

---

# 🎨 UI Highlights

- Modern Glassmorphism Design
- Responsive Layout
- Beautiful Animations
- Interactive Components
- Smooth Page Transitions
- Mobile Friendly
- Loading States
- Elegant Cards
- Clean Typography

---

# ⚡ Performance

ExamNotes.Ai is optimized for speed and scalability.

### Frontend

- Code Splitting
- Lazy Loading
- Redux Toolkit
- Optimized Rendering
- Reusable Components

### Backend

- RESTful API Design
- Optimized MongoDB Queries
- JWT Authentication
- Secure Middleware
- Efficient PDF Processing

---

# 🌐 Deployment

## Frontend

Hosted on **Render**

```
https://examnotes-ai-ytdj.onrender.com
```

---

## Backend

Hosted on **Render**

```
https://examnotes-ai-backend-h8wo.onrender.com
```

---

# 📋 Browser Support

ExamNotes.Ai works on all modern browsers.

- Google Chrome
- Microsoft Edge
- Mozilla Firefox
- Safari
- Brave
- Opera

---

# 🧪 Testing Checklist

- User Registration
- User Login
- Forgot Password
- OTP Verification
- PDF Upload
- AI Note Generation
- Credit Deduction
- Razorpay Payment
- History Management
- Delete Notes
- PDF Download
- Responsive UI

---

# 🚀 Upcoming Features

- AI Quiz Generation
- Flashcards
- Voice Notes
- Multi-language Support
- Dark & Light Themes
- Bookmark Notes
- Share Notes
- AI Chat Assistant
- Study Planner
- Performance Analytics

---

# 📈 Roadmap

## Version 1.0

- User Authentication
- OTP Verification
- PDF Upload
- AI Note Generation
- Credit System
- Razorpay Integration
- Notes History
- PDF Download

---

## Version 2.0

- AI Quiz Generator
- Flashcards
- Bookmark Notes
- Study Analytics
- Notes Sharing
- Better Search

---

## Version 3.0

- AI Chat Assistant
- Multi-language Support
- Voice Notes
- AI Doubt Solver
- Mobile Application
- Collaborative Notes

---

# 💡 Use Cases

ExamNotes.Ai can be used by:

- College Students
- School Students
- Competitive Exam Aspirants
- Teachers
- Coaching Institutes
- Self Learners

---

# 📚 Learning Outcomes

Building this project helped me improve my knowledge of:

- React.js
- Redux Toolkit
- Tailwind CSS
- Framer Motion
- Node.js
- Express.js
- MongoDB
- REST APIs
- JWT Authentication
- Cookie-Based Authentication
- Google Gemini API
- Razorpay Integration
- Brevo Email API
- PDF Processing
- Full-Stack Application Development
- Deployment on Render

---

# 🛡️ Security

ExamNotes.Ai follows several security best practices.

- Passwords are securely hashed.
- JWT is stored in HTTP-only cookies.
- Protected API routes.
- Secure OTP verification.
- Server-side payment verification.
- Input validation and sanitization.
- Secure database operations.

---

# 🌐 Live Demo

Visit the live application here:

👉 https://examnotes-ai-ytdj.onrender.com

---

# 💻 GitHub Repository

```
https://github.com/Yaman-Gahlout/ExamNotes.Ai
```

---

# 📄 License

This project is licensed under the **MIT License**.

Feel free to use, modify, and distribute it according to the license terms.

---

# 🙋‍♂️ Author

**Yaman Gahlout**

MCA Student | Full-Stack Developer

### Connect with me

- LinkedIn: https://www.linkedin.com/in/yaman-gahlout-751349260/
- GitHub: https://github.com/Yaman-Gahlout
- Email: yamangahlout123@gmail.com

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

It motivates me to build more useful open-source projects.

---

# 🙏 Acknowledgements

Special thanks to the amazing technologies that made this project possible.

- React.js
- Node.js
- Express.js
- MongoDB
- Google Gemini API
- Razorpay
- Brevo
- Tailwind CSS
- Redux Toolkit
- Framer Motion
- Render

---

# 📌 Project Status

🟢 Actively Maintained

New features, performance improvements, and bug fixes are continuously being added.

---

<div align="center">

## ⭐ Thank you for visiting ExamNotes.Ai ⭐

**Made with ❤️ by Yaman Gahlout**

If you enjoyed this project, don't forget to leave a ⭐ on GitHub!

</div>
