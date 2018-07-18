FROM node
RUN apt-get -yq update
RUN npm install json-server -g
RUN npm install -g nodemon
CMD [ "npm", "run", "start:server" ]