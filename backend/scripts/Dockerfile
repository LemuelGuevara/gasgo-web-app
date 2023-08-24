FROM ubuntu:latest
LABEL authors="lemuelguevara"

RUN apt update
RUN apt install python3 -y

CMD ["python3", "pip install Django"]
CMD ["python3", "pip install psycopg2"]

RUN mkdir scripts

COPY wipe_db.py scripts/wipe_db.py
COPY populate_db.py scripts/populate_db.py

WORKDIR scripts

ENTRYPOINT ["python3", "wipe_db"]
ENTRYPOINT ["python3", "populate_db"]
