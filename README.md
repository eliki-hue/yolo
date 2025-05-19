# E-Commerce Deployment: Docker, Ansible, Vagrant & Kubernetes

This project sets up a simple e-commerce backend using Node.js and Docker. It uses Ansible to automate the setup inside a Vagrant virtual machine. The goal was to make deployment easy and repeatable using configuration management tools.

## Project Structure

The setup includes:

- **Ansible Roles:** Each part of the setup (e.g. backRole Name
=========

A brief description of the role goes here.

Requirements
------------

Any pre-requisites that may not be covered by Ansible itself or the role should be mentioned here. For instance, if the role uses the EC2 module, it may be a good idea to mention in this section that the boto package is required.

Role Variables
--------------

A description of the settable variables for this role should go here, including any variables that are in defaults/main.yml, vars/main.yml, and any variables that can/should be set via parameters to the role. Any variables that are read from other roles and/or the global scope (ie. hostvars, group vars, etc.) should be mentioned here as well.

Dependencies
------------

A list of other roles hosted on Galaxy should go here, plus any details in regards to parameters that may need to be set for other roles, or variables that are used from other roles.

Example Playbook
----------------

Including an example of how to use your role (for instance, with variables passed in as parameters) is always nice for users too:

    - hosts: servers
      roles:
         - { role: username.rolename, x: 42 }

License
-------

BSD


end setup, cloning the repo, installing dependencies, running Docker) is handled using its own role.
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

2. Start the Vagrant Virtual Machine
Make sure Vagrant is installed on your system. Then run:

    vagrant up

this will :
    Create a virtual machine

    Provision it using Ansible (as defined in the Vagrantfile)

    Install Docker

    Clone your app code

    Build the Docker image

    Run the backend container

3. Access the Backend
Once setup completes, open your browser and go to:


http://localhost:5000

You should see your application running.

4. SSH into the VM
To inspect or run commands manually:




    vagrant ssh


# ORCHESTRATION

## Orchestration on Kubernetes

This section shows how to deploy the frontend and backend containers to Kubernetes, either locally with Minikube or in the cloud on GKE.

## Prerequisites
    kubectl

    Minikube (for local) or gcloud + GKE setup (for cloud)

### 1. Build or Pull Your Docker Images


- **Option A: Build locally in Minikube**
  ```bash
  eval $(minikube docker-env)
  docker build -t yourhub/backend:v1 ./backend
  docker build -t yourhub/frontend:v1 ./frontend

# Apply Kubernetes Manifests

    kubectl apply -f backend-deployment.yaml
    kubectl apply -f backend-service.yaml
    kubectl apply -f frontend-deployment.yaml
    kubectl apply -f frontend-service.yaml


    backend-deployment.yaml defines a Deployment for your Node.js API

    backend-service.yaml exposes it on port 5000

    frontend-deployment.yaml defines a Deployment for your React app

    frontend-service.yaml exposes it on port 3000

# Cloud (GKE)

    Ensure your cluster is up and you’ve run:


    gcloud container clusters get-credentials <cluster-name> --zone <zone>

## Apply the same manifests:


    kubectl apply -f .

## List services to find the external IPs:


    kubectl get svc

### Visit:


    http://<frontend-external-ip>:3000
    http://<backend-external-ip>:5000/api