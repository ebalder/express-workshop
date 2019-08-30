# Ejecutando

1. `$ npm install`
2. Agrega `"main": app.js` a la configuración de package.json

# User Nodemon

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
extend layout
block content

    #wrapper
        ul
            each entry in entries
                li: a(href=`firmas/${entry.name}`) #{entry.name}
```

para ejecutar ésta vista, usar la llamada
`res.render('entries', { entries });`

# Crear una vista para una firma específica

views/entry.pug
```
extend layout
block content

    #wrapper
        #entry-name #{entry.name}
        #entry-message #{entry.message}

```

recuerda agregar la llamada a `render()`!

# Aplicar los estilos

instala el módulo stylus mediante npm, globalmente
`$ sudo npm install -g stylus`

ejecuta stylus para compilar los estilos
`stylus --out public/css styles`

agrega el estilo al layout principal
`link(rel='stylesheet', href='/css/main.css', type='text/css')`

# OPCIONAL: crear navegación via jade