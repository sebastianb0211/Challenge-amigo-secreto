# Challenge-amigo-secreto

desafio con javaScript para desarrollar la logica de programacion

## Este código implementa un pequeño juego de "Amigo Secreto" en el que los usuarios pueden:

### 1. Agregar nombres de amigos a una lista.

### 2. Realizar un sorteo para seleccionar un amigo secreto al azar.

### 3. Reiniciar el juego para empezar de nuevo.

## Estructura del Proyecto

### Elementos HTML utilizados

#### listaNombres
Un arreglo en JavaScript donde se almacenan los nombres de los amigos agregados.

#### lista
Elemento HTML (<ul> o similar) que muestra los nombres de los amigos en la lista.

#### errorAmigo
Elemento HTML (<h3> o similar) para mostrar errores relacionados con el sorteo.

#### nuevoJuego
Botón para reiniciar el juego.

#### error
Elemento HTML para mostrar errores relacionados con la adición de amigos.

#### resultado
Elemento HTML que muestra el amigo secreto seleccionado.

## Funciones

### agregarAmigo()

**Propósito:** Agrega un nuevo amigo a la lista de nombres.

**Lógica:**

- Captura el valor ingresado en el campo de texto con id="amigo".
- Verifica si el valor es vacío y muestra un mensaje de error si es necesario.
- Comprueba si el nombre ya está en la lista y evita duplicados.
- Si el nombre es válido y no está repetido, lo agrega a la lista y actualiza el DOM para mostrarlo.
- Habilita el botón de "Nuevo Juego" si la lista no está vacía.

### sortearAmigo()

**Propósito:** Selecciona un amigo secreto al azar de la lista.

**Lógica:**

- Genera un índice aleatorio basado en la longitud de listaNombres.
- Verifica si la lista está vacía y muestra un mensaje de error si no hay amigos.
- Si hay amigos en la lista, selecciona uno al azar y lo muestra en el elemento resultado.
- Limpia la lista visual y mantiene los datos en el arreglo.

### nuevoIntento()

**Propósito:** Reinicia el juego y limpia todos los elementos visuales y de datos.

**Lógica:**

- Vacía el arreglo listaNombres.
- Limpia el contenido de los elementos lista, errorAmigo, error y resultado.
- Desactiva el botón de "Nuevo Juego".

### limpiar(texto)

**Propósito:** Limpia el campo de texto especificado.

**Lógica:**

- Usa el id del campo pasado como argumento para establecer su valor en una cadena vacía.

## Uso

1. Escribe un nombre en el campo de texto con id="amigo" y haz clic en el botón para agregarlo.
2. Si no escribes nada o el nombre ya existe en la lista, se mostrará un mensaje de error.
3. Una vez que hayas agregado al menos un nombre, haz clic en el botón para sortear un amigo secreto.
4. Si la lista está vacía, se mostrará un mensaje de error.
5. El nombre del amigo secreto aparecerá en el elemento resultado.
6. Para reiniciar el juego, haz clic en el botón de "Nuevo Juego". Esto vaciará la lista y restablecerá todos los mensajes y resultados.

## Notas

- La función `sortearAmigo()` solo limpia la lista visual pero mantiene los datos en el arreglo.
- Para extender este código, podrías permitir la eliminación de nombres o guardar los resultados en localStorage.

