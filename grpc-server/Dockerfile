FROM python:3.8-buster
ARG grpc_server_port
WORKDIR /app
COPY ./grpc-server/requirements.txt .
RUN pip install -r requirements.txt
COPY ./grpc-server/  .
COPY ./protos/code/python .
EXPOSE $grpc_server_port
ENV GRPC_SERVER_PORT $grpc_server_port
CMD ["python", "./server.py"]

