# 🧠 Quiz Master Application

A web-based interactive quiz application built with HTML, CSS, and JavaScript. This project is containerized using Docker and deployed automatically using CI/CD practices.

## 🚀 Live Demo
You can view the live deployed application here: 
👉 [https://quizmaster-latest.onrender.com](https://quizmaster-latest.onrender.com)

---

## 🛠️ Tech Stack & Tools Used

* **Frontend:** HTML5, CSS3, JavaScript (ES6)
* **Web Server:** Nginx (Alpine Linux base image)
* **Containerization:** Docker
* **CI/CD Pipeline:** GitHub Actions
* **Cloud Deployment Platform:** Render

---

## 📦 How to Run Locally Using Docker

If you want to run this project on your own machine, ensure you have Docker Desktop installed, then run the following commands in your terminal:

1. **Build the Docker Image:**
   ```bash
   docker build -t quizmaster:latest .