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
