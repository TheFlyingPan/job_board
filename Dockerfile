FROM fauria/lamp:latest

WORKDIR /var/back

COPY ./back /var/back
COPY ./front /var/www/html
COPY ./job_board.sql /tmp/job_board.sql
COPY ./script.sh /tmp/script.sh

RUN /tmp/script.sh

EXPOSE 3000
CMD ["cd", "/var/back/"]