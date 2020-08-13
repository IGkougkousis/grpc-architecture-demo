# grpc-server

A gRPC server that implements the service `MeterUsage` from `protos/definitions/measurement.proto`.

Reads meter usage data from `data/meterusage.csv` and can send it through gRPC to any clients that request it.

The code expects the environment variable `GRPC_SERVER_PORT` to be set, otherwise a `KeyError` will be thrown. This is currently handled by docker.
