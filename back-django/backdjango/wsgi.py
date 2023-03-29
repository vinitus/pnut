"""
WSGI config for backdjango project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/wsgi/
"""

import os, sys

from django.core.wsgi import get_wsgi_application

sys.path.append('/home/ubuntu/jenkins_docker/jenkins_home/workspace/Pnut-back-django/back-django')
sys.path.append('/home/ubuntu/jenkins_docker/jenkins_home/workspace/Pnut-back-django/back-django/backdjango')

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "backdjango.settings")

application = get_wsgi_application()
