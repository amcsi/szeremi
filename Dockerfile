FROM node
MAINTAINER  Attila Szeremi <attila+webdev@szeremi.com>
RUN mkdir /src
WORKDIR /src
RUN cd /src
# Copy just the package.json file file as a cache step.
COPY package.json /src/package.json
# This makes npm install much faster.
RUN npm set progress=false
# Do not show colors, because Dockerhub can't display them.
RUN npm set color=false
# Install NPM packages excluding the dev dependencies.
RUN npm install --production
COPY . .
RUN npm run build
EXPOSE  8080
CMD ["npm", "run", "start"]
