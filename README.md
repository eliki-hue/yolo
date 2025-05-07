# E-commerce Backend Setup with Docker and Ansible

This project sets up a simple e-commerce backend using Node.js and Docker. It uses Ansible to automate the setup inside a Vagrant virtual machine. The goal was to make deployment easy and repeatable using configuration management tools.

## Project Structure

The setup includes:

- **Ansible Roles:** Each part of the setup (e.g. backend setup, cloning the repo, installing dependencies, running Docker) is handled using its own role.
- **Docker:** The backend runs inside a Docker container using a multi-stage build.
- **GitHub Integration:** The code is pulled directly from GitHub.

## Technologies Used

- Node.js
- Docker
- Ansible
- Vagrant
- Git

## Prerequisites

Make sure you have these installed on your system before running the project:

- Vagrant
- VirtualBox
- Ansible
- Git

## How It Works

1. When you run `vagrant up`, Vagrant starts a virtual machine.
2. Ansible is used to:
   - Install Docker inside the VM
   - Clone the backend code from GitHub
   - Build a Docker image using the Dockerfile
   - Run the backend container
3. The backend runs on port 5000 (or whichever you map).

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name