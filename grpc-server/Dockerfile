# Base image
FROM python:3.8-buster

# Arguments
ARG grpc_server_port

# Preparation
WORKDIR /app
COPY ./grpc-server/requirements.txt .
RUN pip install -r requirements.txt
COPY ./grpc-server/  .
COPY ./protos/code/python .

# Setting environment variables
ENV GRPC_SERVER_PORT $grpc_server_port

# Expose relevant port and run
EXPOSE $grpc_server_port
CMD ["python", "-u", "./server.py"]
