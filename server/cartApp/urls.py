from django.urls import path
from . import views

urlpatterns = [
    path('add/', views.add_item, name='add_item'),
    path('remove/<int:cartItemId>', views.remove_item, name='remove_item'),
    path('getCart/', views.get_cart, name='get_cart'),
    path('getItems/', views.get_items, name='get_items'),
    path('createTicket/', views.create_ticket, name='create_ticket'),
    path('deleteTicket/<int:ticketId>', views.delete_ticket, name='delete_ticket'),
]