FROM nginx:alpine

# Remove any default static files Nginx comes with
RUN rm -rf /usr/share/nginx/html/*

# Copy your local project files into the Nginx web directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY quiz.js /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]