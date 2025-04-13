# Base image for serving static files
FROM nginx:latest

# Copy all project files from the website folder to the nginx directory
COPY ./website/ /usr/share/nginx/html/

# Expose port 80 for web traffic
EXPOSE 80

