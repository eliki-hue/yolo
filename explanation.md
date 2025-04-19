# Explanation of Docker Setup

## 1. Choosing the Right Base Image

### Frontend (elijah-yolo-client):
I went with `node:16-alpine` for the React app. It’s a lightweight version of the Node image that keeps the image size down without losing the essential tools needed to build and run the React app.

### Backend (elijah-yolo-backend):
For the backend, I used the same `node:16-alpine` base image. It’s minimal yet provides everything needed to run a Node.js backend efficiently, keeping the container small and fast.

### MongoDB:
For the database, I used the official `mongo` image. It’s a solid, well-maintained image that’s great for development and small-scale production environments.

---

## 2. Dockerfile Breakdown
Here’s a breakdown of the Dockerfile and key instructions I used:

- `FROM`: sets the base image for each stage.
- `WORKDIR`: ensures we’re working in the correct directory in the container.
- `COPY`: brings files from the host machine into the container.
- `RUN`: installs the necessary dependencies.
- `EXPOSE`: tells Docker which port the app uses.
- `CMD`: defines how to run the app in the container.

### For the frontend:
I used a multi-stage build. In the first stage, I build the React app using Node 16 with `npm run build`, and then in the second stage, I use Nginx to serve the built app.

This means only the necessary build files are copied to the Nginx image, which helps reduce the final image size and lets Nginx handle serving static files for faster performance.

Using Nginx for serving the React app is a good practice in production. Nginx is really efficient at serving static files and can handle much more traffic than Node.js in this case, making the app more scalable.

---

## 3. Networking with Docker Compose
I created a custom bridge network called `app-net` to enable the containers (client, backend, and MongoDB) to communicate with each other internally. This gives me more control over how the containers interact compared to using Docker’s default network.

### For port mapping:
- The React frontend runs on port 3000.
- The Node backend runs on port 5000.
- MongoDB runs on port 27017.

I also used `depends_on` to ensure the services start in the correct order. This way, the frontend won’t try to connect to the backend or the database before they’re ready.

---

## 4. Volume Setup
To manage data persistence for MongoDB, I defined a named volume called `app-mongo-data` and mounted it to `/data/db` inside the Mongo container. This ensures that even if the Mongo container is stopped or removed, the database data will persist and be available for future use.

---

## 5. Git Workflow
For the Git workflow, I kept things simple but effective. Here’s how I went about it:

- **Cloning**: First, I cloned the repository to get everything set up on my local machine.
- **Adding**: After making changes, I used `git add .` to stage all the files I modified or added.
- **Committing**: Once I was happy with the changes, I committed them with clear messages using `git commit -m "Your commit message"`.

---

## 6. Running & Debugging the App
To get everything up and running:

```bash
docker-compose up --build