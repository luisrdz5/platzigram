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

*****************************  Enlaces importantes  **********************************
*favicon generator: Genera los favicons para todas las resoluciones 
*html to jade : Convierte codigo html en codigo jade 

-------------------   Pasos para llevar a cabo el proyecto ---------------------------

-Se Genero un archivo server.js que es el archivo de configuración de node js 
-Se agrego materialize-css como dependencia y se elimino del codigo de la app
-Se agrega con npm gulp y gulp-sass pero como dependencia de desarrollo 
-Se instala Gulp-rename para poder renombrar el archivo index.css por el nombre que necesitamos
-Se agrego el paquete pug para generar templates para nuestro sitio y se definio una carpeta estatica/publica con express.static  a la cual pueden accesar los usuarios y en la que pondremos nuestros assets 
-Se creo la carpeta de assets, se agrego la tarea en gulp para que lo copie a carpeta public y se agrego el favicon 
-Se instalo browserify (Package bundler) , babelify (compatibilidad con ecma 2015) y vinyl-source-stream (para poder convertir la salida de babel a algo entendible por gulp )

