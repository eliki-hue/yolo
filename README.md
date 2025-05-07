# E-commerce Backend Setup with Docker and Ansible

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
'''bash
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



'''bash
    vagrant ssh