from django_filters import rest_framework as filters
from app.models import Product

class ProductManager(filters.FilterSet):

  name = filters.CharFilter(lookup_expr = 'contains')
  min_price = filters.NumberFilter(field_name = 'price', lookup_expr = 'gte')
  max_price = filters.NumberFilter(field_name = 'price', lookup_expr = 'lte')

  class Meta:
    model = Product
    fields = ('name', 'price')