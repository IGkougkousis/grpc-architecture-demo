# web-api

A Flask web server that uses a gRPC client to receive data from a gRPC server. The Flask web server exposes the endpoint `/meterusage` and return JSON. The `/` endpoint is exposed and returns "Hello, World!", as an easy way to verify that the server is running.

## Remarks

`client.py` expects the environment variable `GRPC_SERVER_PORT` to be set. This is currently handled by docker.
