# 📚 Proyecto Integrador JavaScript: Sistema de Gestión de Biblioteca

Este primer proyecto integrador del módulo de JavaScript. Permite gestionar un sistema de biblioteca en el que tenemos una estructura de datos tanto de los libros como de los usuarios. Esta información se define en una estructura de arrays donde cada usuario u libro va tener su ID único con el fin de prevenir inconvenientes. Mediante el ID podemos buscar libros, solicitar el préstamo del mismo o bien generar la devolución del mismo. 

Los usuarios podrán interactuar con todas las funciones del nuestro programa desde la consola a través de un menú de opciones, donde podrán elegir si desean buscar, ordenar o borrar un libro.

Este sistema de gestión también permite al usuario conocer el estado general de la biblioteca informando la cantidad de  total de libros, cuántos están a préstamo como así también les puede informar la cantidad disponible por género.

---
## 🛠️ Instalación

1. Cloná el repositorio:
```bash
   git clone https://github.com/AymaraC/TRABAJO-INTEGRADOR_ADA.git 
```

2. Ingresa a la carpeta del proyecto:
Usá el comando cd para moverte a la carpeta donde se encuentra el proyecto, en este caso es cd TrabajoFinal_ADA

3. Instalá las dependencias:
Este proyecto utiliza prompt-sync para recibir datos del usuario en la consola, por lo que es necesario instalar la dependencia:
npm install

4. Ejecutá el programa:
Usá el siguiente comando node Aymara_Cabanal.js

5. Interactuá con el programa:
Seguí las instrucciones en la consola para usar el menú de opciones del sistema de gestión de biblioteca.

---
## 🚀 Tecnologías utilizadas

- **JavaScript**: lenguaje principal del proyecto.
- **Git**: para control de versiones y gestión del repositorio.
- **prompt-sync**: librería para capturar la entrada de datos del usuario desde la consola.
- **Node.js**: entorno de ejecución para JavaScript en el servidor/terminal.
---

## 📝 Ejemplo de funcionalidad: Ordenar libros (algoritmo de burbuja)

El sistema permite ordenar los libros por año de publicación o título usando el algoritmo de burbuja. Esto permite al usuario ver los libros organizados según el criterio elegido.

La función `ordenarLibros` recibe un parámetro `criterio` que puede ser `"anio"` o `"titulo"`, y ordena el array de libros en orden ascendente según corresponda.


```javascript
function ordenarLibros(criterio) {
    criterio = criterio.toLowerCase();

    if (criterio === "ano") {
        criterio = "anio";  // Permite aceptar "ano" como equivalente de "anio"
    }

    for (let i = 0; i < libros.length - 1; i++) {
        for (let j = 0; j < libros.length - 1 - i; j++) {

            if (criterio === "anio") {
                if (libros[j].anio > libros[j + 1].anio) {
                    let provisoria = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = provisoria;
                }

            } else if (criterio === "titulo") {
                if (
                    libros[j].titulo.toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") >
                    libros[j + 1].titulo.toLowerCase()
                        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                ) {
                    let provisoria = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = provisoria;
                }

            } else {
                console.log("Criterio no válido. Usa 'anio' o 'titulo'.");
                return;
            }
        }
    }
    console.log(`Libros ordenados por ${criterio}:`);
    
    console.log(libros);
}
```

![Captura del programa](./images/ordenar-libros.png)



## ✉️ Autor

**Aymara Cabanal**  
[GitHub: @AymaraC](https://github.com/AymaraC)  
Email: aymicabanal@hotmail.com

---