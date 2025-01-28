# Builder App Backend

This project is a backend application for the Builder App, developed using NestJS and MongoDB. It provides APIs and WebSocket functionalities to support a fully functional builder application, ensuring seamless communication and data management between the frontend and backend.

## Features

### REST APIs
- **User Management**: CRUD operations for user data.
- **Media Management**:
  - Media stored in MongoDB.
  - Media stored on Cloudinary.
- **Frontend Data**: CRUD operations for frontend-related data.
- **Authentication**: User authentication using JWT tokens and Auth Guards.

### WebSockets
- Real-time communication between clients using WebSocket integration.

### Data Management
- **Schemas and DTOs**: Defined for robust data validation and management.

### CORS
- Enabled to support communication between the backend and frontend running on different ports.

## Technologies Used
- **Framework**: NestJS
- **Database**: MongoDB (Atlas / Compass)
- **Authentication**: JWT tokens and Auth Guards
- **File Storage**: Cloudinary
- **Real-Time Communication**: WebSockets

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine.
- MongoDB instance running locally or in the cloud.
- Cloudinary account for media storage.

### Cloning the Repository
```bash
git clone https://github.com/BilalSubhani/BuilderAppBackend.git
cd BuilderAppBackend
```

### Setting Up the Environment
1. Create a `.env` file in the root directory.
2. Add the following configuration details to your `.env` file:
    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret_key
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

### Installing Dependencies
```bash
npm install
```

### Running the Application
```bash
npm run start:dev
```
- The server will run at `http://localhost:3000`.
- The websockets will run at `http://localhost:3001`.

## API Documentation
- Detailed API documentation is available at `/api/docs` (if Swagger is integrated).

## Deployment
To deploy this backend application:
1. Set up the production environment variables.
2. Build the project:
    ```bash
    npm run build
    ```
3. Start the production server:
    ```bash
    npm run start:prod
    ```

## Contact
For questions, suggestions, or support, please reach out:
- **Email**: bilalsubhanii@outlook.com
- **GitHub**: [Bilal Subhani](https://github.com/BilalSubhani)

---

Feel free to contribute or report issues to enhance the Builder App Backend!
