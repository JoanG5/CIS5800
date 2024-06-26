from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField(default='')
    quantity = models.IntegerField(default=0)
    photo = models.ImageField(upload_to='items/', default='items/default.jpg')
    
    def __str__(self):
        return self.name
    
    def serialize(self):
        return {
            'id': self.id,
            'name': self.name,
            'price': self.price,
            'description': self.description,
            'stock': self.quantity,
            'photo': self.photo.url, 
        }

class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    items = models.ManyToManyField(Item, through='CartItem')
    total_price = models.IntegerField(default=0)
    stock = models.IntegerField(default=0)
    progress = models.BooleanField(default=False)
    
    def __str__(self):
        return self.user.username
    
class CartItem(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE, related_name='Item')
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='Cart')
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.cart.user}: {self.quantity}x {self.item.name}"
    
    def serialize(self):
        return {
            'id': self.id,
            'item': self.item.serialize(),
            'quantity': self.quantity
        }

class Ticket(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE, related_name='Cart_Ticket')
    
    def __str__(self):
        return f"{self.id}"
    
    def serialize(self):
        return {
            'id': self.id,
            'cart': self.cart_id
        }