# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Angular (standalone components) managed with `pnpm`, producing a self-contained static build (`dist/`) ready for simple cPanel (`public_html`) deployment. Legacy prototype file `prototipo_web_fundaci_n_co2.html` remains intact as reference.

## Users

- **Ciudadanos y donantes individuales en Bolivia:** Personas interesadas en apoyar causas ambientales reales de forma rápida y transparente mediante QR Simple o transferencia bancaria directa.
- **Voluntarios, docentes y estudiantes:** Jóvenes, familias y comunidades educativas que buscan sumarse a jornadas de siembra o talleres de educación climática.
- **Empresas y organizaciones aliadas:** Entidades que desean diagnosticar y compensar su huella de carbono mediante programas locales con seguimiento.

## Product Purpose

Presentar de manera clara, humana y creíble la labor de **Fundación CO2** en Bolivia: su propósito institucional, sus tres programas activos (Reforestación y Bosques Nativos, Educación Ambiental y Acción Juvenil, Huella de Carbono Cero), su bitácora de actividades de campo, un flujo directo de donaciones por QR Simple sin intermediarios y canales inmediatos de contacto por WhatsApp y correo.

## Positioning

Organización ambiental boliviana enfocada en intervención territorial medible: viveros de especies nativas, monitoreo real de supervivencia (86%) y educación climática escolar, con aportes directos y trazabilidad comunitaria.

## Operating Context

- Despliegue estático en hosting compartido cPanel (sin backend transaccional).
- Lectura frecuente desde teléfonos móviles en Bolivia y escritorio para alianzas institucionales.
- Flujo de donación interoperable: escaneo o descarga de QR Simple / copia de número de cuenta y envío inmediato de comprobante vía WhatsApp (`+591 74962427`).

## Capabilities and Constraints

- **Sin backend:** El formulario de contacto valida en el navegador y ofrece envío directo por WhatsApp; la bitácora de noticias se nutre de datos tipados locales con filtro por categoría y lector modal (`<dialog>`).
- **Interoperabilidad QR Simple:** Código QR vectorial descargable (y nota explícita de que es referencial hasta cargar el QR bancario oficial) junto a copia rápida de cuenta bancaria (`1000-0045-8921-02`).
- **Tono humano y editorial:** Español natural (`es-BO`). Se excluyen textos de propuesta comercial/técnica (`Demo Admin`, `Opción C`, `código fuente entregable`) y códigos decorativos de IA (`SEC_01`, `VAL_01`, `PROG_01`).
- **Accesibilidad:** Navegación por teclado, contraste AA legible sobre cristal claro y oscuro, foco visible y respeto a `prefers-reduced-motion`.

## Brand Commitments

- **Identidad:** Fundación CO2 (Bolivia).
- **Dirección material (vinculante):** Glassmorphism Arquitectónico con profundidad real en capas Z (`backdrop-filter: blur(20px) saturate(180%)`, bordes especulares 1px con degradado lineal, sombras interiores `inset`, malla orgánica de luz animada detrás de los paneles, tipografía display editorial con `-0.03em` junto a fuente UI limpia y monoespaciada reservada a datos reales, y microinteracciones suaves con `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Antipatrón a evitar:** Plantillas genéricas de IA (hero centrado con dos botones simétricos, fila de 3 tarjetas idénticas, tarjetas anidadas dentro de tarjetas, puntos pulsantes decorativos y retículas de líneas de fondo).

## Evidence on Hand

- `prototipo_web_fundaci_n_co2.html` contiene el copy fundacional, cifras de impacto (420 t CO₂ anuales, +18.500 árboles nativos, 86% supervivencia, +45 ha, +650 voluntarios, 35 comunidades/escuelas, +3.200 estudiantes, 28 colegios, 18 organizaciones aliadas), noticias iniciales y canales oficiales (`+591 74962427`, `contrerasjob123@gmail.com`, cuenta `1000-0045-8921-02`).

## Product Principles

1. **Claridad humana sobre jerga técnica:** Cada sección comunica qué hace la fundación y cómo participar sin códigos artificiales ni relleno de plantilla.
2. **Camino directo a la acción:** Donar por QR Simple, explorar programas o escribir por WhatsApp debe lograrse con cero fricción.
3. **Cristal al servicio de la jerarquía:** El vidrio esmerilado y las capas Z diferencian prioridad visual sin apilar contenedores innecesarios.
4. **Autosuficiencia en despliegue:** Cero dependencias de CDN frágiles en producción; assets locales listos para subir a `public_html`.
