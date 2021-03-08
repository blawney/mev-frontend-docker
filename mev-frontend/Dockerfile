FROM debian:buster

RUN apt-get update && \
    apt-get install -y wget \
        xz-utils \
        build-essential

RUN mkdir /opt/software && \
    cd /opt/software && \
    wget https://nodejs.org/dist/v14.3.0/node-v14.3.0-linux-x64.tar.xz && \
    tar -xf node-v14.3.0-linux-x64.tar.xz
ENV PATH="/opt/software/node-v14.3.0-linux-x64/bin:${PATH}"

COPY ./mev-frontend /opt/software/mev-frontend

RUN cd /opt/software/mev-frontend && \
    npm install && \
    npm run build

RUN mkdir -p /var/www/html && \
    cp -r /opt/software/mev-frontend/dist/web-mev /var/www/html

ENTRYPOINT ["/bin/bash"]
