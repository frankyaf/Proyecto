from django.contrib.auth import authenticate,login
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['POST'])
def login_api(request):
    username = request.data.get('username')
    password = request.data.get('password')

    user = authenticate(username = username, password = password)

    if user is not None:
        try:
            tipo = user.usuarios.typeUsers
        except:
            tipo = "sin_tipo"

        return Response({
            "username": user.username,
            "typeUsers": tipo
        })
    else :
        return Response({"error": "Error"},status=400)
            