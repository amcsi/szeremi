FROM node:4
MAINTAINER  Attila Szeremi <attila+webdev@szeremi.com>
RUN mkdir /src
WORKDIR /src
RUN cd /src
COPY package.json /src/package.json
RUN npm install
COPY . .
RUN npm run build
EXPOSE  8080
CMD ["npm", "run", "start"]
