from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('add/', views.add_item, name='add_item'),
    path('remove/', views.remove_item, name='remove_item'),
    path('getCart/', views.get_cart, name='get_cart')
]