FROM python:3.8-buster
ARG flask_app
ARG flask_run_host
ARG flask_run_port
WORKDIR /app
COPY ./web-api/requirements.txt .
RUN pip install -r requirements.txt
COPY ./web-api/ .
ENV FLASK_APP $flask_app
ENV FLASK_RUN_HOST $flask_run_host
ENV FLASK_RUN_PORT $flask_run_port
EXPOSE $flask_run_port
CMD ["flask", "run"]
