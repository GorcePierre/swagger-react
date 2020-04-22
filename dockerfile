FROM nginx:latest

COPY /build /usr/share/nginx/html

RUN rm /etc/nginx/nginx.conf

COPY nginx.conf /etc/nginx
