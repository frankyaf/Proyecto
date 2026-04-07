"""
from django.contrib import admin
from django.urls import path
from usuarios.views import login_api

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login/',login_api, name = "login"),
]
"""
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
#from usuarios.views import login_api


urlpatterns =[
    path('api/login/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    #path('api/login/',login_api, name = "login"),

]
