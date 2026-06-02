# QuizMaster

A simple interactive quiz web application built with HTML, CSS, and JavaScript.
Deployed using Docker and automated via GitHub Actions CI/CD pipeline.

## Features

- 4 quiz categories: General Knowledge, Science, Technology, History
- 10 questions per round with 15 second countdown timer
- Speed bonus scoring system
- Fully responsive for mobile and desktop
- Dockerized with nginx for deployment

## Project Structure

quizmaster/
├── index.html                   
├── style.css                    
├── quiz.js                      
├── Dockerfile                   
├── .github/
│   └── workflows/
│       └── deploy.yml           
└── README.md

## Run Locally with Docker

# Clone the repository
git clone https://github.com/<your-username>/quizmaster.git
cd quizmaster

# Build the Docker image
docker build -t quizmaster .

# Run the container
docker run -p 8080:80 quizmaster

# Open in browser
# http://localhost:8080

## GitHub Actions Setup

Pipeline runs automatically on every push to main branch.

Stages:
1. Validate - checks all required files exist
2. Build - builds Docker image and tests the container
3. Push - pushes image to Docker Hub

### Add These Secrets in GitHub

Go to Settings > Secrets and variables > Actions and add:

| Secret            | Value                        |
|-------------------|------------------------------|
| DOCKER_USERNAME   | Your Docker Hub username     |
| DOCKER_PASSWORD   | Your Docker Hub password     |

## Deploy on Render

1. Push Docker image to Docker Hub via CI/CD pipeline
2. Go to render.com and create New Web Service
3. Select Deploy an existing image from a registry
4. Enter image: docker.io/<your-username>/quizmaster:latest
5. Set port to 80 and click Deploy

## GitHub Concepts Used

| Concept          | Usage                                   |
|------------------|-----------------------------------------|
| Branches         | main branch for production              |
| Commits          | Track every change with messages        |
| Pull Requests    | Review changes before merging           |
| GitHub Actions   | Automated CI/CD pipeline                |
| Secrets          | Secure Docker Hub credentials           |