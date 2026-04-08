from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from usuarios.models import Usuarios

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        user = self.user

        try: 
            usuario_local = Usuarios.objects.get(idUsuarios=user)
            data['idUsuarios'] = usuario_local.idUsuarios.id
            data['typeUsers'] = usuario_local.typeUsers
        except Usuarios.DoesNotExist:
            data['idUsuarios'] = None
            data['typeUsers'] = "cliente"

        return data