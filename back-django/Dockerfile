FROM python:3
ENV PYTHONUNBUFFERED 1
RUN apt-get -y update
RUN apt-get -y install vim

ADD . /tmp
WORKDIR /tmp
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
EXPOSE 8000
RUN ls
RUN pwd
CMD ["uwsgi", "--ini", "/tmp/uwsgi/uwsgi.ini"]