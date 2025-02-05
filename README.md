# Prueba Tecnica Frontend

Este proyecto utiliza Sass para el desarrollo de estilos.

## Requisitos

1. Instalar Node.js
2. Instalar Sass globalmente:
   ```bash
   npm install -g sass
   ```

## Instrucciones

1. En la consola, navega al directorio del proyecto.
2. Ejecuta el siguiente comando para compilar Sass:
   ```bash
   sass --watch styles/scss/bundle.scss:styles/css/bundle.min.css --style compressed
   ```

## Configuración de Git

1. Añadir el repositorio remoto:
   ```bash
   git remote add origin https://github.com/
   ```
2. Añadir los cambios:
   ```bash
   git add .
   ```
3. Realizar el primer commit:
   ```bash
   git commit -m "first commit"
   ```
4. Enviar los cambios al repositorio remoto:
   ```bash
   git push origin master
   ```

## Funcionamiento de la Tabla de Influencers

La tabla de influencers se encuentra en el archivo `index.html` y se llena dinámicamente con datos desde el archivo `index.js`. La tabla muestra información sobre los influencers, incluyendo su nombre de usuario, redes sociales, número de servicios y valor total. Además, permite ordenar los influencers por número de servicios y valor total.

### Población de la Tabla

La función `influencerTable` en `index.js` se encarga de llenar la tabla con los datos de los influencers. Esta función crea filas y celdas dinámicamente y las agrega al cuerpo de la tabla.

### Ordenamiento de la Tabla

La tabla permite ordenar los influencers por número de servicios y valor total. Los botones de ordenamiento están vinculados a funciones que ordenan los datos y vuelven a llenar la tabla con los datos ordenados.

## Funcionamiento del Modal

El modal se utiliza para mostrar un mensaje de confirmación cuando se guarda una campaña. Se encuentra en el archivo `index.html` y su funcionalidad está en el archivo `modal.js`.

### Apertura y Cierre del Modal

El modal se abre al hacer clic en el botón "Guardar" y se cierra al hacer clic en el botón de cierre, en el botón "Volver", en el botón "Ir a mis campañas", al hacer clic fuera del modal o al presionar la tecla ESC. Las funciones `openModal` y `closeModal` en `modal.js` manejan la apertura y cierre del modal.
