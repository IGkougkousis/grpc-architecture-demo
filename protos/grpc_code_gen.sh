#!/bin/sh
# Please run this script from its directory
# Assumes the pip packages: "grpcio" "grpcio-tools" are available
# To get them do: pip3 install --user grpcio grpcio-tools
protodir=./definitions
python_outdir=./code/python
grpc_python_outdir=./code/python

python3 -m grpc_tools.protoc -I$protodir \
    --python_out=$python_outdir \
    --grpc_python_out=$grpc_python_outdir \
    $protodir/measurement.proto
