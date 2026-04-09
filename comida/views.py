from rest_framework import viewsets
from comida.models import Usuarios_db
from comida.serializers import UsuariosSerializer
from rest_framework.permissions import IsAuthenticated

class Usuario_dbViewSet(viewsets.ModelViewSet):
    queryset = Usuarios_db.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated]
