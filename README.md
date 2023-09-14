# Amaury Flores Estudillo
**Edad:** 20 años

[Practica 5](./practica-5.md)

## Parcial 2 - Práctica 2

**¿Cómo se inicializa un repositorio en Git?**

Primero debemos confirma que tengamos git instalado y algun editor de texto que no permita acceder a una terminal para acceder a los comandos de git.

Luego la primera vez que configuramos git debemos de registrar el usuario que subira los cambias junto a su correo electronico 

```bash
git config --global user.name "nombre de usuario"
git config --global user.email correo@gmail.com
```

**¿Cómo creas un repositorio en Github**

Primero necesitamos una cuenta en GitHub, cuando ya tengamos la cuenta, desde nuestra pagina principal nos permitirá crear un repositorio nuevo, al crearlo, nos dria que le demos un nombre, una visibilidad y confirma la creación

**¿Cómo vinculas un repositorio local de Git con uno remoto en GitHub?**

Cuando terminas de crear tu repositorio GitHub, dejara un codigo, el cual puedes ingresar en tu terminal de git, para clonar, el codigo suele ser parecido a este:
```bash
git remote add origin https://github.com/usuario/repositorio.git
```

**¿Cuál es el flujo básico de trabajo en Git y GitHub?**

Cuando uno esta trabajando dentro de su repositorio y guarda los cambios hechos, estos no estaran a la par del repositorio en la nube, por lo cual cuando alguien más clone el repositrio no apareceran los cambios hechos localemente. Para arreglar esto, al terminar de hacer los cambios deseados tenemos que subir los cambios, para ello primero debemos ejecutar el comando:
```bash
git add .
```
Esto hace que los cambios realisados pasen a un estado de _stage_ el cual sigue ya agrego los cambios a un esto de "por subir". Ahora tenemos que confirmar la subida, y aparte, especificar el cambio que realisamos, para existe el comando:
```bash
git commit -m "mensaje del commit"
```

El cual agarra todos los cambios en _stage_ y los deja en un estado "prenube", digamos que se encuentran ya fichados pero todavía los cambios no se reflejaran dentro del repositorio, con un mensaje, el cual deberíamos especificar, que cambios realisamos de forma concisa. Por ultimo, debemos subir los cambios, para ello existe el comando:
```bash
git push origin main
```
o
```bash
git push
```

el primero comando, es cuando realisamos el push por primera vez, haciendo que el push sea exclusivamente en la rama _"main"_ el segundo codigo se ejecuta cuando sabemos en que rama estamos trabajando, cuando lancemos este codigo, todos los cambios ya apareceran en la nube, y cualquier persona que descarge el repositorio le apareceran los cambios.

Cuando alguien más genere cambios, existe el comando:
```bash
git pull
```
que nos permitirá refrescar, agregar o eleminar algún contenido nuevo que alguien más generó en el repositorio.
### Profesores

**Lenguajes Interpretados**
La materia tiene la inteción de enseñarnos diferentes propiedades y practicas correctas de la programación en diferentes ámbitos y con diferentes recursos
**Profesor:**Jonathan Miranda

**Sistemas Operativos**
La materia tiene la inteicón de enseñarnos los difrentes tipos de sistemas operativos que existen y la forma de manejarlos, y como darles cierto mantenimiento
**Profesor:** Osiel Morales

**Principios de composición y diseño**
La materia tiene como objetivo el enseñarnos a emplear el diseño para dar un mensaje en nustras imagenes, o en otro caso, como diseñarlas para resaltar alguna emoción
**Profesor:** Roberto Melo

**Diseño de videojuegos**
La materia tiene com intención de enseñarnos los pasos y la manera correcta de como se crean los juegos desde 0, y como nos debemos organizar en equipo
**Profesor:** Hechtor Guerrero

**Proyecto de App**
La materia tiene el objetivo de enseñarnos la manera correcta de manejar proyectos y generar ayuda visual para cualquier programador o no programador
**Profesor:** Sebastian Mejia

**Ingles Técnico**
La materia tiene como fóco el sacar el certificado de ingles, necesario en muchas empresas para trabajar
**Profesor:** Miranda


![yoxd](foto.jpeg)
