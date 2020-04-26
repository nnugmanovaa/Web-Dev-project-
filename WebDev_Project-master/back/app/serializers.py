from django.contrib.auth.models import User
from rest_framework import serializers
from django_filters import rest_framework as filters
from app.models import Product,Category,Basket,Comment,Manager

class CategorySerializer(serializers.Serializer):
	id = serializers.IntegerField(read_only = True)
	name = serializers.CharField(required = True)
	link = serializers.CharField(required = True)

	def create(self, validated_data):
		category = Category.objects.create(
			name = validated_data.get('name'),
			link = validated_data.get('link')
			)
		return category

	def update(self, instance, validated_data):
		instance.name = validated_data.get('name', instance.name)
		instance.link = validated_data.get('link', instance.link)
		instance.save()
		return instance

class ManagerSerializer(serializers.Serializer):
	id = serializers.IntegerField(read_only = True)
	name = serializers.CharField(required = True)
	surname = serializers.CharField(required = True)

	def create(self, validated_data):
		manager = Manager.objects.create(
			name = validated_data.get('name'),
			surname = validated_data.get('surname')
			)
		return manager

	def update(self, instance, validated_data):
		instance.name = validated_data.get('name', instance.name)
		instance.surname = validated_data.get('surname', instance.surname)
		instance.save()
		return instance

class ProductSerializer(serializers.ModelSerializer):
	category_id = serializers.IntegerField(write_only = True)

	class Meta:
		model = Product
		fields = ('id', 'name', 'price', 'link', 'description', 'category_id', 'is_added')

class CommentSerializer(serializers.ModelSerializer):
	product_id = serializers.IntegerField(write_only=True)

	class Meta:
		model = Comment
		fields = ('id', 'comment', 'product_id')
		

class BasketSerializer(serializers.ModelSerializer):
	id = serializers.IntegerField(read_only=True)

	class Meta:
		model = Basket
		fields = ('id', 'products')

class UserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('id', 'username', 'email', 'password')

class RegisterUserSerializer(serializers.ModelSerializer):
	class Meta:
		model = User
		fields = ('username', 'password', 'email')

	def create(self, validated_data):
		user = super(RegisterUserSerializer, self).create(validated_data)
		user.set_password(validated_data['password'])
		user.save()
		return user


