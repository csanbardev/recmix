
# Recmix

REST API sencilla que accede a una base de datos con recetas de cocina y devuelve un calendario de una semana. Define filtros personalizables a gusto del usuario.



## Variables de entorno

Para ejecutar el proyecto, será necesarios que configures estas variables de entorno en tu archivo .env

`PORT` - Puerto del servidor

`DB_HOST` - El host de la base de datos; por lo general, localhost

`DB_PORT` - El puerto en que se ubique la base de datos

`DB_USER` - El usuario  de la base de datos

`DB_PASSWORD` - La contraseña del usuario

`DB_DATABASE` - El nombre de la base de datos




## Usar en local

Clona el proyecto

```bash
    git clone https://link-to-project
```

Ve al directorio donde lo hayas guardado

```bash
    cd my-project
```

Instala las dependencias

```bash
    npm install
```

Necesitarás una base de datos SQL. Esta contiene únicamente una tabla: recipes. Debe seguir la siguiente estructura

```sql
    create table recipes (
        id int primary key,
        name varchar(30),
        kind varchar(30),
        url varchar(50)
    );
```
**Puedes modificar los tamaños de las columnas para que se ajusten a los datos que vayas a insertar**

Inicia el servidor

```bash
    npm run dev
```


## Manual de uso

Ejecuta el servidor local

```bash
  npm run dev
```

Haz una llamada con tu cliente favorito —recomiendo Postman— a la url *localhost:[puerto]/recipes*. Te devolverá un JSON de 14 elementos con las recetas.

![App Screenshot](https://i.ibb.co/PNmCKdK/postman-recmix.png)


## Roadmap

- Mejora de los filtros: más complejos y configurables

- Nuevas variables de enntorno

- Adición de tablas para la descripción de la receta

- Nuevas rutas con utilidades

- Creación de un cliente sencillo 

## Tech Stack

**Server:** Node, Express

