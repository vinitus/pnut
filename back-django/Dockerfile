FROM python:3
ENV PYTHONUNBUFFERED 1
RUN apt-get -y update
RUN apt-get -y install vim

RUN mkdir /tmp
ADD . /tmp

WORKDIR /tmp

RUN pip install --upgrade pip
RUN pip install -r requirements.txt

EXPOSE 8000
CMD ["uwsgi", "--ini", "uwsgi/uwsgi.ini"]