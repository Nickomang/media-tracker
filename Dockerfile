FROM node:10

# Create app dir
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install 
# RUN npm ci --only=production //for production environments

# Bundle app source
COPY . .

# Expose necessary port
EXPOSE 8080

CMD ["node", "server.js"]