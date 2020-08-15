# grpc-server

A gRPC server written in Python that implements the service `MeterUsage` from `protos/definitions/measurement.proto`. All the code is in `server.py`.

Reads meter usage data from `data/meterusage.csv` and sends it through gRPC to any clients that request it.

The code expects the environment variable `GRPC_SERVER_PORT` to be set, otherwise a `KeyError` will be thrown. This is currently handled by docker.
