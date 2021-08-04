FROM node:latest
ENV REACT_APP_BASE_URL "http://localhost:5000"
WORKDIR /app  
COPY package.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000
