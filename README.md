# Ejecutar

1. `$ npm install`
2. Agrega `"main": app.js` a la configuración de package.json

# Use Nodemon

`$ npm install -g nodemon` (probablemente requiera privilegios como su o sudo)

Podemos agregar una nueva entrada en package.json para ejecutar el comando `nodemon app.js`


# Abrir un endpoint para ejecutar POST y GET en firmas
routes/index.js:14
```
  router.route('/firmas')
    .post(guestbook.postEntry)
    .get(guestbook.getEntries);
```

# Crear un endpoint de GET para obtener una firma específica
routes/index.js:19
```
  router.route('/firmas/:nombre')
    .get(guestbook.getEntry);
```

# Crear una vista para listar las firmas

views/entries.pug
```
    #entries
        ul
            each entry in entries
                li: a(href=`firmas/${entry.name}`) #{entry.name}
```


para ejecutar ésta vista, usar la llamada
`res.render('entries', { entries });`

# Reutilizar el estilo de la página principal

views/layout.pug
```
doctype
html
  head
    title Libro de visitas - My Site
    link(rel='stylesheet', href='/css/main.css', type='text/css')
    script(src='/jquery.js')
  body
    header
      h1 Mi libro de visitas
    .container
      .main-content
        block content
      .sidebar
        block sidebar
    footer
      p Running on node with Express & Jade

```

views/index.pug
```
extend layout
block content
 
  div
    label Nombre
    input#nombre
  div
    label Mensaje
    textarea#mensaje

  button#boton Firmar

  div#saludo

  script.
    $(document).ready(function(){
        $('#boton').on('click', function(){

            var nombre = $('#nombre').val();
            var mensaje = $('#mensaje').val();

            $.post( "/firmas", {name: nombre, message: mensaje})
                .done( function( data ) {
                    $('#saludo').html(data);
                })
                .error( function( data ) {
                    $('#saludo').html('Error: ' + data.responseText);
                });
        });
    });
```

# Crear una vista para una firma específica

views/entry.pug
```
#entry
    #entry-name #{entry.name}
    #entry-message #{entry.message}

```

recuerda agregar la llamada a `render()`!
también extender el layout

# Aplicar los estilos

instala el módulo stylus mediante npm, globalmente
`$ sudo npm install -g stylus`

ejecuta stylus para compilar los estilos
`stylus --out public/css styles`

agrega el estilo al layout principal
`link(rel='stylesheet', href='/css/main.css', type='text/css')`

# OPCIONAL: crear navegación via jade