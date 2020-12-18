from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name = 'home'),
    path('datapart', views.datapart, name = 'datapart'),
    path('altair_alt', views.altair_alt, name = 'altair_alt'),
]
