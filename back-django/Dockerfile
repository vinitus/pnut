FROM python:3
ENV PYTHONUNBUFFERED 1
RUN apt-get -y update
RUN apt-get -y install vim

ADD . /tmp
WORKDIR /tmp
RUN pip install --upgrade pip
RUN pip install -r requirements.txt
RUN which pnut.sock
#RUN cd /usr/local/bin
#RUN PYTHON=python3.8 ./uwsgi --build-plugin "plugins/python python38"
#RUN mkdir -p /usr/local/bin/uwsgi/plugins/
#RUN ln -s /usr/local/src/uwsgi/python38_plugin.so /usr/local/bin/uwsgi/plugins
#RUN cd /tmp
EXPOSE 8000
CMD ["uwsgi", "--ini", "uwsgi/uwsgi.ini"]