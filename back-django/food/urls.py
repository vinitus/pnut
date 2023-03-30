from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.get_personal_food),
    path('test/', views.calc_weight),
    path('test2/', views.get_personal_food),
    path('calc/', views.get_personal_food),
    path('info/', views.get_single_food),
    path('search/', views.search_food),
    path('nutrient/', views.lack_of_nutrient),
    path('symptom/<symptom_id>', views.search_symptom),
]