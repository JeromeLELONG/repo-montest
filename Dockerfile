FROM node
RUN apt-get -yq update
RUN npm install json-server -g
RUN npm install -g nodemon
WORKDIR /app
COPY my-app /app
CMD [ "npm", "run", "start:server" ]
EXPOSE 8080