import json
from rest_framework.decorators import api_view
from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from .models import Item, Cart, CartItem, Ticket

# Create your views here.
#WILL BE USER IN FUTURE
TEMP_USER = 1

@api_view(['GET'])
def get_cart(request):
    if request.method == 'GET':
        user = request.user
        cart = Cart.objects.get(user=TEMP_USER) 
        cart_items = CartItem.objects.filter(cart=cart)
        items_list = [item.serialize() for item in cart_items]
        print(items_list)
        return JsonResponse({'items': items_list})

@api_view(['POST'])
def add_item(request):
    if request.method == 'POST':
        user = request.user
        data = request.POST
        item = Item.objects.get(id=data['item'])
        cart = Cart.objects.get(user=TEMP_USER)
        
        if Ticket.objects.filter(cart=cart).exists():
            return JsonResponse({"progress": True, "message": "Ticket already created"})

        if CartItem.objects.filter(item=item, cart=cart).exists():
            cart_item = CartItem.objects.get(item=item, cart=cart)
            cart_item.quantity += int(data['quantity'])
            cart_item.save()
            return JsonResponse({"message": "Item quantity updated"}, status=200)
        
        cart_item = CartItem.objects.create(item=item, cart=cart, quantity=data['quantity'])
        cart_item.save()
        return JsonResponse({"message": "Item added to cart"}, status=200)

@api_view(['DELETE'])
def remove_item(request, cartItemId):
    if request.method == 'DELETE':
        CartItem.objects.get(id=cartItemId).delete()
        return JsonResponse({"message": "Item removed from cart"}, status=200)
    
@api_view(['GET'])
def get_items(request):
    if request.method == 'GET':
        items = Item.objects.all()
        items_list = [item.serialize() for item in items]
        return JsonResponse({'items': items_list})
    
@api_view(['POST'])
def create_ticket(request):
    if request.method == 'POST':
        cart = Cart.objects.get(user=TEMP_USER)
        if Ticket.objects.filter(cart=cart).exists():
            ticket = Ticket.objects.get(cart=cart)
            return JsonResponse({"message": "Ticket already created", "ticket": {'id': ticket.id}})
        if not CartItem.objects.filter(cart=cart).exists():
            return JsonResponse({"message": "Cart is empty", "ticket": {'id': 0}})
        
        ticket = Ticket.objects.create(cart=cart)
        ticket.save()
        return JsonResponse({"ticket": ticket.serialize(), "message": "Ticket created"}, status=200)
    
@api_view(['DELETE'])
def delete_ticket(request, ticketId):
    if request.method == 'DELETE':
        cart = Cart.objects.get(user=TEMP_USER)
        if not Ticket.objects.filter(cart=cart).exists():
            return JsonResponse({"message": "Ticket not found", "ticket": False})
        
        ticket = Ticket.objects.get(cart=cart)
        cart_items = CartItem.objects.filter(cart=cart)
        cart_items.delete()

        ticket.delete()
        cart.progress = False
        cart.save()
        return JsonResponse({"message": "Ticket deleted"}, status=200)
