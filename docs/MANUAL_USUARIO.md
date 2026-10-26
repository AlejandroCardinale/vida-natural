# Manual de Usuario y Operación del Sistema
## Plataforma Web *Vida Natural* — Gestión de Productos y Nutrición

---

### Ficha Informativa del Documento
- **Sistema:** Vida Natural (Plataforma E-Commerce y Asesoría Nutricional)
- **Versión del Software:** 1.0.0 
- **Ámbito:** Proyecto Vida Natural — Algoritmos y Estructuras de Datos III (ALED III) / Analista de Sistemas
- **Audiencia:** Usuarios Finales (Clientes) y Administradores de Plataforma (Backoffice)
- **Compatibilidad:** Google Chrome, Mozilla Firefox, Microsoft Edge, Safari

---

## 1. Introducción y Propósito de la Aplicación

**Vida Natural** es una aplicación web moderna diseñada para facilitar la exploración, consulta nutricional y adquisición de productos dietéticos, orgánicos y naturales. La plataforma combina la agilidad de una interfaz reactiva de comercio electrónico con herramientas avanzadas para la toma de decisiones conscientes de alimentación mediante la integración en tiempo real con bases de datos nutricionales abiertas (*Open Food Facts*).

El sistema cuenta con un esquema de permisos diferenciados entre clientes generales y administradores comerciales, resguardando la integridad de las operaciones y el control del catálogo.

---

## 2. Requisitos de Acceso y Credenciales de Demostración

La aplicación no requiere instalación de software cliente adicional ni complementos de terceros; se ejecuta íntegramente a través de cualquier navegador web moderno con soporte para JavaScript y HTML5.

### 2.1 Perfiles de Usuario y Matriz de Acceso

| Perfil / Rol | Descripción Operativa | Privilegios Principales |
| :--- | :--- | :--- |
| **Usuario Estándar (`usuario`)** | Cliente registrado de la tienda | Exploración del catálogo, búsqueda nutricional, compra de artículos y consulta de historial personal de pedidos. |
| **Administrador (`admin`)** | Gestor comercial del negocio | Todos los privilegios de usuario más: alta, edición, eliminación de productos, reabastecimiento de stock y auditoría consolidada de compras de todos los clientes. |

### 2.2 Credenciales Preconfiguradas para Pruebas

Para propósitos de evaluación y demostración académica, el sistema cuenta con cuentas de acceso precargadas:

| Rol | Correo Electrónico | Contraseña | Destino Inicial |
| :--- | :--- | :--- | :--- |
| **Administrador** | `admin@vidanatural.com` | `admin123` | `/inicio` (Menú Admin Habilitado) |
| **Usuario Cliente** | `usuario@vidanatural.com` | `usuario123` | `/inicio` (Perfil Estándar) |

---

## 3. Guía de Operación Paso a Paso

### 3.1 Inicio de Sesión (Pantalla de Login - `/login`)

Al ingresar por primera vez a la plataforma, el sistema redirige automáticamente a la pantalla de autenticación.

```
+-------------------------------------------------------+
|                     VIDA NATURAL                      |
|         Gestión simple para una vida saludable        |
+-------------------------------------------------------+
|  [ Iniciar sesión ]                                   |
|                                                       |
|  Correo electrónico:                                  |
|  [ usuario@vidanatural.com                          ] |
|                                                       |
|  Contraseña:                                          |
|  [ ********                              ] [ (ojo) ]  |
|                                                       |
|  [              INGRESAR AL SISTEMA                 ] |
+-------------------------------------------------------+
|  Credenciales de prueba sugeridas                     |
+-------------------------------------------------------+
```

1. **Ingreso de Credenciales:** Complete el campo de correo electrónico y contraseña.
   - El formulario valida en tiempo real que el correo cumpla con el formato estándar (`nombre@vidanatural.com`) y que la clave contenga al menos 6 caracteres.
2. **Visualización de Contraseña:** Puede hacer clic en el botón con el icono de ojo ubicado a la derecha del campo de contraseña para alternar entre texto oculto y visible.
3. **Envío del Formulario:** Haga clic en **Ingresar al sistema**. Durante el procesamiento, el botón presentará una animación de carga (`spinner`).
4. **Respuesta ante Errores:** Si los datos ingresados no coinciden con las cuentas registradas, se desplegará una alerta contextual en rojo indicando: *"Email o contraseña incorrectos"*.
5. **Cierre de Sesión (Logout):** En cualquier momento, puede finalizar la sesión haciendo clic sobre el botón **Cerrar sesión** ubicado en la esquina superior derecha de la barra de navegación.

---

### 3.2 Panel de Control Principal (Dashboard - `/inicio`)

Una vez autenticado, el sistema presenta un tablero ejecutivo con el saludo personalizado al usuario actual y cuatro tarjetas métricas calculadas en tiempo real a partir del catálogo:

```
+-----------------------------------------------------------------------------------+
|  [Total Productos: 6]  [Disponibles: 5]  [Sin Stock: 1]  [Stock Bajo (<=10): 0]   |
+-----------------------------------------------------------------------------------+
|  PRODUCTOS DESTACADOS                                                             |
|  +--------------------+  +--------------------+  +--------------------+           |
|  | [Imagen]           |  | [Imagen]           |  | [Imagen]           |           |
|  | Aceite de coco     |  | Granola artesanal  |  | Proteína de arveja |           |
|  | $ 1.850            |  | $ 980              |  | $ 4.200            |           |
|  | [ Ver más ]        |  | [ Ver más ]        |  | [ Ver más ]        |           |
|  +--------------------+  +--------------------+  +--------------------+           |
+-----------------------------------------------------------------------------------+
```

- **Métricas Clave:**
  - **Total de Productos:** Cantidad global de artículos en la base de datos.
  - **Disponibles:** Productos habilitados comercialmente y con existencias (`stock > 0`).
  - **Sin Stock:** Artículos agotados temporalmente (`stock = 0`).
  - **Stock Bajo:** Artículos críticos con existencias entre 1 y 10 unidades que ameritan reabastecimiento.
- **Productos Destacados:** Muestra una selección de los artículos principales con sus precios en moneda local argentina. Al pulsar **Ver más**, el sistema lo conducirá directamente a la ficha detallada del artículo.

---

### 3.3 Catálogo Comercial de Productos (`/productos`)

El catálogo se carga mediante tecnología de descarga bajo demanda (*Lazy Loading*), optimizando el consumo de red.

#### Funcionalidades de Exploración y Filtrado:
1. **Búsqueda Reactiva:** Escriba cualquier fragmento del nombre o marca en el campo de búsqueda (ej. *"coco"* o *"NaturVida"*). La lista se actualizará automáticamente tras 300 milisegundos de inactividad de tipeo, evitando bloqueos en la interfaz.
2. **Filtro por Categoría:** Seleccione una categoría en el desplegable (Aceites, Cereales, Endulzantes, Infusiones, Semillas, Suplementos, etc.) para aislar productos afines.
3. **Limpieza Rápida:** Pulse el botón de **Limpiar filtros** para restablecer la vista completa.
4. **Indicador de Stock y Disponibilidad:** Cada fila o tarjeta resalta visualmente el estado del stock (verde para existencias normales, naranja para stock crítico y rojo para productos agotados).

---

### 3.4 Proceso de Compra (Flujo para Clientes)

Para adquirir un producto:

1. Ingrese a la vista de detalle haciendo clic en **Ver detalle** dentro del catálogo o en los destacados del inicio.
2. En la sección lateral de **Comprar Producto**, especifique la cantidad deseada mediante el selector numérico.
   - El sistema valida que la cantidad no sea menor a 1 ni superior a las unidades físicas disponibles.
3. Haga clic en el botón verde **Comprar**.

```
+-------------------------------------------------------------+
|                 CONFIRMAR COMPRA                            |
+-------------------------------------------------------------+
|  ¿Desea confirmar la compra del siguiente producto?         |
|                                                             |
|  * Producto:        Aceite de coco orgánico                 |
|  * Cantidad:        2 unidad(es)                            |
|  * Precio Unitario: $ 1.850                                 |
|  * Total a pagar:   $ 3.700                                 |
+-------------------------------------------------------------+
|             [ Cancelar ]     [ Confirmar Compra ]           |
+-------------------------------------------------------------+
```

4. **Confirmación Transaccional:** Se abrirá una ventana emergente (`MatDialog`) con el desglose exacto de la operación.
   - Si presiona **Cancelar**, la ventana se cierra sin alterar ningún dato.
   - Si presiona **Confirmar Compra**, el sistema descontará automáticamente las unidades del inventario en MockAPI, creará el registro histórico en `/compras` y notificará el éxito de la operación mediante un mensaje flotante (*Snackbar*).

---

### 3.5 Historial de Compras del Cliente (`/mis-compras`)

Disponible para cualquier usuario autenticado desde el menú superior:

1. Muestra exclusivamente las transacciones realizadas por la cuenta activa (ej. `usuario@vidanatural.com`).
2. **Tarjeta Resumen:** Destaca el importe acumulado (**Total Gastado**) expresado con formato de moneda nacional (`$ 3.700`).
3. **Tabla Cronológica:** Presenta las compras ordenadas desde la más reciente hasta la más antigua, detallando:
   - Nombre del producto adquirido.
   - Unidades compradas.
   - Precio unitario vigente al momento de la transacción.
   - Total facturado.
   - Fecha y hora exacta de registro (formato `dd/MM/yyyy HH:mm`).

---

### 3.6 Buscador Nutricional de Alimentos (`/buscar-alimentos`)

Herramienta diseñada para contrastar la oferta comercial con la base de datos abierta global de **Open Food Facts**:

1. En el campo de búsqueda, ingrese el alimento que desea consultar (ejemplo: *"avena"*, *"leche de almendras"*, *"arroz integral"*).
2. Pulse el botón **Buscar** o presione la tecla `Enter`.
3. El sistema consultará el servicio externo y renderizará hasta 12 resultados coincidentes en tarjetas interactivas:
   - **Fotografía Oficial:** Imagen de empaque del producto provista por el fabricante.
   - **Marca y Categoría Principal:** Identificación del origen del alimento.
   - **Información Nutricional:** Aporte energético en kilocalorías por cada 100 gramos (`kcal/100g`) y cantidad de proteínas (`g/100g`).
   - **Distintivo Nutri-Score Oficial:** Calificación internacional de calidad nutricional identificada por letra y código de color:
     - **A (Verde Oscuro):** Calidad nutricional óptima.
     - **B (Verde Claro):** Buena calidad nutricional.
     - **C (Amarillo):** Calidad nutricional media.
     - **D (Naranja):** Consumo moderado recomendado.
     - **E (Rojo):** Alto en azúcares, sodio o grasas saturadas.

---

## 4. Funcionalidades Exclusivas para el Administrador

Cuando un usuario inicia sesión con la cuenta de administrador (`admin@vidanatural.com`), la interfaz de usuario se adapta revelando herramientas de gestión interna:

### 4.1 Alta de Nuevos Productos (`/productos/nuevo`)
1. En la vista de catálogo, haga clic en el botón superior **+ Nuevo Producto**.
2. Complete el formulario reactivo con los datos requeridos:
   - **Nombre:** Mínimo 3 caracteres (obligatorio).
   - **Categoría:** Selección obligatoria del menú desplegable.
   - **Marca:** Identificación del fabricante (obligatorio).
   - **Precio:** Valor numérico en ARS mayor a 0 (obligatorio).
   - **Stock Inicial:** Cantidad entera mayor o igual a 0.
   - **Descripción e Imagen URL:** Campos informativos para enriquecer la tarjeta del producto.
3. Pulse **Guardar Producto**. El sistema validará los campos y lo redireccionará al catálogo con el nuevo artículo publicado.

### 4.2 Edición y Modificación de Productos (`/productos/:id/editar`)
1. Desde la tabla del catálogo o desde la ficha de detalle, pulse el botón azul **Editar**.
2. El formulario precargará la totalidad de los datos existentes del producto mediante sincronización reactiva.
3. Modifique los atributos necesarios y presione **Guardar Cambios**. La actualización se propagará de forma inmediata a los servicios de datos.

### 4.3 Reabastecimiento de Stock (Reposición Comercial)
Si un producto se queda sin stock (`stock = 0`), quedará automáticamente inhabilitado para compras de clientes. Para reponerlo:
1. El administrador ingresa al detalle del producto (`/productos/:id`).
2. En el panel de control administrativo, ubica la casilla **Agregar Unidades al Stock**.
3. Ingresa la cantidad de reposición (ej. 50 unidades) y pulsa **Actualizar Stock**.
4. El sistema suma las unidades al inventario existente y **reactiva automáticamente la disponibilidad comercial** (`disponible = true`), permitiendo que los clientes vuelvan a comprarlo de inmediato.

### 4.4 Eliminación Segura de Productos
Para dar de baja un artículo del catálogo:
1. Pulse el botón rojo **Eliminar** en la fila del producto o en su ficha técnica.
2. Aparecerá un cuadro de diálogo de confirmación (`MatDialog`):
   ```
   +---------------------------------------------------------+
   |                ¿ELIMINAR PRODUCTO?                      |
   +---------------------------------------------------------+
   |  ¿Está seguro de que desea eliminar el producto         |
   |  "Aceite de coco orgánico"?                             |
   |                                                         |
   |  Esta acción no se puede deshacer.                      |
   +---------------------------------------------------------+
   |              [ Cancelar ]    [ Eliminar ]               |
   +---------------------------------------------------------+
   ```
3. Si confirma la acción, el registro será suprimido de la base de datos y la interfaz se actualizará sin necesidad de recargar la página.

### 4.5 Panel de Auditoría de Compras (`/admin/compras`)
Accesible exclusivamente para administradores a través del enlace **Historial de compras** en la barra superior.

1. **Indicadores Financieros Globales:**
   - **Compras Realizadas:** Contador total de transacciones completadas por todos los usuarios.
   - **Total Vendido:** Monto acumulado histórico en pesos argentinos calculado dinámicamente.
2. **Filtros de Búsqueda Avanzada:**
   - **Filtro por Nombre de Cliente:** Localice pedidos de un comprador específico (ej. *"Juan"*).
   - **Filtro por Correo Electrónico:** Búsqueda exacta o parcial por email (ej. *"usuario@"*).
   - **Filtro por Producto:** Encuentre todas las órdenes asociadas a un artículo determinado (ej. *"Granola"*).
   - **Botón de Limpiar Filtros:** Restaura de forma instantánea la tabla completa sin peticiones de red adicionales.

---

## 5. Preguntas Frecuentes (FAQ) y Resolución de Problemas

#### ¿Qué ocurre si intento ingresar a `/admin/compras` con un usuario estándar?
El sistema cuenta con un centinela de seguridad (`RoleGuard`). Si un usuario sin privilegios de administrador intenta forzar la dirección escribiéndola en la barra del navegador, la petición será interceptada y se lo redirigirá inmediatamente a la pantalla de `/inicio`.

#### ¿Por qué no puedo comprar un producto aunque lo vea en el catálogo?
Un producto no puede ser adquirido si su stock ha llegado a cero (`stock = 0`) o si el administrador lo ha marcado como no disponible. En dicho escenario, el botón de compra permanecerá deshabilitado y se exhibirá una etiqueta roja de *"Agotado"*.

#### ¿Qué sucede si la API de MockAPI no responde?
El servicio de productos incorpora un mecanismo de contingencia local (*fallback*). Si el servidor en la nube no está configurado o sufre una interrupción temporal, la aplicación funcionará de manera transparente empleando datos locales simulados en memoria para asegurar la continuidad de la prueba.

#### ¿Cómo restablecer la sesión si el navegador muestra información desactualizada?
Haga clic en **Cerrar sesión** en la barra superior. Esto purgará la clave `'vn_user'` de su almacenamiento local y reconfigurará los observables de estado. Posteriormente, vuelva a ingresar sus credenciales.
