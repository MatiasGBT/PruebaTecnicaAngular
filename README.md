# Prueba Técnica Angular - CG

Repositorio con el código para la prueba técnica de Angular.  
El proyecto fue realizado utilizando [Angular CLI](https://github.com/angular/angular-cli) v16.1.7.


## Demo

El proyecto está desplegado en Netlify. Se puede acceder a este mediante el siguiente link:
[https://pruebatecnicacg.netlify.app/](https://pruebatecnicacg.netlify.app/).  
También se puede desplegar localmente siguiendo la siguiente sección.


## Desplegar localmente

Para desplegar este proyecto, primero debes clonar este repositorio:  
`git clone https://github.com/MatiasGBT/PruebaTecnicaAngular.git`  

Una vez clonado, debes ejecutar los siguientes comandos en el directorio del proyecto:
- `npm i` o `npm install` - Para descargar todas las dependencias/módulos del proyecto.
- `ng serve -o` - Para que el proyecto se ejecute. La flag "-o" es para que la página se abra inmediatamente en tu navegador predeterminado una vez compila. Esta bandera es opcional, si no la colocas debes navegar al siguiente link en tu navegador de preferencia (una vez que compile el proyecto): `http://localhost:4200/`.
- El proyecto compilará cuando se vea lo siguiente en la terminal: `√ Compiled successfully.`

## Características del proyecto  
Se trata de un listado de productos provenientes de una API de ejemplo. Esta lista se puede filtrar por subcategorías, ordenar por mayor o menor precio, o buscar productos en base a un nombre.  
Además de agregar los productos a un carrito, el usuario también tiene la capacidad de registrarse.  
Una vez registrado, los datos del usuario (salvo la contraseña), son guardados en el almacenamiento local del navegador.  
El usuario tiene la capacidad de cerrar la sesión una vez registrado.  

El proyecto usa [Angular Material](https://material.angular.io/) versión 16.
## ¿Qué se puede agregar al proyecto?  

Si bien no se pedía en la consigna, lo común es que exista una página de carrito de compras en la que se pueda ver los productos agregados a dicho carrito, además de poder removerlos y finalizar la compra.  
A su vez, me gustaría haber programado en inglés, pero decidí hacer el código en español debido a que los datos de la API venían en dicho idioma (quedaba muy extraño "subcategory.id_subcategoria" 😬).
## Autor
[@MatiasGBT](https://github.com/MatiasGBT) - [portfolio](https://matiasgbt.netlify.app/)
