# Modern Church Website

This is a modern church website built with React.js and styled using Tailwind CSS. The website includes various pages such as Home, About Us, Sermons, Events, and Contact, along with Firebase integration for hosting and data storage.

## Project Structure

```
modern-church-website
├── public
│   └── index.html
├── src
│   ├── assets
│   ├── components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── SermonCard.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── AboutUs.jsx
│   │   ├── Sermons.jsx
│   │   ├── Events.jsx
│   │   └── Contact.jsx
│   ├── firebase
│   │   └── config.js
│   ├── App.jsx
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd modern-church-website
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Install Tailwind CSS:**
   Follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation) to set up Tailwind in your project.

4. **Install Firebase CLI globally:**
   ```
   npm install -g firebase-tools
   ```

5. **Log in to Firebase:**
   ```
   firebase login
   ```

6. **Initialize your Firebase project:**
   ```
   firebase init
   ```
   Select Hosting and follow the prompts to set up your project.

7. **Build your React app for production:**
   ```
   npm run build
   ```

8. **Deploy your app to Firebase Hosting:**
   ```
   firebase deploy
   ```

## Usage Guidelines

- The homepage features a hero section, service times, and a button to "Join Us Live."
- The About Us page presents the church's history, mission, vision, values, and photos of church leaders.
- The Sermons page lists recent sermons with video thumbnails and allows users to play sermons from YouTube or Firebase.
- The Events page displays a calendar or list of upcoming church events with titles, dates, times, and descriptions.
- The Contact page includes a contact form, embedded Google Map, and church contact details.

## Firebase Configuration

Make sure to configure your Firebase project in the Firebase console to enable Firestore and Storage for your application needs. Update the `src/firebase/config.js` file with your Firebase project settings.

## License

This project is licensed under the MIT License.