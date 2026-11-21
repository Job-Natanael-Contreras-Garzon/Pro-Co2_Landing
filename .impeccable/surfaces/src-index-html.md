---
version: 1
slug: "src-index-html"
primary_target: "src/index.html"
related_targets: ["src/app/app.html"]
---

# Surface Brief: Fundación CO2 Landing (Angular)

- **Mode:** Persuade
- **Audience:** Ciudadanos en Bolivia dispuestos a donar vía QR Simple, voluntarios escolares/comunitarios y aliados corporativos.
- **Primary Action:** Donar directo con QR Simple o transferencia bancaria (y confirmar comprobante por WhatsApp), o explorar programas/contacto.
- **Constraints:** Español natural (`es-BO`); Angular standalone con `pnpm` para despliegue estático en cPanel; conservar `prototipo_web_fundaci_n_co2.html` intacto; eliminar códigos de IA (`SEC_01`, `VAL_01`, `PROG_01`), puntos pulsantes, retícula de líneas, tarjetas anidadas, `Demo Admin` y texto de propuesta comercial.

## Direction contract

- **THESIS:** Una fundación ambiental boliviana presentada como arquitectura luminosa de cristal esmerilado y bosque real: en lugar del hero centrado genérico con tres tarjetas iguales, el primer viewport combina un manifiesto editorial asimétrico con una placa flotante en el eje Z que lleva directo a donar por QR Simple.
- **OWN-WORLD:** Vidrio esmerilado físico multicapa (`backdrop-filter: blur(20px) saturate(180%)`), cantos especulares de `1px` con degradado lineal vía `::before` + `mask-composite`, reflejos interiores sutiles y tres profundidades (hoja base translúcida, placa flotante Z2 y cristal ahumado botánico `#0b1d16`) sobre una malla orgánica viva de luz cálida solar y verde dosel (`#eaece6` / `#dde6df` / `#1c7c54` / `#c78c32`). Tipografía display `Bricolage Grotesque` (`-0.03em`) con cuerpo humano `Source Sans 3` y `JetBrains Mono` reservado únicamente a cifras tabulares, fechas y cuentas bancarias.
- **STORY:** Quien entra comprende en segundos qué hace Fundación CO2 en Bolivia, ve cifras reales de captura (420 t CO₂/año) y supervivencia (86%), explora los tres programas y la bitácora sin ruido técnico, y completa su donación o mensaje por WhatsApp sin intermediarios.
- **FIRST VIEWPORT:** Cabecera flotante compacta arriba; debajo, grilla asimétrica 7/5 sobre el lienzo atmosférico con el titular editorial `Bosque vivo frente a la huella de carbono.`, párrafo claro, un bloque de acción principal (`Donar por QR Simple` + enlace secundario `Conocer programas`) y cifras base integradas sin tarjetas anidadas a la izquierda, contrapesado a la derecha por la fotografía del dosel nativo con la placa elevada de QR Simple superpuesta en el borde inferior izquierdo.
- **FORM:** Bento asimétrico y composición editorial abierta en capas Z (`seed: none (pinned)` — "Glassmorphism Arquitectónico, cuadrícula Bento asimétrica, superposición Z, cristal físico blur 20px saturate 180%, bordes 1px degradados, malla orgánica viva, tipografía display -0.03em + mono técnico para datos, microinteracciones cubic-bezier(0.16, 1, 0.3, 1)").
- **FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
