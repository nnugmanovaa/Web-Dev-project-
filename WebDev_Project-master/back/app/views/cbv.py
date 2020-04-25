from datetime import date

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend

from rest_framework.permissions import IsAuthenticated

from app.models import Category, Product, Comment, Basket
from app.serializers import CategorySerializer, ProductSerializer,  CommentSerializer, BasketSerializer 

class ProductsListApiView(APIView):
	def get(self, request):
		products = Product.objects.all()
		serializer = ProductSerializer(products, many = True)
		return Response(serializer.data)

	def post(self, request):
		serializer = ProductSerializer(data = request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data, status = status.HTTP_201_CREATED)
		return Response({"error": serializer.errors}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

class ProductDetailApiView(APIView):
	def get_object(self, id):
		try:
			return Product.objects.get(id = id)
		except Product.DoesNotExist as e:
			return Response({'error': str(e)})

	def get(self, request, product_id):
		product = self.get_object(product_id)
		serializer = ProductSerializer(product)
		return Response(serializer.data)

	def put(self, request, product_id):
		product = self.get_object(product_id)
		serializer = ProductSerializer(instance = product, data = request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response({'error': serializer.errors})

	def delete(self, request, product_id):
		products = self.get_object(product_id)
		products.delete()
		return Response({'deleted': True})

class CommentsListApiView(APIView):
	def get(self, request):
		comments = Comment.objects.all()
		serializer = CommentSerializer(comments, many = True)
		return Response(serializer.data)

	def post(self, request):
		serializer = CommentSerializer(data = date.request)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data,status = status.HTTP_201_CREATED)
		return Response({"error": serializer.errors}, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

class CommentDetailApiView(APIView):
	def get_object(self, id):
		try:
			return Comment.objects.get(id = id)
		except Comment.DoesNotExist as e:
			return Response({'error': str(e)})

	def get(self, request, comment_id):
		comment = self.get_object(comment_id)
		serializer = CommentSerializer(comment)
		return Response(serializer.data)

	def put(self, request, comment_id):
		comment = self.get_object(comment_id)
		serializer = CommentSerializer(instance = comment, data = request.data)
		if serializer.is_valid():
			serializer.save()
			return Response(serializer.data)
		return Response({'error': serializer.errors})
