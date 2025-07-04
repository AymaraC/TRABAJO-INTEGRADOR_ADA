//SISTEMA DE GESTIÓN DE BIBLIOTECA

// Punto 1: Estructura de Datos //
/*a) Crear un array de objetos llamado libros que contenga al menos 10 libros.*/

//CÓDIGO DEL PUNTO:

let libros = [
    { id: 115, titulo: "Harry Potter y la Piedra Filosofal", autor: "J.K.Rowling", anio: 1997, genero: "Fantasia", disponible: true },
    { id: 216, titulo: "Muchas Vidas, Muchos Maestros", autor: "Brian Weiss", anio: 1988, genero: "Biografía", disponible: true },
    { id: 14, titulo: "El Principito", autor: "Antoine De Saint-Exupery", anio: 1943, genero: "Infantil, Filosofico", disponible: true },
    { id: 250, titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", anio: 1967, genero: "Novela", disponible: false },
    { id: 180, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", anio: 1813, genero: "Novela", disponible: false },
    { id: 98, titulo: "Harry Potter y el prisionero de Azkaban", autor: "J.K.Rowling", anio: 1999, genero: "Fantasia", disponible: true },
    { id: 117, titulo: "Dracula", autor: "Bram Stoker", anio: 1897, genero: "Terror", disponible: false },
    { id: 208, titulo: "Crepusculo", autor: "Stephenie Meyer", anio: 2005, genero: "Romance", disponible: false },
    { id: 1347, titulo: "El Alquimista", autor: "Paulo Coelho", anio: 1998, genero: "Aventura", disponible: true },
    { id: 63, titulo: "El codigo Da Vinci", autor: "Dan Brown", anio: 2003, genero: "Suspenso", disponible: false },
];

/*b) Crear un array de objetos llamado usuarios con al menos 5 usuarios.*/

//CÓDIGO DEL PUNTO:

let usuarios = [
    { id: 210, nombre: "Milagros Suarez", email: "milisuarez12@gmail.com", librosPrestados: [63] },
    { id: 211, nombre: "Martin Perez", email: "martin_p_carp@gmail.com", librosPrestados: [14] },
    { id: 212, nombre: "Farid Caballero", email: "caballero.faru@hotmail.com", librosPrestados: [180, 117] },
    { id: 213, nombre: "Candela Russo", email: "candelarussoo@gmail.com", librosPrestados: [98, 115, 216] },
    { id: 214, nombre: "Fiorella Paula Juncal", email: "fiore.pau.juncal@gmail.com", librosPrestados: [216] },
];

/*En este primer punto lo que hice fue definir diez libros y cinco usuarios que esten dentro de un array de objetos 
en donde se encuentra la información solicitada.*/

//Punto 2: Funciones de Gestión de Libros

/*a) Implementar una función agregarLibro(id, titulo, autor, anio, genero) que agregue un nuevo libro al array libros.*/

     function agregarLibro(titulo, autor, anio, genero) {
    
                let maxId = 0;
        for (let i = 0; i < libros.length; i++) {
            if (libros[i].id > maxId) {
                maxId = libros[i].id;
        }
    }
        let nuevoId = maxId + 1;

        let nuevoLibro = {
            id: nuevoId,
            titulo: titulo,
            autor: autor,
            anio: anio,
            genero: genero,
    };
        libros.push(nuevoLibro);

    console.log("✅ Libro agregado exitosamente. Los datos ingresados son:");
    console.log(`ID asignado: ${nuevoLibro.id}`);
    console.log(`Título: ${nuevoLibro.titulo}`);
    console.log(`Autor: ${nuevoLibro.autor}`);
    console.log(`Año: ${nuevoLibro.anio}`);
    console.log(`Género: ${nuevoLibro.genero}`);
}


/*b) Crear una función buscarLibro(criterio,valor) que permita buscar libros por título, autor o género utilizando el 
algoritmo de búsqueda lineal*/

        function buscarLibro(criterio, valor) {
         
            criterio = criterio.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
            valor = valor.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();

            let resultados;

            switch (criterio) {
                case "titulo":
                    resultados = libros.filter(libro => 
                        libro.titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().includes(valor));
                break;

                case "autor":
                    resultados = libros.filter(libro => 
                        libro.autor.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().includes(valor));
                break;

                case "genero":
                    resultados = libros.filter(libro => 
                        libro.genero.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim().includes(valor));
                break;

                default:
                    console.log("Criterio no válido. Por favor utiliza titulo, autor o género");
                return;
    }
            if (resultados.length > 0) {
                console.log("Libros encontrados:");
                console.log(resultados);
    }       else {
                console.log("No se encontraron libros que coincidan con la búsqueda.");
    }
}

/*c) Desarrollar una función ordenarLibros(criterio) que ordene los libros por título o año utilizando el algoritmo 
de ordenamiento burbuja (bubble sort) y luego muestre los libros ordenados en la consola.*/

         function ordenarLibros(criterio) {
            criterio = criterio.toLowerCase()
    
          if (criterio === "ano"){          // Permite aceptar "ano" como equivalente de "anio"
                criterio = "anio";
        }
            for (let i = 0; i < libros.length - 1; i++) {
    
            for (let j = 0; j < libros.length - 1 - i; j++) {

            if (criterio === "anio") {
        
            if (libros[j].anio > libros[j + 1].anio) {
                    let provisoria = libros[j];
                    libros[j] = libros[j + 1];
                    libros[j + 1] = provisoria;
            }

        }   else if (criterio === "titulo") {
        
            if (
                libros[j].titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "") > libros[j + 1].titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
                        let provisoria = libros[j];
                        libros[j] = libros[j + 1];
                        libros[j + 1] = provisoria;
         }

        }   else {
                console.log("Criterio no válido. Usa 'anio' o 'titulo'.");
            return;    
      }
    }
  }
        console.log(`Libros ordenados por ${criterio}:`);
        console.log(libros);
}

/*d) Desarrollar una función borrarLibro(id) que elimine el libro que se le pase por parámetro.*/

        function borrarLibro (id){
        
            for (let i = 0; i < libros.length; i++){
                if (libros[i].id === id){
                libros.splice (i, 1)
                     console.log ("El libro " + id + " fue eliminado.")
                return;
            }
        }
            console.log ("Ese libro no puede ser eliminado porque no se encuentra en la biblioteca.")
    }

/*En el segundo punto lo que hice fue crear cuatro funciones para realizar cuatro indicaciones distintas. En el primer ítem mediante el método 
push agregamos un nuevo libro respetando las mismas propiedades, en el segundo me pareció mejor opción utilizar un swtich para que el usuario 
busque el libro ya sea por genero, autor o título. En el tercer ítem utilice un for anidado porque el primero define cuantas vueltas da y el segundo
compara uno por uno y va intercambiando hasta llegar al orden indicado. Debajo de los ciclos for utilice los if para que recorra y ordene declarando 
también una variable temporal para guardar el valor del libro actual y poder "intecambiar" con el libro que le sigue sin perder ninguno de los dos valores.
Por último, en la función de borrar libro utilice un ciclo for para que recorra el array y en el if le indique que tenía ser estrictamente
igual al id y con el splice indicandole que solo me elimine un libro.*/

//Punto 3: Gestión de usuarios

/*a) Implementar una función registrarUsuario(nombre, email) que agregue un nuevo usuario al array usuarios.*/

       function registrarUsuario (nombre, email){
                
            nombre = nombre.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()
            email = email.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim()

        let usuarioYaExistente = usuarios.find (usuario => usuario.email === email);
            if (usuarioYaExistente){
                console.log ("Error: ese mail ya se encuentra registrado en nuestra biblioteca.")
                return;
            }
        let maxId = 0;
            for (let i = 0; i < usuarios.length; i++){
              if (usuarios[i].id > maxId){
                maxId = usuarios [i].id
              }
            }  
            let nuevoId = maxId + 1

        let nuevoUsuario = {
            id: nuevoId,
            nombre: nombre,
            email: email,
            librosPrestados:[],

        }
        usuarios.push(nuevoUsuario);
    
        console.log ("Registro éxitoso. ¡Bienvendida/o a nuestra biblioteca! 📚");
        
        console.log (`Los datos que ingresaste fueron: 
        Nombre: ${nuevoUsuario.nombre}, 
        email ${nuevoUsuario.email}, 
        tu ID asignado es: ${nuevoUsuario.id}`)
    }

/*b) Implementar una función mostrarTodosLosUsuarios() que me devuelva el array completo de usuarios*/

    function mostrarTodosLosUsuarios(){
            if (usuarios.length > 0){
            ("En la presente lista se encuentran todos los usuarios registrados al momento: ")
            usuarios.forEach (usuarios => {
                console.log (`Su identificación es: ${usuarios.id}`)
                console.log (`Su nombre: ${usuarios.nombre}`)
                console.log (`El mail registrado: ${usuarios.email}`)
                console.log (`El ID del libro o libros que tiene es: ${usuarios.librosPrestados}`)
                console.log ("---------------------------")
            });
                
            }else{
         console.log ("No hay usuarios registrados.")
        }
         
    }

   
/*c) Crear una función buscarUsuario(email) que devuelva la información de un usuario dado su email.*/

      function buscarUsuario (email){
        email = email.toLowerCase().trim();
        for (i=0; i < usuarios.length; i++){
            if (usuarios[i].email === email){
                console.log (`Los datos que tenemos registrados con el mail ${usuarios[i].email} son:
                            Nombre: ${usuarios[i].nombre}
                            ID de usuario: ${usuarios[i].id}
                            El ID de su libro es: ${usuarios[i].librosPrestados}`)
            return;
            } else {
                
            }
        }
        console.log ("El email no se encuentra registrado.")
        return;
    }


/*d) Implementar una función borrarUsuario(nombre, email) que elimine el usuario seleccionado.*/

    function borrarUsuario (nombre,email){
                 nombre = nombre.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
                 email = email.toLowerCase().trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

        for (let i = 0; i < usuarios.length; i++){
            if (usuarios[i].nombre.toLowerCase().trim().replace(/[\u0300-\u036f]/g, "") === nombre && usuarios[i].email.toLowerCase().trim().replace(/[\u0300-\u036f]/g, "") === email){
                
               let usuarioEliminado = usuarios.splice (i,1)
               console.log (`El usuario ${usuarioEliminado[0].nombre} fue eliminado de la lista`)
               
            return;

            }else{
                
            }
             
        }
            console.log ("No se puede eliminar porque el usuario no está registrado en nuestra biblioteca.")
    }


 /*Punto 4: a) Desarrollar una función prestarLibro(idLibro, idUsuario) que marque un libro como no disponible y 
 lo agregue a la lista de libros prestados del usuario.*/

       function prestarLibro (idLibro, idUsuario){
            let libro = libros.find (libro => libro.id === idLibro)
                if (!libro){
                 console.log ("No contamos con ese libro en nuestra biblioteca.")
                return;
            } // Busca el libro por ID
                if (!libro.disponible){
                console.log("En este momento ese libro no se encuentra disponible.")
                return; //Acá le estamos diciendo que si el valor es false informe que el libro no se encuentra disponible.
            }

            let usuario = usuarios.find (usuario => usuario.id === idUsuario)
                if (!usuario){
                    ("❌ El usuario no se encuentra registrado. Por favor, cree una cuenta.")
                    return;
                }
            libro.disponible = false;
            usuario.librosPrestados.push (idLibro);

            console.log (`¡Prestamo realizado con éxito! El libro ${libro.titulo} fue prestado al usuario ${usuario.nombre}. Disfrute de su lectura 📖`)
    }


/*b) Implementar una función devolverLibro(idLibro, idUsuario) que marque un libro como disponible y lo elimine de la 
lista de libros prestados del usuario.*/

     function devolverLibro (idLibro, idUsuario){
        let encontrarUsuario = usuarios.find (usuarios => usuarios.id === idUsuario)
           if (!encontrarUsuario){
                  console.log ("❌Error. Usuario inexistente. Por favor, cree una cuenta")
            return;
        }
        let verificarId = encontrarUsuario.librosPrestados.includes (idLibro)
        if (verificarId){
           
            let encontrarLibro = encontrarUsuario.librosPrestados.indexOf(idLibro)
           encontrarUsuario.librosPrestados.splice(encontrarLibro, 1);
           let libro = libros.find(libro => libro.id === idLibro);

        if (libro) {
        libro.disponible = true;
        }
            console.log (`✅ El libro con ID ${idLibro} fue devuelto correctamente por el usuario ${encontrarUsuario.nombre}`)
        
        }else{

            console.log("❌El usuario no tiene este libro como prestado.")
        }
    }

/*Punto 5: Sistema de Préstamos
a) Crear una función generarReporteLibros() que utilice métodos avanzados de arrays (.map(), .filter(), .reduce()) 
para generar un reporte con la siguiente información:
✔ Cantidad total de libros.
✔ Cantidad de libros prestados.
✔ Cantidad de libros por género.
✔ Libro más antiguo y más nuevo*/

    function generarReporteLibros(coleccionDeLibros){
        
        console.log ("La cantidad de libros en nuestra biblioteca es de: " + coleccionDeLibros.length)

        console.log ("Los libros que actualmente se encuentran en condición de préstamo son: " + 
            coleccionDeLibros.filter((coleccionDeLibros) => (coleccionDeLibros.disponible === false)).length)

        let cantidadPorGenero = coleccionDeLibros.reduce((acc, libro) => {
             acc[libro.genero] = (acc[libro.genero] || 0) + 1;
            return acc;                                                        //El acc empieza como un objeto vacío{} 
        }, {});
            console.log("Cantidad de libros por género:");

            Object.keys(cantidadPorGenero).forEach(genero => {             //Objects.keys devuelve un array con los generos que hay como claves

            console.log(`- ${genero}: ${cantidadPorGenero[genero]} libro(s)`);
        });
        let libroMasAntiguo = coleccionDeLibros.reduce((antiguo, libro) => {
            return (libro.anio < antiguo.anio) ? libro : antiguo;
        }, coleccionDeLibros[0]);                                       //Empieza desde la posición 0 para comparar desde el primer libro

        let libroMasNuevo = coleccionDeLibros.reduce((nuevo, libro) => {
            return (libro.anio > nuevo.anio) ? libro : nuevo;
        }, coleccionDeLibros[0]);

        console.log(`📕 El libro más antiguo que tenemos en nuestra biblioteca en ese momento es: "${libroMasAntiguo.titulo}" (Año: ${libroMasAntiguo.anio})`);
        console.log(`📗 El libro más nuevo que tenemos en nuestra biblioteca en ese momento es: "${libroMasNuevo.titulo}" (Año: ${libroMasNuevo.anio})`);

    }

/*Punto 6: Identificación Avanzada de libros
a) Implementar una función librosConPalabrasEnTitulo() que identifique y muestre todos los libros cuyo título contiene 
más de una palabra (no títulos que contengan números ni otros caracteres). La función debe devolver un array con los 
títulos de esos libros y mostrarlo en la consola.*/

function librosConPalabrasEnTitulo(libros) {

  console.log (libros.filter
  (libro => libro.titulo.split(" ").length > 1 && /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(libro.titulo)).map(libro => libro.titulo));
}



 /*En este punto utilice el filter que recorre cada elemento del array, en este caso de libros. Dento del filtro use el 
 split (" ") para cortar el título cada vez que aparece un espacio y luego el length que nos dice cuántas palabras hay dentro de ese título.
 Utilice la expresión ^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/ ya que busca cadenas que solo contengan letras (mayuscula o minuscula, con o sin tildes o ñ), 
 y también espacios. 
 Por último usé .test que comprueba si el título cumple con la expresión y devuelve un true si es válido o false en el caso
 de que tenga caracteres no permitidos*/

/*Punto 7: Cálculos Estadísticos

a) Desarrollar una función calcularEstadisticas() que utilice el objeto Math para calcular y mostrar:
✔ Promedio de años de publicación de los libros.
✔ Año de publicación más frecuente.
✔ Diferencia en años entre el libro más antiguo y el más nuevo*/

    function calcularEstadisticas(libros) {
        if (libros.length === 0) {
            console.log("No hay libros para calcular el promedio.");
        return;
    }

    let sumaAnios = libros.reduce((acum, libro) => acum + libro.anio, 0);
    let promedio = Math.round(sumaAnios / libros.length);

    console.log(`📚 El año promedio de publicación es: ${promedio}`);

    let contadorAnios = {}

    libros.forEach(libro => {
        let anio = libro.anio;
        contadorAnios [anio] = (contadorAnios [anio] || 0) + 1;
    });

    let maximaFrecuencia = 0;
    let anioMasFrecuente = null;

    for (let anio in contadorAnios){
        if (contadorAnios [anio] > maximaFrecuencia){
            maximaFrecuencia = contadorAnios [anio]
            anioMasFrecuente = anio;
        }
    }
    console.log (`El año de publicación más frecuente es ${anioMasFrecuente} con ${maximaFrecuencia} libro(s).`)

    let anios = libros.map (libro => libro.anio);
    let anioMin = Math.min (... anios)
    let anioMax = Math.max (... anios)
    let diferencia = anioMax - anioMin
    
    console.log (`La diferencia entre el libro más antiguo ${anioMin} y el más nuevo ${anioMax} es de ${diferencia} años.`)

}

/* En el primer ítem que consistía en hacer el promedio de años, utilice el reduce para sumar todos los años de la publicación
en donde está el acumulador que va a ir guardando la suma de todos los años a medida que va recorriendo. Dividí la suma por la cantidad de libros para calcular el promedio y 
utilice el match.round para redondear el resultado.

En el segundo ítem para calcular el año más frecuente, cree un objeto vacío para llevar la cuenta de cuantas veces se repite el año,
utilice el método forEach para recorrer cada año de cada libro y poder actualizar el contador. Después declare una variable para guardar el año con mayor frecuencia 
y la cantidad de veces que aparece el mismo. Por último con un bucle for in recorrí el objeto contadorAnios y sí, se encuentra un año con
frecuencia mayor al anterior, se actualiza maximaFrecuencia y anioMasFrecuente.

Finalmente, había que calcular la diferencia entre el libro más antiguo y el más nuevo, entonces cree un array anios mediante el .map para
tomar todos los años de publicación de los libros. Utilice Math.min para encontrar el año el mínimo y Math.max para el máximo, se calcula
la diferencia entre ambos y con el console.log mostramos los años y la diferencia entre el más antiguo y el más nuevo.*/

/*Punto 8: Manejo de cadenas

a) Crear una función normalizarDatos() que utilice métodos de strings para:
✔ Convertir todos los títulos a mayúsculas.
✔ Eliminar espacios en blanco al inicio y final de los nombres de
autores.
✔ Formatear los emails de los usuarios a minúsculas*/

function normalizarDatos (){
        let librosNormalizados = libros.map((libro) => ({
           titulo : libro.titulo.toUpperCase().trim(),
           autor : libro.autor.trim()
         }));

        let usuariosNormalizados = usuarios.map(usuario => (usuario.email.toLowerCase().trim()));

        console.log ("Los libros normalizados son", librosNormalizados)
        console.log ("Los usuarios normalizados son" , usuariosNormalizados)

    }

/*En este punto decidí utilice el .map para recorrer los array en vez del forEach, porque como necesitaba cambiar los datos, 
preferí crear una copia en vez de cambiar los originales. A medida que .map recorre cada elemento, genera un nuevo objeto
con los datos normalizados. Como resultado, obtenemos un nuevo array que se llama librosNormalizados. En este cada libro tiene
su titulo y autor modificado como el punto lo requiere. 
De esta misma forma, utilice este método para los usuarios con la diferencia que en los emails se requería que se transforme en 
minusculas y donde también decidí colocar el .trim() para evitar los espacios extras.*/

/*Punto 9: Interfaz de Usuario por Consola
a) Implementar una función menuPrincipal() que muestre un menú de opciones al usuario y permita interactuar con el sistema
utilizando prompt(). El menú debe incluir opciones para todas las funcionalidades anteriores y utilizar estructuras 
de control (if, switch, ciclos) para manejar la lógica.*/

        const promptSync = require ("prompt-sync")();

        function menuPrincipal (){
        let salida1 = true
           while (salida1){
                console.log (`\n--- MENU PRINCIPAL ---`);
                console.log (`1) Gestionar usuario`);
                console.log (`2) Gestionar libros`);
                console.log (`3) Estadísticas y reportes`);
                console.log (`4) Préstamos`);
                console.log (`5) Otros`);
                console.log (`0) Salir`);
        let opcion = promptSync ("Por favor, elija una opción: ")

            switch (opcion){
                case '1':
                    menuUsuarios();
                    break;
                case '2':
                    menuLibros();
                    break;
                case '3':
                    menuEstadisticas();
                    break;
                case '4':
                    menuPrestamos();
                    break;
                case '5':
                    menuOtros();
                    break;
                case '0':
                    salida1 = false
                    break;
         
                default:
            console.log ('Opción invalida, por favor, intenta de nuevo.');

            }
        }
            function menuUsuarios(){
                let salida2 = true
                while (salida2){
                    console.log ('1) Registrar usuario');
                    console.log ('2) Buscar usuario');
                    console.log ('3) Borrar usuario');
                    console.log ('4) Mostrar todos los usuarios');
                    console.log ('0) Volver al menú principal');
                let opcion = promptSync ('Por favor, elija la opción deseada: ');

                switch (opcion){
                    case '1':{
                       let nombre =  promptSync ("Por favor ingrese su nombre completo: ");
                       let email =  promptSync ("Ahora ingrese su email: ");
                        registrarUsuario(nombre,email);
                        break;
                    }
                    case '2': {
                        let email = promptSync("Ingrese el email con el que se encuentra registrado: ")
                        buscarUsuario (email)
                        break;
                    }
                    case '3':{
                        let nombre= promptSync("Ingrese su nombre de usuario: ")
                        let email=promptSync ("Ingrese el mail con el cuál se encuentra registrado: ")
                        borrarUsuario(nombre, email)
                        break;
                    }
                    case '4':{
                        mostrarTodosLosUsuarios()
                        break;
                    }
                    case '0':{
                        salida2 = false
                        break; 
                    }
                    default:
                        console.log ('Opción inválida, intenta nuevamente.')


                }
            }
        }    
        
            function menuLibros(){
                let salida3 = true
                while (salida3){
                    console.log ('1) Agregar libro');
                    console.log ('2) Ordenar libros');
                    console.log ('3) Buscar libro');
                    console.log ('4) Borrar libro');
                    console.log ('0) Volver al menú principal');
                    
                let opcion = promptSync ('Ingrese la opción deseada: ')

                switch (opcion){
                    case '1':{
                        let titulo = promptSync('Ingrese el título del libro que quiere agregar: ');
                        let autor = promptSync('Ingrese el autor del libro a ingresar: ');
                        let anio = promptSync ('Ingrese el año de publicación del libro: ');
                        let genero = promptSync ('Ingrese el género del libro: ');
                        agregarLibro(titulo, autor, anio, genero)
                        break;
                    }
                    case '2':{
                        let criterio = promptSync('¿Por qué criterio desea ordenar los libros? Escriba "año" o "título": ');
                        ordenarLibros(criterio)
                        break;
                    }
                    case '3':{
                        let criterio = promptSync ('Ingrese un criterio de búsqueda puede ser por título, autor o género: ');
                        let valor = promptSync ('Ingrese el criterio elegido: ');
                        buscarLibro(criterio, valor)
                        break;
                    }
                    case '4':{
                        let id = parseInt(promptSync ('Ingrese el id del libro: '));
                        borrarLibro(id);
                        break;
                    }
                    case '0':
                         salida3 = false
                        break;
                    default:
                        console.log ('Opción inválida, intente nuevamente.');

                        }
                    }
                }

                function menuEstadisticas(){
                    let salida4 = true
                    while (salida4){
                        console.log (`1) Calcular estadisticas incluye: 
                        ✔️  Promedio de años de publicación de libros.
                        ✔️  Año de publicación más frecuente.
                        ✔️  Diferencia en años entre el libro más antiguo y el más nuevo.
                            `);
                        console.log (`2) Generar reportes de libros incluye:
                        ✔️  Cantidad total de libros
                        ✔️  Cantidad de libros prestados
                        ✔️  Cantidad de libros por género
                        ✔️  Muestra el libro más antiguo de la biblioteca y el más nuevo.
                            `)
                        console.log ('0) Volver al menú principal');
                    
                    let opcion = promptSync ('Ingrese la opción deseada: ');

                    switch (opcion){
                        case '1':{
                            calcularEstadisticas(libros)
                        break;
                        }
                        case '2':{
                            generarReporteLibros (libros)
                            break;
                        }
                        case '0':
                            salida4 = false
                            break;
                        default:
                        console.log ('Opción inválida, intente nuevamente.');

                        
                    }
                }
            }
            
                function menuPrestamos(){
                    let salida5= true
                    while (salida5){
                        console.log ('1) Prestar libro');
                        console.log ('2) Devolver libro');
                        console.log ('0) Volver al menú principal');

                    let opcion = promptSync('Ingrese la opción deseada: ')

                        switch (opcion){
                            case '1':{
                                let idLibro = parseInt (promptSync('Ingrese el ID de su libro: '));
                                let idUsuario = parseInt (promptSync ('Ingrese el ID de su usuario: '));
                                prestarLibro(idLibro, idUsuario)
                                break;
                            }
                            case '2':{
                                let idLibro = parseInt (promptSync ('Ingrese el ID del libro que quiere devolver: '));
                                let idUsuario = parseInt (promptSync ('Ingrese el ID de su usuario: '));
                                devolverLibro(idLibro, idUsuario)
                            }
                            case '0':
                                salida5 = false
                                break;
                            default:
                            console.log ('Opción inválida, intente nuevamente.');
                        }
                    }
                }
            
                function menuOtros(){
                    let salida6 = true
                    while (salida6){
                        console.log ('1) Normalizar datos');
                        console.log ('2) Buscar libros con títulos compuestos.')
                        console.log ('0) Volver al menú principal');

                    let opcion = promptSync ('Ingrese la opción deseada: ')

                    switch (opcion){
                        case '1':{
                            normalizarDatos()
                            break;
                        }
                        case '2':{
                            librosConPalabrasEnTitulo(libros);
                            break;
                        }
                        case '0':
                            salida6 = false
                            break;
                        default:
                            console.log ('Opción inválida, intente nuevamente.');

                    }
                }
            }
        }

menuPrincipal()





