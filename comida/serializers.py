from rest_framework import serializers
from comida.models import Usuarios_db

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios_db
        fields = '__all__'