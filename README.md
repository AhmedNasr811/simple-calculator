# Simple Calculator

This repository hosts a simple web application for performing basic arithmetic operations using Node.js and Express.

## Features

- Perform basic arithmetic operations (addition, subtraction, multiplication, and division)
- Simple and intuitive user interface

## Prerequisites

Before running the application, ensure you have the following installed:

- Docker
- Docker Compose

## Installation

### Running with Web Server (Without Docker)

1. **Clone the Repository**

   Clone the repository and navigate to the project directory:

   ```bash
   git clone https://github.com/AhmedNasr811/simple-calculator.git
   cd simple-calculator
   ```
2. Install Node.js

   Ensure you have Node.js installed. You can install it using a package manager
   or download it from the official Node.js website.

   For Ubuntu or Debian-based systems:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
   ```

3. Install Application Dependencies

   Navigate to your project directory and install the dependencies listed in package.json:

   ```bash
   npm install
   ```

4. Start the Application

   Run the Express.js server:
   
   ```bash
   node server.js
   ```

5. Access the Application

   Open a web browser and navigate to http://localhost:3000. 
   You should see the Simple Calculator application running

### Running with Docker Compose


Clone the repository and navigate to the project directory:
    
Set up Docker on your machine
      
   ```bash
   sudo apt-get update
   sudo apt install docker.io docker-compose docker-buildx
   ```

Test Docker 
   
   ```bash
   sudo groupadd docker
   docker run hello-world
   ```

Make sure that Docker service is enabled 

   ```bash
   sudo systemctl status docker
   ```

If It's not enabled
   ```bash
   sudo systemctl enable docker
   ```

Build the Docker Image:

 ```bash
   docker compose build
 ```

Start the Application:

```bash
docker compose up
sudo aa-remove-unknown
```
Access the Application:
### Run the application with an nginx webserver 
   ```bash
   docker-compose up --build
   ```

### Running the Application from DockerHub

 1. **Login With Docker**

   ````bash
      docker login username
   ````

  enter your username on dockerhub
   
2. **Pull Image From DockerHub**
    
   ````bash
      docker pull ahmednasr811/simple-calculator

   ````
   
3. **Run Docker Container**
   ````bash
      docker run -d -p 3000:3000 ahmednasr811/simple-calculator
   ````
  
application will be accessible at http://127.0.0.1:5000

### Folder Structure
```perl

simple-calculator/
     ├── public/                  # Static files for the frontend (HTML, JS, CSS)
     │   ├── index.html           # Main page HTML
     │   └── script.js            # JavaScript for frontend
     ├── server.js                # Main Express application file
     ├── Dockerfile               # Dockerfile for containerizing the app
     ├── docker-compose.yml       # Docker Compose configuration file
     └── nginx.conf               # Nginx configuration file (optional)
     ├── package.json             # Node.js dependencies
     └── package-lock.json        # Dependency lock file
```

### Best Practices Followed

    Node.js and npm: Utilized for managing and running the application.
    
    Docker: Containerized the application for consistent environment setup.
    
    Docker Compose: Simplified multi-container management.
    
    Nginx: (Optional) Configured as a reverse proxy for better performance and security.


   ### Deployment with K8S 

Start Minikube:

````bash
minikube start

````

Apply Kubernetes manifests:

````bash

kubectl apply -f namespace.yaml
kubectl apply -f role.yaml
kubectl apply -f rolebinding.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

````

Port forward to access the application:

````bash

kubectl port-forward --namespace simple-calc-namespace svc/simple-calc-service 8080:80

````

Open your browser and navigate to:

http://localhost:8080
