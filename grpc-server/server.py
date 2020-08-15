import csv
import logging
import os
import grpc

from typing import List, Tuple, Dict, NewType
from concurrent import futures
from fastnumbers import fast_float
from measurement_pb2 import Measurement, MeterUsage
from measurement_pb2_grpc import add_MeterUsageServiceServicer_to_server, MeterUsageService


def get_raw_csv_data(header: bool = False) -> List[Tuple[str, str]]:
    """Gets data from the csv as a list of tuples.

    Parameters:
    - header: bool
        Wheter to include the csv header row.
    """
    filename = 'data/meterusage.csv'
    with open(filename, newline='') as f:
        reader = csv.reader(f)
        data = [(x[0], x[1]) for x in reader]

        if(False == header):
            data = data[1:]

        return data


time = NewType('time', str)
measurement = NewType('measurement', float)


def parse_raw_data(raw_data: List[Tuple[str, str]]) -> List[Tuple[time, measurement]]:
    """Parses the raw csv data. 
    'time' is left unchanged. 
    'measurement' is converted to float, rounded to 4 decimal places.
    Invadid floats default to 0.0

    Parameters:
    - raw_data: List[Tuple[str,str]]
        The raw csv data. 
    """

    # using fastnumbers.fast_float to parse floats from string
    # on failure assign 0.0
    to_float = lambda x: fast_float(x, default=0.0, nan=0.0, inf=0.0)
    to_rounded_float = lambda x: round(to_float(x), 4)

    return [(x[0], to_rounded_float(x[1])) for x in raw_data]


class MeterUsageFromCSV(MeterUsageService):

    def GetMeterUsage(self, request, context) -> Measurement:
        raw = get_raw_csv_data()
        parsed_data = parse_raw_data(raw)

        # convert to grpc classes, that is what clients expect
        measurements = [Measurement(time=x[0], meterusage=x[1])
                        for x in parsed_data]

        meter_usage = MeterUsage(measurements=measurements)
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
    print(f'grpc server running on port {port}')
    serve(port)
