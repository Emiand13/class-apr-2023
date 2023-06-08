![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | Fundamentos de Vue.js (Composition API)

## Introducción

En este laboratorio, seguirás explorando los conceptos básicos de cómo usar Vue.js y sentarás las bases para proyectos más grandes y complicados.

Aquí están las cosas que tendrás que lograr durante este laboratorio:

- Crear una estructura de plantilla básica dentro de un nuevo proyecto.
- Mostrar el resultado de una operación de JavaScript en el HTML de un componente.
- Mostrar un elemento solo si una propiedad en particular se establece en true.
- Mostrar una lista de elementos que se almacenan dentro de un componente.
- (Bonus) Cambiar el color de fondo de un elemento al presionar un botón.

¡Comencemos!

## Setup

- Haz un fork de este repo
- Clona este repositorio
- Abre el LAB y comienza:

  ```bash
  $ cd lab-vue-basics-es
  $ npm install
  $ npm run dev
  ```

## La presentación

Al terminar, ejecuta los siguientes comandos:

```shell
$ git add .
$ git commit -m "done"
$ git push origin master
```

Cree una solicitud de extracción para que sus tutores puedan comprobar su trabajo.


<!-- ## Getting Started -->


## Instrucciones

### Iteración 1 | Crear una estructura de plantilla básica dentro de un nuevo proyecto

Para este laboratorio, tendrás que crear un nuevo proyecto Vue en una carpeta nueva. Puedes elegir qué opciones deseas incluir.

Una de las principales ventajas de Vue (o cualquier otro marco de trabajo frontend) es lo fácil que es reutilizar componentes en toda tu aplicación. Esto es exactamente lo que practicaremos ahora mismo.

Debes crear un componente de `navbar` y un componente de `footer`, que incluirás en todas las páginas internas de tu aplicación. Pista: si los importas en tu componente App.vue, todas tus páginas internas también los mostrarán.

En este momento, no necesitas preocuparte por dar estilo a estos componentes; solo asegúrate de que funcionen y estás libre para avanzar a la siguiente tarea.

### Iteración 2 | Mostrar el resultado de una operación de JavaScript en el HTML de un componente

Ya has practicado cómo mostrar una cadena (`string`) dentro de la plantilla de un componente de Vue usando la sintaxis de mustache (`{{}}`). También has visto que las cadenas no son las únicas cosas que puedes insertar en tu HTML usando esta técnica.

Este desafío tiene dos partes:

- Primero, solo necesitas insertar una operación matemática dentro de tu HTML y ver qué sucede. Algo tan simple como `2 + 2` es suficiente aquí.
- Luego, comienza el verdadero desafío: debes "imprimir" una cadena (`string`) en tu plantilla, con un giro: esta cadena debe ser devuelta por una función y leer los datos almacenados en otras variables reactivas. Pista: [este artículo](https://vuejs.org/guide/essentials/computed.html#basic-example) puede arrojar algo de luz sobre cómo puedes hacer esto.

### Iteración 3 | Mostrar un elemento solo si una propiedad particular está establecida en `true`

Una de las principales razones por las que usamos algo como Vue es para simplificar operaciones comunes en JavaScript. Una de las principales ventajas de este marco es que nos permite mostrar elementos condicionalmente de una manera muy simple.

¡Practiquemos esto! Tu desafío aquí es crear una variable booleana dentro de un componente Vue, y vincularla a un elemento HTML que solo se mostrará en tu plantilla si la condición está establecida en `true`.

Hemos visto las propiedades `v-if` y `v-show` en clase hoy; pero si estás atrapado, [la documentación oficial](https://v2.vuejs.org/v2/guide/conditional.html) puede ser muy útil aquí. Además, ten en cuenta que el valor booleano debe definirse en tu `<script setup>`.

### Iteración 4 | Mostrar una lista de elementos que se almacenan dentro de un componente

¿Recuerdas lo difícil que parecían los `for loops` con JavaScript? Vue hace gran parte del trabajo pesado cuando los utilizamos, y nos permite mostrar una lista de elementos en la pantalla de una manera mucho más fácil.

En este ejercicio, practicarás cómo utilizar la directiva `v-for`. El desafío tiene los siguientes componentes:

- Debes crear una lista de publicaciones como un `ref()` dentro de uno de tus componentes Vue. Estas publicaciones deben incluir los siguientes datos: título, descripción y contenido; y necesitas al menos tres de ellas.
- Luego, debes hacer que las publicaciones "aparezcan" en tu `template` utilizando la directiva `v-for`.

Una vez más, si tienes dificultades aquí, [siempre puedes consultar la documentación oficial](https://vuejs.org/guide/essentials/list.html#v-for-with-an-object).

### Iteración 5 | Bono | Cambiar el color de fondo de un elemento al presionar un botón

¿Listo para un desafío más difícil? Vue nos permite hacer cosas bastante "mágicas" de manera simplificada. En este caso, aprenderás cómo cambiar una propiedad CSS dinámicamente usando la vinculación de datos.

No hemos profundizado mucho en este tema; pero aquí hay algunos consejos para orientarte en la dirección correcta:

- Deberás crear una clase o una propiedad CSS y [vincularla](https://v1.vuejs.org/guide/syntax.html) a una condición.
- Tendrás que crear un método que cambie la clase o la propiedad y activarlo a través de un clic en un botón. Esto no es algo que hayamos cubierto todavía, pero intenta usar recursos en línea para descubrir cómo hacerlo. Aquí hay algunos enlaces para ayudarte a orientarte:
  - [Vue.js - Vinculación de clases y estilos](https://vuejs.org/guide/essentials/class-and-style.html)
  - [Stack Overflow](https://stackoverflow.com/questions/59354679/add-background-color-when-click-a-button-vue-js)

¿Suena bien? ¡Empecemos!

<br>

Happy coding! :heart:
