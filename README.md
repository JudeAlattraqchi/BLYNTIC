# Blyntic AI App

This project was built with React, Vite, and Firebase. It is fully ready to be run in Google AI Studio or on a local machine.

## How to run in a new Google AI Studio instance
1. Download this project as a ZIP file (using the Export option in the AI Studio menu).
2. Open a new Google AI Studio project and upload/import the ZIP file.
3. The environment will automatically read the `package.json`, install the dependencies, and start the app.
4. **Important**: Because your Firebase credentials are secure, they are not saved in the code. You will be prompted to re-enter your environment variables defined in `.env.example`:
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_PRIVATE_KEY`
5. Once you provide the variables, the app will connect to your backend and function normally.

## How to run locally
1. Ensure you have Node.js installed.
2. Unzip the project.
3. Open a terminal in the project directory.
4. Run `npm install`
5. Create a `.env` file based on `.env.example` and fill in your Firebase credentials.
6. Run `npm run dev` to start the local development server.
