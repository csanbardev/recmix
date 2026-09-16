
# Recmix

API REST para gestionar recetas, ingredientes y listas semanales. El proyecto genera un conjunto de recetas filtrado y permite consultar la compra asociada a una lista de recetas.

## Stack

- Node.js
- Express
- MySQL
- dotenv
- CORS
- nodemon

## Estructura

```bash
src/
├── app.js
├── config.js
├── db.js
├── index.js
├── controllers/
│   ├── ingredients.controller.js
│   ├── ingredientsList.controller.js
│   ├── recipes.controller.js
│   └── recipesList.controller.js
├── models/
│   ├── ingredients.model.js
│   ├── ingredientsRecipes.model.js
│   ├── recipes.model.js
│   └── recipesList.model.js
├── routes/
│   ├── ingredients.routes.js
│   ├── ingredientsList.routes.js
│   ├── recipes.routes.js
│   └── recipesList.routes.js
└── utils/
    ├── ingredients.utils.js
    └── mix.js
```

## Variables de entorno

Crear un archivo `.env` en la raíz con:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=tu_password
DB_DATABASE=recmix
```

Valores por defecto en `src/config.js` si no se configuran.

## Base de datos

El esquema está en `tables.sql` y usa MySQL. Las tablas principales son:

- `t_recetas`: recetas
- `t_cantidad`: unidades de medida
- `t_ingredientes`: ingredientes
- `t_ingredientes_recetas`: relación receta-ingrediente
- `t_recipes_list`: listas de recetas por fecha

## Instalación

```bash
npm install
```

## Ejecutar

```bash
npm run dev
```

La API queda disponible en `http://localhost:3000` por defecto.

## Endpoints

### Recetas

- `GET /recipes` → devuelve todas las recetas
- `POST /recipes` → crea una receta y sus ingredientes asociados

### Listas de recetas

- `GET /recipes-list` → devuelve la última lista de recetas
- `POST /recipes-list` → guarda una lista de IDs de recetas con fecha actual

### Ingredientes

- `GET /ingredients` → devuelve todos los ingredientes
- `GET /ingredients-list/:reclFec` → agrupa ingredientes para una fecha concreta
- `GET /ingredients-list-by-recipe/:recId` → devuelve los ingredientes de una receta

## Flujo principal

1. Se consultan las recetas desde MySQL.
2. Se filtran para evitar exceso de tipos de comida.
3. Se pueden guardar listas semanales de recetas.
4. Con esos IDs se obtienen ingredientes y se resumen por nombre/cantidad.

## Nota

Este proyecto está en una etapa inicial y todavía tiene varios puntos de mejora en la lógica de filtrado y en la consistencia del esquema SQL.

