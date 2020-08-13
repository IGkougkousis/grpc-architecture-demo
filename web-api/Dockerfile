# Base image
FROM python:3.8-buster

# Arguments
ARG flask_app
ARG flask_run_host
ARG flask_run_port
ARG grpc_server_port
ARG grpc_server_host

# Preparation
WORKDIR /app
COPY ./web-api/requirements.txt .
RUN pip install -r requirements.txt
COPY ./web-api/ .
COPY ./protos/code/python/ .

# Setting environment variables
ENV FLASK_APP $flask_app
ENV FLASK_RUN_HOST $flask_run_host
ENV FLASK_RUN_PORT $flask_run_port
ENV GRPC_SERVER_HOST $grpc_server_host
ENV GRPC_SERVER_PORT $grpc_server_port

# Expose relevant port and run
EXPOSE $flask_run_port
CMD ["flask", "run"]
