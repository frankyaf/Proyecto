USE restaurant;

CREATE TABLE Usuarios(
	idUsuarios INT auto_increment PRIMARY KEY,
    typeUsers varchar(50)
);

CREATE TABLE Pedidos(
	idPedidos INT auto_increment PRIMARY KEY,
    idUsuario INT, foreign key (idUsuario)references Usuarios(idUsuarios)
);

CREATE TABLE Comida (
    idComida INT AUTO_INCREMENT PRIMARY KEY,
    idPedidos INT,
    info VARCHAR(100),
    cantidad INT,
    direccion VARCHAR(150),
    persona VARCHAR(100),
    FOREIGN KEY (idPedidos) REFERENCES Pedidos(idPedidos)
);