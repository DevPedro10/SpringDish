<h3 align="center">SpringDish</h3>
<br>
<div align="center"><img src="https://img.icons8.com/color/48/000000/spring-logo.png" alt="Spring Boot Logo"> <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React Logo"></div>
<br>
<p>This repository contains both the backend and frontend applications for a CRUD project developed to learn Spring Boot (backend) and React with TypeScript (frontend). The project focuses on managing a menu, enabling CRUD operations on menu items.</p>

<h4>Backend (Spring Boot)</h4>
<ol>
    <li>Clone this repository to your local machine.</li>
    <li>Navigate to the <code>backend</code> directory.</li>
    <li>Ensure you have Java and Maven installed.</li>
    <li>Run the backend application using Maven: <code>mvn spring-boot:run</code>.</li>
</ol>

<h4>Frontend (React + TypeScript)</h4>
<ol>
    <li>Navigate to the <code>frontend</code> directory.</li>
    <li>Install dependencies using npm or yarn: <code>npm install</code> or <code>yarn install</code>.</li>
    <li>Run the frontend application: <code>npm start</code> or <code>yarn start</code>.</li>
</ol>

<h3>Database Configuration</h3>

<p>The backend application is configured to use an in-memory database called H2 by default. However, if you prefer to use MySQL, the configuration is also provided but commented out.</p>

<p>To switch to MySQL:</p>
<ol>
    <li>Uncomment the MySQL datasource configuration in <code>backend/src/main/resources/application.properties</code>.</li>
    <li>Provide your MySQL database credentials.</li>
    <li>Restart the backend application.</li>
</ol>

<h3>Endpoints</h3>

<p>The following endpoints are available:</p>
<ul>
    <li><code>GET /menu</code>: Retrieve all menu items.</li>
    <li><code>GET /menu/{id}</code>: Retrieve a specific menu item by ID.</li>
    <li><code>POST /menu/registerFood/</code>: Create a new menu item.</li>
    <li><code>PUT /menu/updateFood/{id}</code>: Update an existing menu item.</li>
    <li><code>DELETE /menu/deleteFood/{id}</code>: Delete a menu item by ID.</li>
</ul>

<h3>Contributing</h3>

<p>Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or create a pull request.</p>

<p>Happy coding! 🚀</p>
