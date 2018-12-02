# Node 10.14
FROM 10.14-slim
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY ./dist/ /usr/src/app
EXPOSE 8000
CMD ["npm", "run", "start:prod"]