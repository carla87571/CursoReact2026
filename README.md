# 🏡 Buscador de Propiedades — Curso React 2026

Proyecto práctico desarrollado durante el **Curso de React 2026** con Vite + TypeScript.  
Simula una plataforma de búsqueda de alojamientos, donde se practican los conceptos fundamentales de React moderno.

---

## 🚀 Demo y tecnologías

| Tecnología | Uso |
|---|---|
| React 19 | Biblioteca principal de UI |
| TypeScript | Tipado estático |
| Vite | Bundler y servidor de desarrollo |
| CSS | Estilos personalizados |

---

## 📚 Conceptos practicados

### Componentes y props
- Creación de componentes funcionales (`Header`, `Hero`, `SearchBar`, `PropertyCard`, `PropertyList`)
- Paso de props con tipado TypeScript usando `interface` y `type`
- Desestructuración de props directamente en los parámetros del componente
- Props opcionales (`type?` en `Property`)

### Hooks
- `useState` para manejar estado local: texto del input, búsqueda confirmada, lista de propiedades, estado de carga y errores
- `useEffect` para simular una carga asíncrona de datos con `setTimeout`
- Limpieza de efectos con la función de retorno (`clearTimeout`)

### Eventos y formularios
- Manejo de eventos con `onChange`, `onSubmit`, `onClick`
- Uso de `event.preventDefault()` para evitar la recarga de página al enviar el formulario
- Renderizado condicional del botón de limpiar búsqueda

### Filtrado y lógica de datos
- Función utilitaria `filterProperties` que compara campos en minúsculas (`toLowerCase`)
- Filtro por título, ciudad y tipo de propiedad
- Manejo de búsqueda vacía: devuelve todas las propiedades

### Datos mock
- Array de propiedades simuladas en `src/data/properties.ts` sin necesidad de backend
- Tipado de los datos con `type Property` en `src/types/propertyType.ts`
- Campo `type` opcional para practicar el manejo de datos incompletos

### Estados de carga y error
- Estado `isLoading` para mostrar mensaje mientras se cargan los datos
- Estado `error` para mostrar mensaje si la carga falla
- Renderizado condicional: `PropertyList` solo se muestra cuando `!isLoading && !error`
- Lista vacía: `PropertyList` maneja el caso de cero resultados con un mensaje amigable

### Organización del proyecto
```
src/
├── components/
│   ├── layout/       → Header (estructura de página)
│   ├── properties/   → PropertyCard, PropertyList (dominio de negocio)
│   └── ui/           → Hero, SearchBar (elementos de interfaz)
├── data/             → properties.ts (datos mock)
├── types/            → propertyType.ts (tipos TypeScript)
└── utils/            → filterProperties.ts (lógica pura)
```

---

## ▶️ Ejecutar el proyecto

```bash
npm install
npm run dev
```

---

## 🧠 Aprendizajes clave

- `event.preventDefault()` evita que el formulario recargue la página
- Los datos mock no requieren base de datos; son arrays en archivos `.ts`
- Un array vacío `[]` no es un error; es una lista sin elementos
- El `id` de cada propiedad se usa como `key` en `.map()` aunque no se muestre en la tarjeta
- `useEffect` con retorno de limpieza evita memory leaks en efectos con temporizadores
