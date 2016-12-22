# platzigram
Repositorio del proyecto platzigram


###################   Notas del curso definitivo de javascript   #####################

Gestor de paquetes: Paquete que ayuda a instalar paquetes nuestros o de terceros a nuestro proyecto.

#NPM : Gestor de paquetes 
#Bower: Gestor de paquetes 
#DUOJS: Gestor de paquetes que va a github por los paquetes que se necesiten 

Package bundling o ensambladores de paquetes 

#Browserify 
#webpack: permite agregar transformaciones a nuestro codigo (por ejemplo archivos .coffee los transforma a javascript)

Automatizadores: Automatizan las tareas 
#Grunt
#Gulp

Preprocesadores css : Sirven para manejar variables y algunos comandos que no permite css
#Saas 
#Less
#Stylus

Gestor de templates: Para agregar template a todas nuestras paginas
#Jade/pug 

Paginadores: permite solo cargar una vez la pagina en el cliente y utilizar paginación para solo cargar los datos
#Page.js

Observador: Paquete que observa cuando hay cambios y ejecuta tareas definidas para generar todo lo necesario
#watchify

Generador de templates semi automatizados usando DOM 
#yo-yo

Limpiador de secciones 
#empty-element

Libreria para cambiar el titulo cuando se usan templates 
#title 

Libreria para cambiar los formatos de fechas para diferentes paises
#moment.js

Libreria para internacionalizar aplicaciones. 
#format.js



*****************************  Enlaces importantes  **********************************
*favicon generator: Genera los favicons para todas las resoluciones 
*html to jade : Convierte codigo html en codigo jade 
*npm scripts : automatizacion de procesos npm
*Font Awesome :  iconos gratis para nuestras apps (facebook, twitter, etc.)

-------------------   Pasos para llevar a cabo el proyecto ---------------------------

-Se Genero un archivo server.js que es el archivo de configuración de node js 
-Se agrego materialize-css como dependencia y se elimino del codigo de la app
-Se agrega con npm gulp y gulp-sass pero como dependencia de desarrollo 
-Se instala Gulp-rename para poder renombrar el archivo index.css por el nombre que necesitamos
-Se agrego el paquete pug para generar templates para nuestro sitio y se definio una carpeta estatica/publica con express.static  a la cual pueden accesar los usuarios y en la que pondremos nuestros assets 
-Se creo la carpeta de assets, se agrego la tarea en gulp para que lo copie a carpeta public y se agrego el favicon 
-Se instalo browserify (Package bundler) , babelify (compatibilidad con ecma 2015) y vinyl-source-stream (para poder convertir la salida de babel a algo entendible por gulp )
- Se agrego page.js
- Se automatiza el build de nuestro proyecto, agregando watchify para que cuando halla algun cambio automaticamente haga el bundle de la aplicación
-Se agrego libreria de yo-yo para poder tener templates en el contenido y se instalo la libreria empty-element para poder limpiar las secciones mientras cargamos las paginas 
- Se agregaron los titulos de las paginas y se agrego la libreria title 
- Se incluyo la libreria de font awesome, se corrigio la libreria materialize por que presentaba algunos problemas y se agrego el timeline
- Se agrego recursión y funcionalidad al timeline utilizando un arreglo para obtener los datos 
- Se agrego funcionalidad al boton me gusta (cambiar imagen , sumar y restar cantidad de likes ) con yoyo utilizando dinamic updates.
- Se modifico el formato de la fecha utilizando moment.js
- Se internacionalizo el sitio con IntlRelativeFormat de  format.js quitando moment.js
- Se agrego la funcionalidad multiidioma utilizando IntlMessageFormat de format.js
- Se agregaron las traducciones a los textos que nos faltaron 
- Se agrego funcionalidad al boton idioma
- Se utilizara superagent para hacer request tipo ajax
- Se modificara la funcionalidad tipo ajax para realizarla con axios (solo por aprender =P)
- Se modifico la funcionalidad de ajax a fetch  (solo por aprender =P)
- Se modifico la funcionalidad de ajax a asyncload (con ayuda de presets , syntax-async-functions, transform-regenerator y polyfills ) y se corrigieron algunos bugs
- Se agrego la forma para subir archivos