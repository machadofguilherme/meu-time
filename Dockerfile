FROM node:16.14-alpine
WORKDIR /app
COPY package.json package-lock.json /app/
EXPOSE 5173:5173
RUN npm i
COPY . .
ENTRYPOINT [ "npm", "run" ]
CMD [ "dev" ]
