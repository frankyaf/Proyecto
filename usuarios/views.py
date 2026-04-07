from django.contrib.auth import authenticate
#from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.views import TokenObtainPairView
from usuarios.serializers import CustomTokenObtainPairSerializer
#from usuarios.models import Usuarios

"""@api_view(['POST'])
def login_api(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username = username, password = password)

    if user is not None:
        try:
            tipo = Usuarios.objects.get(user=user).typeUsers
        except Usuarios.DoesNotExist:
            tipo = "cliente"

        refresh = RefreshToken.for_user(user)
        return Response({
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "username": user.username,
            "typeUsers": tipo
        })
    else :
        return Response({"error": "Error"},status=400)
"""

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer