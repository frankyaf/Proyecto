from rest_framework import serializers
from comida.models import Usuarios_db, pedidos, comida

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuarios_db
        fields = '__all__'

class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = pedidos
        fields = '__all__'

class ComidaSerializer(serializers.ModelSerializer):
    class Meta:
        model = comida
        fields = '__all__'