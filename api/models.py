from django.db import models

class Usuario(models.Model):
    email = models.CharField(max_length=100, primary_key=True)
    nome = models.CharField(max_length=100)
