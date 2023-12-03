# Raul Engalnd Pelenio - 101367043 
## Assignment 2 - ReactJS 

## This repository contains the code for COMP3123 Assignment 2. where we use ReactJS as our frontend 
and communicate with the backend for our crud operations

## Prerequisites
Make sure you have the following installed on your system:
- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started
1. Clone the repository:
    ```bash
    git clone https://github.com/Kujiama/101367043_comp3123_assignment2.git
    cd 101367043_comp3123_assignment2
    ```

2. Navigate to the frontend directory and install dependencies:
    ```bash
    cd frontend
    npm install
    ```

3. Navigate to the backend directory and create a `.env` file:
    ```bash
    cd ../backend
    touch .env
    ```

4. Open the `.env` file in a text editor and add the following lines, replacing the empty variables with your actual MongoDB username and password:
    ```env
    DB_USER=<mongodb username>
    DB_PASS=<mongodb password>
    ```
5. Save and close the `.env` file.

6. While in the backend directory install the dependencies
   ```bash
    npm install
   ```

7. Return to the root directory.


## Running the Application
Use Docker Compose to run the application. Update the values in the `docker-compose.yml` file if necessary.

```bash
docker-compose -p assignment2-comp3123 -f docker-compose.yml up -d
```

## Accessing the Application
Provide information on how users can access the application. For example:

Web Application:
Open a web browser and go to http://localhost:8080.

API Endpoint:
The API is accessible at http://localhost:8484.

Stopping the Application
To stop the application, run the following command:

```bash
docker-compose -p assignment2-comp3123 -f docker-compose.yml down
```
