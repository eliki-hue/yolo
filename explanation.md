 Project Explanation

This project focuses on deploying a simple e-commerce backend using a combination of Vagrant, Ansible, and Docker. The aim was to automate as much of the setup as possible, avoiding manual steps and ensuring consistent and repeatable environments.

## Objective

The goal was to:
- Create a virtual machine using Vagrant.
- Use Ansible to automate the installation of Docker, clone a GitHub repository, build a Docker image, and run the container.
- Ensure that the backend service is accessible and functional.
- Integrate MongoDB Atlas (a cloud-based MongoDB service) instead of setting up a local database.

## Tools Used

- **Vagrant:** Used to create and provision a virtual machine.
- **Ansible:** Used to automate the setup and configuration process inside the VM.
- **Docker:** Used to containerize the backend application.
- **MongoDB Atlas:** Used as a hosted NoSQL database (no need for local database container).

## Why MongoDB Atlas?

Instead of running a local MongoDB instance, I used MongoDB Atlas for several reasons:
- It's hosted in the cloud, so there's no need to manage it manually.
- The backend only needs the connection string to start interacting with the database.
- It simplifies the setup by removing the need for a separate container or role for the database.

Because of this, there is **no separate role** for database setup in this project.

## Ansible Role Structure

This project uses roles for better organization. Here's what each role does:

### 1. setup_logic
- Installs Docker on the VM.
- Ensures all required dependencies are in place.
- Prepares the environment for running containers.

### 2. back-end-logic
- Clones the backend project from GitHub.
- Builds the Docker image using the provided Dockerfile.
- Runs the container and ensures it connects to the MongoDB Atlas database.
- The `server.js` or `index.js` file should include the Atlas URI.

## Playbook Workflow

The main playbook:
- Calls the roles in order.
- Ensures the VM is ready with Docker.
- Pulls the application code.
- Builds and runs the backend in a container.
- Verifies that the backend is up and running.

## Accessing the App

Once everything is set up:
- Open a browser and go to `http://localhost:5000` (or the correct exposed port).
- The backend should be live and connected to MongoDB Atlas.

## Challenges and Solutions

- **Dockerfile Errors:** I had to ensure the Dockerfile was in the right directory and correctly referenced in the Ansible task.
- **PM2 Conflicts:** Initially used `pm2` to start the backend but later switched to using Docker.
- **MongoDB Atlas Setup:** Ensured the connection string was correct and used environment variables to keep it secure.

## Lessons Learned

- How to automate server setup with Ansible.
- How to use roles to organize Ansible tasks.
- How to build and run Docker containers inside a virtual machine.
- How to integrate a cloud database service with a local development environment.
- The importance of directory structure and path references in automation.