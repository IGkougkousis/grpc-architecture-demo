# grpc-architecture-demo

## Description

A microservices based project that implements the architecture described in the requirements document (`docs/Requirements.pdf`).

## Running locally

You need to have Docker Engine and `docker-compose` installed to continue.

In the project root directory:

1. Run `docker-compose build --no-cache --parallel`. This should take 5-10 minutes depending on your CPU and internet speed.
2. Run `docker-compose up`.
3. Visit [http://localhost:8080](http://localhost:8080) to view the frontend.

Successfully tested with Docker Engine version 19.03+ and `docker-compose` v1.25+ on Debian 10, Ubuntu 20.04 and Windows 10.

## Details

The 3-tier architecture described in the requirements document is implemented here as 3 docker containers. These are:

- `grpc-server`
- `web-api`
- `frontend`

`docker-compose` is used to handle the build process and networking between containers.

## Potential future improvements/excercises

### protos

- Configure the service to send a `stream` of data instead of `repeated` messages. See [here](https://grpc.io/docs/what-is-grpc/core-concepts/#server-streaming-rpc).

### grpc-server

- Move logic of parsing csv values away from here (referring to float conversion). Maybe the server should be "dumb" in this respect and allow the clients to process them.

### grpc-client

- Configure the `Access-Control-Allow-Origin` response header so the server only accepts requests from the frontend. This should be received from the docker build arguments. Currently, the header is set to `*`, which means the server will accept requests from any source.

### frontend

- Configure nginx to redirect all traffic to /. The frontend is an SPA, so all routing is "fake". The app has a `/home` route, but direct http requests to /home (for example) will prompt nginx to respond with 404 NOT FOUND, because nginx will try to find a file called home in `/usr/share/nginx/html` (no such file exists).
- Improve the line chart that shows meter usage. Some improvements would be:

  - Allow filtering of data (by date range, for example)
  - Support rendering for streaming data.
  - Support displaying aggregate data over time range (average meter usage, for example)

### General

- Write either `gprc-server` or `web-api` with a different language. Right now the gRPC server & client are both written in the same language (Python).
- Improve local development for `grpc-server` and the gRPC client part of `web-api`. The proto definitions and generated code are common, which is why they are placed in their own separate directory. However, Python modules can't be imported from directories further up from where the code is running (you can't import from `/protos/code/python` if you're working in `/grpc-server`). Locally, this was solved by creating symbolic links in the local directory and for deployment, docker simply copies to the content of `/protos/code/python` to the container, so the code there would see them as all being part of the same directory. This worked well enough for a simple project like this, but as both the proto defitions grow in size, the gRPC server & client will grow as well and this solution might not be comfortable for developers. Perhaps there is a better way?

Pull requests are welcome.
