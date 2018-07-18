FROM node
WORKDIR /app
COPY my-app /app
RUN apt-get -yq update
RUN npm install json-server -g
RUN npm install -g nodemon
RUN npm install
CMD [ "npm", "run", "start:server" ]
EXPOSE 8080