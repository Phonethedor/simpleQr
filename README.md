# Generador de QR

Generador de codigos QR del lado del cliente, construido con TypeScript y Vite. Pega cualquier texto o URL, genera el codigo al instante y descargalo como JPG — sin backend, sin registro.

## Caracteristicas

- Genera codigos QR desde cualquier texto o URL (hasta 500 caracteres)
- Descarga el resultado como archivo JPG
- Alternancia entre tema claro / oscuro con preferencia persistente
- Contador de caracteres con validacion en linea
- 100% del lado del cliente — ningun dato sale del navegador

## Stack Tecnologico

| Capa        | Tecnologia              |
|-------------|-------------------------|
| Lenguaje    | TypeScript 5            |
| Bundler     | Vite 5                  |
| Motor QR    | qrcode ^1.5.3           |
| Despliegue  | GitHub Pages (gh-pages) |

### Requisitos Previos

- Node.js >= 18
- npm >= 9

### Instalacion

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```