FROM node:18
WORKDIR /app
COPY package*.json ./
COPY webpack.config.js ./
RUN npm install
COPY . /app
RUN npm run build
EXPOSE 5000
CMD ["node", "server.js"]