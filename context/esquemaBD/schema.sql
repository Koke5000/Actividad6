CREATE TABLE usuarios (
	id serial,
	nombre varchar(255),
	password varchar(255)
)

CREATE TABLE videojuegos (
	id serial,
	nombre varchar(255)
)

CREATE TABLE compras (
    usuario integer,
    videojuego integer, 
	PRIMARY KEY(usuario, videojuego),
    FOREIGN KEY (usuario) REFERENCES usuarios(id),
    FOREIGN KEY (videojuego) REFERENCES videojuegos(id)
);

CREATE TABLE carrito (
    usuario integer,
    videojuego integer, 
	PRIMARY KEY(usuario, videojuego),
    FOREIGN KEY (usuario) REFERENCES usuarios(id),
    FOREIGN KEY (videojuego) REFERENCES videojuegos(id)
);