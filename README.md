# Fundación CO2 — Landing en Angular

Landing institucional para **Fundación CO2 (Bolivia)** construida en **Angular 21** (componentes standalone sin `zone.js`) con **Tailwind CSS v4** y **pnpm**, lista para compilar y desplegar en un hosting estático cPanel (`public_html/`).

El archivo original `prototipo_web_fundaci_n_co2.html` se conserva intacto como referencia histórica.

## Requisitos

- Node.js 22+ (o 24+)
- `pnpm` 10+ / 12+

## Comandos principales

```bash
pnpm install        # Instalar dependencias
pnpm start          # Servidor local en http://localhost:4200
pnpm test -- --watch=false   # Ejecutar pruebas unitarias
pnpm build          # Compilar para producción en dist/fundacion-co2/browser/
pnpm build:cpanel   # Compilar con baseHref ./ listo para raíz o subcarpeta en cPanel
```

## Despliegue en cPanel

1. Ejecuta `pnpm build:cpanel` (o `pnpm build`).
2. Abre la carpeta generada `dist/fundacion-co2/browser/`.
3. Comprime o sube todo su contenido (incluido el archivo oculto `.htaccess`, las carpetas `fonts/` e `images/`, `index.html`, JS y CSS) directamente a `public_html/` (o a la subcarpeta que prefieras en tu dominio).
