FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Use this if you want to develop locally.
#RUN npm install
# If you are building your code for production
RUN npm ci

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]