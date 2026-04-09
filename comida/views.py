from rest_framework import viewsets
from comida.models import Usuarios_db, pedidos,comida
from comida.serializers import UsuariosSerializer, PedidosSerializer, ComidaSerializer
from rest_framework.permissions import IsAuthenticated

class Usuario_dbViewSet(viewsets.ModelViewSet):
    queryset = Usuarios_db.objects.all()
    serializer_class = UsuariosSerializer
    permission_classes = [IsAuthenticated]

class pedidosViewSet(viewsets.ModelViewSet):
    queryset = pedidos.objects.all()
    serializer_class = PedidosSerializer
    permission_classes = [IsAuthenticated]

class comidaViewSet(viewsets.ModelViewSet):
    queryset = comida.objects.all()
    serializer_class = ComidaSerializer
    permission_classes = [IsAuthenticated]
