from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Usuarios

class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        # Obtener el usuario de la tabla extendida
        try:
            perfil = Usuarios.objects.get(user=self.user)
            data['typeUsers'] = perfil.typeUsuario
        except Usuarios.DoesNotExist:
            data['typeUsers'] = None

        return data