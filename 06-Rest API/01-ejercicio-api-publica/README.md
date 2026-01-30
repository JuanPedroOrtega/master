# Ejercicio 1: API REST Pública

Consumir la API pública de Rick & Morty.

## Ejecutar

```bash
npm install
npm start
```

## 📝 Ejercicios Implementados

### ✅ Ejercicio 1: API REST Pública

Consume la API pública de Rick & Morty para mostrar personajes.

**Ejecutar:**
```bash
npm start
```

La aplicación estará disponible en: http://localhost:8080

**Funcionalidades:**
- ✅ Listado de personajes con paginación
- ✅ Vista de detalle de cada personaje
- ✅ Navegación entre páginas
- ✅ Diseño responsive con Material-UI

### ✅ Ejercicio 2: json-server Local

Usa un servidor local para simular operaciones de escritura.

**Pasos para usar json-server:**

1. **Cambiar configuración en** `src/core/api/character.api.ts`:
   ```typescript
   const USE_JSON_SERVER = true;  // Cambiar de false a true
   ```

2. **Iniciar json-server** (en una terminal separada):
   ```bash
   npm run start:api
   ```

3. **Iniciar la aplicación** (en otra terminal):
   ```bash
   npm start
   ```

**Funcionalidades adicionales:**
- ✅ Campo `bestSentences` en cada personaje
- ✅ Agregar frases memorables
- ✅ Eliminar frases
- ✅ Guardar cambios (PATCH)

## 🗂️ Estructura del Proyecto

```
src/
├── core/
│   ├── api/
│   │   └── character.api.ts      # API repository con toggle
│   ├── model/
│   │   └── character.model.ts    # Tipos TypeScript
│   └── router/
│       ├── routes.ts              # Definición de rutas
│       └── router.component.tsx   # Configuración de rutas
├── pods/
│   ├── character-collection/      # Listado de personajes
│   └── character/                 # Detalle de personaje
└── scenes/
    ├── character-collection.scene.tsx
    └── character.scene.tsx
```

## 📊 Base de Datos json-server

El archivo `db.json` contiene 10 personajes con el campo `bestSentences` inicializado vacío.

## 🔄 Toggle entre APIs

El sistema permite cambiar fácilmente entre la API pública y json-server:

- **API Pública** (`USE_JSON_SERVER = false`): Solo lectura, paginación completa
- **json-server** (`USE_JSON_SERVER = true`): Lectura y escritura, edición de frases

## 🎯 Opcionales y Challenges (Pendientes)

### Opcional
- [ ] Implementar versión GraphQL

### Challenges
- [ ] Implementar paginación avanzada
- [ ] Implementar búsqueda de personajes
- [ ] Componente para Locations
- [ ] Componente para Episodes

## 📚 Recursos

- [Rick & Morty API](https://rickandmortyapi.com/)
- [json-server](https://github.com/typicode/json-server)
- [React Router](https://reactrouter.com/)
- [Material-UI](https://mui.com/)

## 💡 Notas

- La paginación ya está implementada en el Ejercicio 1
- Para probar el guardado de frases, asegúrate de tener json-server corriendo y `USE_JSON_SERVER = true`
- Los cambios en json-server persisten en el archivo `db.json`
