#!/bin/sh

# Need to build in docker run step to take env vars into account for e.g. Google Analytics
npm run build

npm run serve --port 8080 --host 0.0.0.0
