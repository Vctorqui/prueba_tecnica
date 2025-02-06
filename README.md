# Prueba Tecnica Frontend

## Deploy
Mediante el siguiente link podrás ver la web deployada.
- [Web (Prueba técnica)](https://influencers-manager.netlify.app/)

## Objetivo

Replicar una interfaz dada en imagen utilizando HTML, CSS (con Bootstrap) y JavaScript/jQuery. Además, debe agregar interactividad mediante
el botón que abra un modal al hacer clic en "Guardar".
Se adjuntan dos imágenes:
1. Maquetación principal: Diseño base de la interfaz.
2. Modal: Diseño del modal que debe mostrarse al presionar el botón "Guardar".

## Maquetar
![vista inicial](https://github.com/user-attachments/assets/0cbd75e9-0bc6-4ca9-baa0-6bbbe6e571ac)
![vista modal](https://github.com/user-attachments/assets/0ed3aae3-5894-4ab1-84ec-2d209f3ea7f8)

## Demo

### Desktop Version
![desktop-version](https://github.com/user-attachments/assets/6cb2df94-5940-4fb2-ad8f-2c802f9e54bf)

### Mobile Version
![mobile-version](https://github.com/user-attachments/assets/45b6378f-4ca4-4576-aba8-ebdeb09a4e28)


## Instalación
Clona el proyecto
```bash
git clone https://github.com/vctorqui/prueba_tecnica_front.git
```

Dirigete al directorio del proyecto
```bash
cd prueba_tecnica_front
```


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

## Features
### Funcionamiento de la Tabla de Influencers

La tabla de influencers se encuentra en el archivo `index.html` y se llena dinámicamente con datos desde el archivo `index.js`. La tabla muestra información sobre los influencers, incluyendo su nombre de usuario, redes sociales, número de servicios y valor total. Además, permite ordenar los influencers por número de servicios y valor total.

### Población de la Tabla

La función `influencerTable` en `index.js` se encarga de llenar la tabla con los datos de los influencers. Esta función crea filas y celdas dinámicamente y las agrega al cuerpo de la tabla.

### Ordenamiento de la Tabla

La tabla permite ordenar los influencers por número de servicios y valor total. Los botones de ordenamiento están vinculados a funciones que ordenan los datos y vuelven a llenar la tabla con los datos ordenados.

### Funcionamiento del Modal

El modal se utiliza para mostrar un mensaje de confirmación cuando se guarda una campaña. Se encuentra en el archivo `index.html` y su funcionalidad está en el archivo `modal.js`.

### Apertura y Cierre del Modal

El modal se abre al hacer clic en el botón "Guardar" y se cierra al hacer clic en el botón de cierre, en el botón "Volver", en el botón "Ir a mis campañas", al hacer clic fuera del modal o al presionar la tecla ESC. Las funciones `openModal` y `closeModal` en `modal.js` manejan la apertura y cierre del modal.
