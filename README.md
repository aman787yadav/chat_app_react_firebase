# 🔥 Chat App with React and Firebase

This is a real-time chat application built using **React.js** and **Firebase**. Users can sign in with Google and chat instantly with others in a shared chat room.

## 🚀 Features

- ✅ Google Authentication (Firebase Auth)
- ✅ Real-time messaging (Firebase Firestore)
- ✅ Fully responsive design
- ✅ Clean and modern UI
- ✅ Auto-scroll to the latest message
- ✅ Timestamps and user avatars

## 🛠️ Technologies Used

- **React.js** (frontend)
- **Firebase**
  - Authentication
  - Firestore (real-time database)
- **CSS** for styling

## 📦 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/aman787yadav/chat_app_react_firebase.git
cd chat_app_react_firebase
Install dependencies:

bash
Copy
Edit
npm install
Configure Firebase:

Go to Firebase Console

Create a new project

Enable Authentication > Sign-in method > Google

Create a Firestore Database

Copy your Firebase config and replace it in src/firebase-config.js:

js
Copy
Edit
// src/firebase-config.js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
Start the development server:

bash
Copy
Edit
npm start
The app will run at http://localhost:3000



🧑‍💻 Author
Aman Yadav

GitHub: @aman787yadav

📄 License
This project is open-source and free to use.
