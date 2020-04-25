from django.urls import path
from app.views import fbv, cbv

from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
	path('login', obtain_jwt_token),
	path('categories', fbv.category_list),
	path('categories/<int:category_id>/products', fbv.products_by_category),
	path('categories/<int:category_id>/products/<int:product_id>/comments', fbv.comments_by_product),
	path('products', cbv.ProductsListApiView.as_view()),
	path('products/<int:product_id>', cbv.ProductDetailApiView.as_view()),
	path('comments', cbv.CommentsListApiView.as_view()),
	path('comments/<int:detail>', cbv.CommentDetailApiView.as_view())
]
