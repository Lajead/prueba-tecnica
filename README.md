# Registro de Asistencia

Esta aplicaci\u00f3n es un ejemplo sencillo de registro de entrada y salida de usuarios. Est\u00e1 construida con React y Vite.

## Caracter\u00edsticas

- Permite capturar una foto desde la c\u00e1mara del navegador.
- Registra coordenadas geogr\u00e1ficas, fecha y hora del registro.
- Soporta turnos diurno (9am a 7pm) y nocturno.
- Guarda los registros en `localStorage` y cuenta con una vista de administraci\u00f3n para consultarlos.
- Incluye una pantalla de inicio de sesi\u00f3n para identificar a cada usuario.

## Uso

1. Instalar dependencias con `npm install` dentro de la carpeta `Prac-Pokemon`.
2. Ejecutar `npm run dev` y abrir la aplicaci\u00f3n.
3. Primero se muestra el formulario de inicio de sesi\u00f3n. Tras autenticarse se accede al registro en `/attendance` y en `/admin` se consultan todos los registros.
