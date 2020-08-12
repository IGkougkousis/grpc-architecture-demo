import csv
import logging
import os
import grpc

from concurrent import futures
from fastnumbers import fast_float
from measurement_pb2 import Measurement, MeterUsage
from measurement_pb2_grpc import add_MeterUsageServiceServicer_to_server, MeterUsageService


def get_csv_meter_usage():
    filename = 'data/meterusage.csv'
    with open(filename, newline='') as f:
        reader = csv.reader(f)

        # using fastnumbers.fast_float to parse floats from string
        # on failure assign 0.0
        def to_float(x): return fast_float(x, default=0.0, nan=0.0, inf=0.0)

        # map csv data to dict
        data = [{'time': x[0], 'meterusage': to_float(x[1])} for x in reader]

        # skip header row
        data = data[1:]

        return data


class MeterUsageFromCSV(MeterUsageService):

    def GetMeterUsage(self, request, context):
        csv_data = get_csv_meter_usage()

        # convert to grpc class, that is what clients expect
        converted = [Measurement(time=x.time, meterusage=x.meterusage)
                     for x in csv_data]
        meter_usage = MeterUsage(measurements=converted)
        return meter_usage


def serve(port):
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=4))
    add_MeterUsageServiceServicer_to_server(
        MeterUsageFromCSV(), server)
    server.add_insecure_port(f'[::]:{port}')
    server.start()
    server.wait_for_termination()


if __name__ == '__main__':
    port = os.environ['GRPC_SERVER_PORT']
    logging.basicConfig()
    print(f'grpc server running on localhost:{port}')
    serve(port)
