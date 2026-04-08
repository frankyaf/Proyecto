from django.db import models
from django.contrib.auth.models import User

class Usuarios(models.Model):
    idUsuarios = models.OneToOneField(User,on_delete=models.CASCADE,primary_key=True,db_column='idUsuarios')
    typeUsers = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.idUsuarios.username}({self.typeUsers})"
    
    class Meta:
        db_table = 'usuarios'
        managed = False
