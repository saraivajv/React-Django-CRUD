from django.db import models
class DetailsModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    job = models.CharField(max_length=100)
    salary = models.IntegerField()
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=10)
    def __str__(self):
        return self.name or ''
