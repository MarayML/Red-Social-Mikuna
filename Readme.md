# Mikuna

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Planificación del proyecto](#2-resumen-del-proyecto)
* [2.1 Historias de usuario](#2.1-historias-de-usuario)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)

***

## 1. Preámbulo

El objetivo de este proyecto es construir una Red Social, Single-Page Application (SPA), responsiva en la que podamos escribir, leer, actualizar y eliminar datos. Para implementarla haremos uso de *HTML5*, *CCS3* o *SASS*, *Vanilla JavaScript(ES6+)* y *Firebase*. 

En proyectos anteriores solo hemos consumido (leído) datos, por ejemplo, a través de un archivo `json` o utilizando `fetch`. El objetivo de usar Firestore en este proyecto, es aprender a manejar y persistir datos a traves de una base de datos no relacional, en tiempo real e implementar operaciones CRUD (Creación, Lectura, Actualización y eliminación) de datos. 
 
Reforzar conocimiento sobre el uso de Template literals (Template strings). Diseñar la arquitectura de la aplicación, modularizando el código a través de *es modules* import, export. Familiarizarse con el patrón  modelo - vista - controlador (MVC) e implementar un sistema de rutas para cambiar de una vista a otra de manera dinámica (SPA).

Testear la lógica de la aplicación, con Jest cuidando que el coverage pase el 90% de statements (sentencias), functions (funciones), lines (líneas), y branches (ramas).

Utilizar `flexbox` para posicionar los elementos. No está permitido el uso de frameworks de CCS (bootstrap), ni de componentes flotantes. Replicar a nivel *pixel perfect* el diseño (layout) de la vista mobile y desktop, proporcionado, el contenido, paleta de colores y fuentes es elección personal. 

* Vista mobile

    ![mobile](https://user-images.githubusercontent.com/32286663/56174616-ec9f6100-5fb8-11e9-9edb-d5ef7c251d9c.png)

* Vista Desktop

    ![desktop](https://user-images.githubusercontent.com/32286663/56174626-fcb74080-5fb8-11e9-8854-26e8d9c4e25f.png)


## 2. Planificación del proyecto

* Este proyecto debe ser desarrollado en equipos de trabajo de 3 integrantes.

* La duración propuesta del proyecto es **3 sprints**, con una duración de una semana cada uno.

* A traves de las **historias de usuario** se definen los requerimientos y funcionalidades que desea el usuario final.

* La **planificación es vital**, para ello utilizamos *projects*, *issues* y *milestones* de GitHub para gestionar la planificación del proyecto. Estos recursos serán la fuente de organización del equipo.

* Escribir, de manera colaborativa, las **Definiciones de terminado** y **Criterios de Aceptación** por cada **Historia de usuario** que te daremos para este proyecto y que se deberán ver reflejadas en la planificación.

* **Priorizar** la implementación de las funcionalidades, en función al esfuerzo que demandan en relación al valor que le aportan al usuario, y ejecutar en equipo todas las historias de usuario dentro del tiempo estimado para cada sprint y que finalmente se vean reflejadas en publicaciones completamentamente funcionales al final de cada sprint.

* Adquirir la disciplina de la completitud, terminando una historia de usuario antes de pasar a la siguiente (es decir, que cumple con *Definición de Terminado* y *Criterios de Aceptación* contemplando todos los puntos que son objetivos de aprendizaje para este proyecto).

### 2.1. Historias de Usuario

* Como usuario nuevo debo poder crear una cuenta con email y password válidos para poder iniciar sesion e ingresar a la red social.

* Como usuario nuevo debo poder tener la opción de iniciar sesión con mi cuenta de Google o Facebook para ingresar a la red social sin necesidad de crear una cuenta de email válido.

* Como usuario loggeado debo poder crear, guardar, modificar en el mismo lugar (in place) y eliminar una publicación (post) privada o pública, que puede ser una frase o una imagen.

* Como usuario loggeado debo poder ver todos los posts públicos y privados que he creado hasta ese momento, desde el más reciente hasta el más antiguo, así como la opción de poder cambiar la configuración de privacidad de mis post.

* Yo como usuario loggeado, puedo dar like y llevar un conteo de likes en mi publicación así como poder escribir, guardar, editar o eliminar un comentario en mi publicación.

* Al final debo poder ingresar a la red social y poder visualizar los datos de mi perfil creado o editarlos.

* Ejemplo de cómo definir criterios de aceptación y definiciones de terminado para una H.U. 

    > Como usuario nuevo debo poder crear una cuenta con email y password para 
    > poder iniciar sesion. Por otro lado, necesito también tener la opción de 
    > iniciar sesión con mi cuenta de Google o Facebook.
    >
    > **Criterios de aceptación**
    > - Si el mail o password no es válido, al momento de logearme, debo poder 
    >   ver un mensaje de error.
    > - Debe ser visible si hay algún mensaje de error.
    > - Debo poder ver esta página de creación en Móviles y desktop (responsive). 
    > - No debe necesitar recargar la página para crear una cuenta (SPA).
    >
    > **Definición de terminado**
    > - La funcionalidad cumple satisface los criterios de aceptación.
    > - La funcionalidad tiene _test unitarios_.
    > - El diseño visual corresponde al prototipo de alta fidelidad.
    > - El código de esta funcionalidad recibió code review.
    > - La funcionalidad esta desplegada y pública para ser probada. 
    > - La funcionalidad fue probada manualmente.
    > - Se hicieron pruebas de usuabilidad y se implementó el feedback si se 
    >   consideró necesario.

## 3. Objetivos de aprendizaje

### HTML y CSS

* HTML semántico
* CSS flexbox
* Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM y Web APIs

* Manipulación dinámica del DOM
* History API

### Javascript

* Uso de callbacks
* Consumo de Promesas
* Uso ES modules import | export

### Firebase

* Firestore
* Firebase Auth
* Firebase security rules
* Uso de onSnapshot | onAuthStateChanged

### Testing

* Testeo de tus funciones
* Testeo asíncrono
* Mocking

### Colaboración en Github

* Branches
* Pull Requests
* Tags

### Organización en Github

* Projects
* Issues
* Labels
* Milestones

### Buenas prácticas de desarrollo

* Modularización
* Nomenclatura / Semántica
* Linting