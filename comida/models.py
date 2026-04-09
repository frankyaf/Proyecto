from django.db import models


class Usuarios_db(models.Model):
    idUsuarios_db = models.IntegerField(
        primary_key='idUsuarios',
        db_column='idUsuarios'
    )
    typeUsers_db = models.CharField(
        max_length=30,
        db_column='typeUsers'
    )

    def __str__(self):
        return str(self.idUsuarios_db)
   
    class Meta:
        db_table = 'usuarios'
        managed = False

class pedidos(models.Model):
    idPedidos = models.IntegerField(
        primary_key='idPedidos',
        db_column= 'idPedidos'
    )

    idUsuario = models.ForeignKey(
        Usuarios_db,
        on_delete= models.CASCADE,
        db_column='idUsuario'
    )

    def __str__(self):
        return str(self.idPedidos)
    
    class Meta:
        db_table = 'pedidos'
        managed = False

class comida(models.Model):
    idComida = models.IntegerField(
        primary_key='idComida',
        db_column= 'idComida'
    )

    idPedidos = models.ForeignKey(
        pedidos,
        on_delete= models.CASCADE,
        db_column='idPedidos'
    )

    info = models.CharField(
        max_length=50,
        db_column='info'
    )

    cantidad = models.IntegerField()
    
    direccion = models.CharField(
        max_length=100,
        db_column='direccion' 
    )

    persona = models.CharField(
        max_length=50,
        db_column='persona'
    )

    def __str__(self):
        return str(self.idComida)
    
    class Meta:
        db_table = 'comida'
        managed = False
