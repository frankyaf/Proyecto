from rest_framework import viewsets
from comida.models import Usuarios_db, pedidos, comida
from comida.serializers import UsuariosSerializer, PedidosSerializer, ComidaSerializer
from rest_framework.permissions import IsAuthenticated


from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response


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
    queryset2 = comida

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def editar_comida(request,id):
    comidas = comida.objects.get(id=id)

    comidas.info = request.data.get('info',comidas.info)
    comidas.cantidad = request.data.get('cantidad',comidas.cantidad)
    comidas.direccion = request.data.get('direccion', comidas.direccion)

    comidas.save()
    return Response({"Aviso": "Actualizado"})

