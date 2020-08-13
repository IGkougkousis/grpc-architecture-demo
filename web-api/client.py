from __future__ import print_function
import logging
import os
import grpc

from measurement_pb2 import Empty, MeterUsage
import measurement_pb2_grpc


def get_meter_usage() -> MeterUsage:
    port = os.environ['GRPC_SERVER_PORT']
    host = os.environ['GRPC_SERVER_HOST']
    with grpc.insecure_channel(f'{host}:{port}') as channel:
        stub = measurement_pb2_grpc.MeterUsageServiceStub(channel)
        request_param = Empty()
        response = stub.GetMeterUsage(request_param)
        return response


def _test():
    response = get_meter_usage()
    print('I called the grpc server and got:')
    print(response)


if __name__ == '__main__':
    logging.basicConfig()
    _test()
