from django.db import models

class Category(models.Model):
	name = models.CharField(max_length = 200)
	link = models.TextField()

	def __str__(self):
		return '{}: {}'.format(self.id, self.name)




class Product(models.Model):
	name = models.CharField(max_length = 200)
	price = models.FloatField()
	link = models.TextField()
	description = models.TextField()
	is_added = models.BooleanField(default=False)
	category = models.ForeignKey(Category, on_delete = models.CASCADE)


	def __str__(self):
		return '{}: {}'.format(self.id, self.name)



class Manager(models.Model):
	name = models.CharField(max_length = 200)
	surname = models.CharField(max_length = 200)

	def __str__(self):
		return '{}: {}'.format(self.id, self.name)

class Comment(models.Model):
	comment = models.CharField(max_length= 500)
	product = models.ForeignKey(Product, on_delete = models.CASCADE)

	def __str__(self):
		return '{}: {}'.format(self.id, self.comment)

class Basket(models.Model):
	products = models.ManyToManyField(Product)


