from django.urls import path,include
from usuarios.views import MyTokenObtenPairView
from rest_framework.routers import DefaultRouter
from comida.views import Usuario_dbViewSet

router = DefaultRouter()
router.register(r'usuarios_db',Usuario_dbViewSet)

urlpatterns =[
    path('api/login/token/', MyTokenObtenPairView.as_view(), name='token_obtain_pair'),
    path('api/', include(router.urls)),
]
