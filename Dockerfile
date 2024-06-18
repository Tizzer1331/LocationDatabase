FROM node:21
WORKDIR /FantasyBucketList/main
COPY package.json ./
RUN npm install
COPY . .
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "run", "start"]
