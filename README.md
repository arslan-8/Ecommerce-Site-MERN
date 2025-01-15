# Ecommerce-Site-MERN

This is a Node.js-based full-stack project featuring a React.js frontend and Express.js backend. The application uses Material UI for design and Redux for state management, with MongoDB as the database.

## Setup and Installation

### Backend Setup

1. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn add
   ```

2. **Create a ********`.env`******** File**:
   Add the following environment variables to the `.env` file at the root of the project:

   **Cloudinary Configuration**:

   ```
   CLOUDINARY_NAME=your-cloudinary-name
   CLOUDINARY_API_KEY=your-cloudinary-api-key
   CLOUDINARY_API_SECRET=your-cloudinary-api-secret
   ```

   **Server Configuration**:

   ```
   PORT=your-desired-port
   ```

   **Database Configuration**:

   ```
   DB_URI=your-mongodb-database-url
   ```

   **JWT Configuration**:

   ```
   JWT_SECRET=your-jwt-secret
   JWT_EXPIRE=duration-of-token-expiry
   COOKIE_EXPIRE=duration-of-cookie-expiry
   ```

   **Email Configuration**:

   ```
   SMPT_HOST=your-smtp-host
   SMPT_PORT=your-smtp-port
   SMPT_SERVICE=your-smtp-service
   SMPT_MAIL=your-smtp-email
   SMPT_PASSWORD=your-smtp-password
   ```

3. **Run the Server**:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   The backend will start running on the port specified in `process.env.PORT`.

### Frontend Setup

1. **Navigate to the Frontend Directory**:

   ```bash
   cd frontend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   # or
   yarn add
   ```

3. **Start the Frontend**:

   ```bash
   npm start
   # or
   yarn start
   ```

   This will start the React development server. Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

### Build for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
```

The build will be output to the `build` folder, ready for deployment.

---

Your ecommerce application is now set up and ready to run!

