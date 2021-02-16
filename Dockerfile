FROM node:14

ENV PORT 8000

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json /usr/src/app/
RUN npm install

# Copying source files
COPY . /usr/src/app

# Build the app
RUN npm run build
EXPOSE 8000

# Run the app
CMD "npm" "run" "dev"
