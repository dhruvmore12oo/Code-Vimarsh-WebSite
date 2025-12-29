# Code-Vimarsh-WebSite# Code Vimarsh Club Website

This project builds a functional club website called "Code Vimarsh" with a frontend, backend, and database integration.

## Tech Stack

-   **Frontend:** HTML, CSS, JavaScript
-   **Backend:** Java (Spring Boot REST API)
-   **Database:** MySQL

## Project Structure

```
CodeVimarsh/
├── backend/                # Java Spring Boot backend project
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/codevimarsh/  # Java source code
│   │   │   ├── config/             # Configuration classes (e.g., CORS)
│   │   │   ├── controller/         # REST API endpoints
│   │   │   ├── dao/                # Data Access Objects (Spring Data JPA repositories)
│   │   │   ├── model/              # JPA Entities
│   │   │   └── service/            # Business logic
│   │   └── resources/
│   │       ├── application.properties # Spring Boot configurations
│   │       └── static/             # Static resources (if any)
│   ├── pom.xml                 # Maven project file
├── database/               # SQL scripts for database setup
│   └── schema.sql
├── frontend/               # HTML, CSS, and JavaScript files
│   ├── css/
│   │   └── style.css           # Main stylesheet
│   ├── js/
│   │   ├── auth.js             # Login page JavaScript
│   │   ├── events.js           # Events page JavaScript
│   │   ├── members.js          # Members page JavaScript
│   │   └── script.js           # General JavaScript
│   ├── index.html              # Home page
│   ├── login.html              # Login page
│   ├── events.html             # Events page
│   ├── members.html            # Members page
│   └── dashboard.html          # Simple dashboard after login
└── README.md               # Project documentation
```

## Setup Guide

Follow these steps to set up and run the Code Vimarsh website.

### 1. Database Setup (MySQL)

1.  **Install MySQL:** If you don't have MySQL installed, download and install it from the official MySQL website ([https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)). You will also need a MySQL client (e.g., MySQL Workbench, DBeaver, or the command-line client).

2.  **Create Database:** Open your MySQL client and create a new database. For example, you can run the following SQL command:
    ```sql
    CREATE DATABASE codevimarsh_db;
    ```

3.  **Import Tables and Sample Data:**
    I will provide the `schema.sql` file in the `database/` directory. This file will contain the SQL commands to create the `users`, `events`, and `members` tables and populate them with sample data.

    To import the schema, navigate to the `database/` directory in your terminal and run:
    ```bash
    mysql -u your_username -p codevimarsh_db < schema.sql
    ```
    Replace `your_username` with your MySQL username. You will be prompted to enter your password.

### 2. Backend Setup (Java Spring Boot)

1.  **Navigate to Backend Directory:**
    ```bash
    cd backend
    ```

2.  **Configure Database Connection:**
    Open the `src/main/resources/application.properties` file:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/codevimarsh_db?useSSL=false&serverTimezone=UTC
    spring.datasource.username=root
    spring.datasource.password=password
    # ... other properties
    ```
    Update `spring.datasource.username` and `spring.datasource.password` with your MySQL database credentials. Ensure `codevimarsh_db` matches the database name you created.

3.  **Build and Run the Backend:**
    You can build and run the Spring Boot application using Maven:
    ```bash
    ./mvnw clean install
    ./mvnw spring-boot:run
    ```
    (On Windows, you might need to use `mvnw.cmd` instead of `./mvnw`)

    The backend server will start on `http://localhost:8080`.

### 3. Frontend Setup (HTML, CSS, JavaScript)

1.  **Open Frontend in Browser:**
    Navigate to the `frontend/` directory. You can open `index.html` directly in your web browser. For full functionality (especially API calls), it's recommended to serve the frontend using a local web server (e.g., Live Server extension for VS Code, or `python -m http.server`).

    If using a local web server, it should typically run on `http://127.0.0.1:5500` or `http://localhost:5500`. Ensure this matches the `allowedOrigins` in `backend/src/main/java/com/codevimarsh/config/DatabaseConfig.java` for CORS to work correctly.

### 4. API Connectivity

The frontend communicates with the backend using Fetch API calls to `http://localhost:8080`. Here are the main API endpoints:

-   **Login:**
    -   `POST /api/auth/login`
    -   Authenticates user credentials.

-   **Events:**
    -   `GET /api/events`
    -   Fetches all upcoming events.

-   **Members:**
    -   `GET /api/members`
    -   Fetches the list of club members.

Ensure the backend is running before accessing frontend pages that rely on dynamic data.

## Development Notes

-   **Password Hashing:** User passwords are encrypted using BCrypt before storing them in the database.
-   **Sample Users:** The `schema.sql` includes sample users: `dhruv` and `prit`, both with the password `password123`.
-   **CORS Configuration:** The backend is configured with CORS to allow requests from `http://localhost:5500` and `http://127.0.0.1:5500`. Adjust `DatabaseConfig.java` if your frontend is served from a different origin.
-   **Future Enhancements:** The backend is structured to easily allow for adding new events or members via POST requests to the respective `EventController` and `MemberController` endpoints.


