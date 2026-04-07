from django.db import models
from django.contrib.auth.models import User

class Usuarios(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    typeUsuario = models.CharField(max_length=50)

    
    idUsuario = models.IntegerField(primary_key=True, db_column='idUsuarios')

    def __str__(self):
        return self.user.username 
    
    class Meta:
        db_table = 'usuarios'
        managed = False
