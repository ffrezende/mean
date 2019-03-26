FROM node:latest
MAINTAINER Fabricio Fraga
COPY . /var/www
WORKDIR /var/www

RUN npm install
EXPOSE 3030

