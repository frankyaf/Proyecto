from django.contrib.auth import authenticate, login
from rest_framework.decorators import api_view
from rest_framework.response import Response
from usuarios.models import Usuarios

from rest_framework_simplejwt.views import TokenObtainPairView
from usuarios.serializers import MyTokenObtainPairSerializer

"""@api_view(['POST'])
def login_api(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username = username, password = password)

    if user is not None:
        try:
            tipo = Usuarios.objects.get(user=user).typeUsers
            print(tipo)
        except Usuarios.DoesNotExist:
            tipo = "cliente"

        return Response({
            "username": user.username,
            "typeUsers": tipo
        })
    else :
        return Response({"error": "Error"},status=400)
"""

class MyTokenObtenPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

