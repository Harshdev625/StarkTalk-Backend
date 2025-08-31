# StarkTalk Backend

>This is the backend server for StarkTalk, built with Node.js and Express. It provides RESTful APIs and real-time communication for the chat application.

---

## 🚀 Features
- User authentication (JWT)
- Real-time chat with Socket.io
- Group and private messaging
- Admin management
- File uploads (multer)

## 🗂️ Project Structure
- `app.js` — Main entry point
- `controllers/` — Route handlers
- `models/` — Mongoose models
- `routes/` — API routes
- `middlewares/` — Express middlewares
- `utils/`, `lib/` — Utility functions

## ⚙️ Environment Variables
Create a `.env` file in the backend root. Example:
```
PORT=5000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
SOCKET_IO_ORIGIN=http://localhost:5173
```

## 🛠️ Setup & Development
1. Install dependencies:
    ```sh
    npm install
    ```
2. Configure environment variables in `.env`
3. Start the server:
    ```sh
    npm start
    ```
    For development with auto-reload (if nodemon is installed):
    ```sh
    npm run dev
    ```

## 🧪 Testing & Seeding
- To run tests (if available):
   ```sh
   npm test
   ```
- To seed the database (if seeders are provided):
   ```sh
   node seeders/user.js
   node seeders/chat.js
   ```

## 📝 API Documentation
- API base URL: `/api`
- See code comments and controllers for endpoint details.
- (Optional) Use Swagger or Postman collection for full API docs.

## 🔧 Scripts
- `npm start` — Start server
- `npm run dev` — Start server with nodemon
- `npm test` — Run tests (if available)

## 🐞 Troubleshooting & FAQ
- Ensure MongoDB is running and URI is correct
- Check `.env` for required variables
- For CORS/socket issues, verify frontend URL in `SOCKET_IO_ORIGIN`

## 🤝 Contributing
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

For more details, see the code comments and controllers. For API usage, see the frontend or use tools like Postman.
