# FROM node:10.7.0-alpine

# Override the base log level (info).
# ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
# RUN npm install -g serve
# CMD serve -s build
# EXPOSE 5000

# Install all dependencies of the current project.
# COPY package.json package.json
# COPY npm-shrinkwrap.json npm-shrinkwrap.json
# RUN npm install

# Copy all local files into the image.
# COPY . .

# Build for production.
# RUN npm run build --production

FROM gitlab-registry.cern.ch/uverma/nile-sso-proxy/sso-proxy-image:latest
COPY ./build hdbackup/
