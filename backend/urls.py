from django.urls import path,include
from usuarios.views import MyTokenObtenPairView
from rest_framework.routers import DefaultRouter
from comida.views import Usuario_dbViewSet, pedidosViewSet, comidaViewSet

router = DefaultRouter()
router.register(r'usuarios_db',Usuario_dbViewSet)

router_pedidos = DefaultRouter()
router_pedidos.register(r'pedidos',pedidosViewSet)

router_comida = DefaultRouter()
router_comida.register(r'comida',comidaViewSet)

urlpatterns =[
    path('api/login/token/', MyTokenObtenPairView.as_view(), name='token_obtain_pair'),
    path('api/', include(router.urls)),
    path('api/',include(router_pedidos.urls)),
    path('api/',include(router_comida.urls))
]
