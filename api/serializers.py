from rest_framework import serializers
from api.models import Usuario
class ApiSerializer(serializers.ModelSerializer):
    model = Usuario
    fields = ('email',
              'nome')