# Vida Natural

Proyecto desarrollado para la materia Algoritmos III de la carrera Analista de Sistemas. Se trata de una aplicacion web que simula el funcionamiento de una tienda de productos naturales, donde los usuarios pueden explorar productos, buscar alimentos y gestionar sus compras.

## Descripcion del proyecto

La aplicacion esta construida con Angular 17 y permite a los usuarios:

- Iniciar sesion con autenticacion por roles (usuario comun y administrador)
- Navegar por el catalogo de productos naturales
- Buscar alimentos especificos
- Ver el historial de sus compras
- Administrar todas las compras del sistema (solo rol administrador)

## Tecnologias utilizadas

- Angular 17
- Angular Material (componentes de interfaz)
- TypeScript
- Angular CDK
- RxJS
- Karma y Jasmine (para pruebas unitarias)

## Estructura del proyecto

```
src/
  app/
    pages/
      login/           - Pantalla de inicio de sesion
      dashboard/       - Pagina principal tras el login
      buscar-alimentos/ - Buscador de alimentos
      productos/       - Catalogo de productos (con lazy loading)
      mis-compras/     - Historial de compras del usuario
      admin-compras/   - Panel de administracion de compras
    guards/            - Proteccion de rutas por autenticacion y rol
    models/            - Modelos de datos
    services/          - Servicios de logica de negocio
    shared/            - Componentes reutilizables
```

## Como ejecutar el proyecto

Primero, instalar las dependencias:

```bash
npm install
```

Luego, levantar el servidor de desarrollo:

```bash
ng serve
```

Abrir el navegador en `http://localhost:4200/`.

## Compilacion

Para generar los archivos de produccion:

```bash
ng build
```

Los archivos se generan en la carpeta `dist/`.

## Pruebas

Para ejecutar las pruebas unitarias:

```bash
ng test
```

## Notas

Este proyecto fue realizado como trabajo practico para la carrera de Analista de Sistemas. Cualquier consulta o sugerencia es bienvenida.
