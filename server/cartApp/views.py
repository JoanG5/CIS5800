import json
from rest_framework.decorators import api_view
from django.shortcuts import render 
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from .models import Item, Cart, CartItem

# Create your views here.
def home(request):
    return HttpResponse('Hello, Django!')

@api_view(['GET'])
def get_cart(request):
    if request.method == 'GET':
        user = request.user
        cart = Cart.objects.get(user=user)
        items = CartItem.objects.filter(cart=cart)
        items_list = [item.serialize() for item in items]
        print(items_list)
        return JsonResponse({'items': items_list})

@api_view(['POST'])
def add_item(request):
    if request.method == 'POST':
        user = request.user
        data = json.loads(request.body)
        item_id = data.get('item_id')
        quantity = data.get('quantity')
        item = Item.objects.get(id=item_id)
        cart = Cart.objects.get(user=user)
        cart_item = CartItem.objects.create(item=item, cart=cart, quantity=quantity)
        cart_item.save()
        return JsonResponse({id: cart_item.id, "message": "Item added to cart"}, status=200)

@api_view(['DELETE'])
def remove_item(request):
    return HttpResponse('Remove Item')

