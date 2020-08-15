# web-api

A Flask web server that uses a gRPC client to receive data from a gRPC server. The Flask web server exposes the endpoint `/meterusage` and return JSON. The `/` endpoint is exposed and returns "Hello, World!", as an easy way to verify that the server is running.

## Remarks

- `client.py` expects the environment variables `GRPC_SERVER_PORT`, `GRPC_SERVER_HOST` to be set. This is currently handled by docker.
- `server.py` is the flask app and expects the environment variables `FLASK_RUN_HOST`, `FLASK_RUN_PORT` and `FLASK_APP` to be set.
