# 🏦 Suite de Pruebas QA - Guru99 Bank

## 📋 Resumen

Suite de pruebas E2E profesional para la **Aplicación Demo Guru99 Bank**, implementando **Playwright** con **TypeScript** siguiendo la arquitectura **Page Object Model (POM)** y principios de **Desarrollo Guiado por Comportamiento (BDD)**.

## 🎯 Propósito del Proyecto

Este proyecto demuestra **prácticas empresariales de automatización QA** para aplicaciones bancarias, enfocándose en **mantenibilidad**, **fiabilidad** y **documentación profesional** adecuada para entrevistas técnicas y entornos de producción.

## 🌐 Aplicación Bajo Prueba

- **URL**: https://demo.guru99.com/V4/
- **Credenciales**:
  - User ID: `mngr646730`
  - Password: `rysenUg`
- **Funcionalidades Probadas**: Login, Creación de Clientes, Escenarios de Validación

## 🏗️ Arquitectura del Proyecto

```
qa-automation-izertis/
├── 📁 tests/                 # Suites de pruebas E2E organizadas por funcionalidad
├── 📁 pages/                 # Page Object Model - Elementos web y acciones
├── 📁 utils/                 # Utilidades compartidas y helpers
├── 📁 docs/                  # Documentación del proyecto y guías
├── 📁 html-report/           # Reportes generados de pruebas
├── 📁 test-results/           # Artefactos de ejecución de pruebas
├── 📁 .github/workflows/     # Pipeline CI/CD para ejecución automatizada
└── 📄 playwright.config.ts   # Configuración de pruebas y ajustes del navegador
```

## 🛠️ Stack Tecnológico

| Componente | Tecnología | Propósito |
|------------|------------|-----------|
| **Framework** | Playwright | Pruebas E2E modernas con soporte multi-navegador |
| **Lenguaje** | TypeScript | Código con tipado seguro y mejor soporte IDE |
| **Patrón** | Page Object Model (POM) | Arquitectura mantenible y escalable |
| **Metodología** | BDD con `test.step()` | Estructura clara de pruebas con lenguaje de negocio |
| **CI/CD** | GitHub Actions | Ejecución automatizada de pruebas y reportes |
| **Reportes** | HTML Reporter | Resultados profesionales con capturas de pantalla |

## 📊 Cobertura de Pruebas

### ✅ **Funcionalidades Implementadas**

#### **1. Módulo de Login**
- **Caso Positivo**: Credenciales válidas → Autenticación exitosa
- **Casos Negativos**: Credenciales inválidas → Manejo proper de errores
- **Validación UI**: Título de página, funcionalidad del botón reset
- **Multi-navegador**: Soporte para Chrome y Firefox

#### **2. Módulo de Creación de Clientes**
- **Camino Feliz**: Registro completo válido de cliente
- **Casos Negativos**:
  - Campos requeridos vacíos
  - Formatos de email inválidos
  - Direcciones de email duplicadas
  - Longitudes de PIN inválidas
  - Caracteres especiales en nombres
- **Manejo de Alertas**: Gestión de diálogos JavaScript
- **Validación de Formulario**: Saneamiento de entrada y mensajes de error

### 📈 **Estadísticas de Pruebas**
- **Archivos de Pruebas**: 6
- **Casos de Prueba**: 10 escenarios comprensivos
- **Soporte de Navegadores**: Chromium, Firefox
- **Integración CI/CD**: Ejecución nocturna automatizada y con cada push
- **Reportes**: Reportes HTML con capturas de pantalla, videos y trazas

## 🎭 ¿Por Qué Esta Arquitectura?

### **Page Object Model (POM)**
```typescript
// Separación limpia de responsabilidades
class CreateUserPage {
  async fillForm(userData: UserFormData): Promise<void> {
    // Lógica reutilizable de llenado de formulario
  }

  async submit(): Promise<void> {
    // Acción de envío centralizada
  }
}
```

**Beneficios**:
- **Mantenibilidad**: Cambios en UI solo afectan a clases de página
- **Reusabilidad**: Acciones comunes compartidas entre pruebas
- **Legibilidad**: Las pruebas se enfocan en lógica de negocio, no detalles de implementación

### **Desarrollo Guiado por Comportamiento (BDD)**
```typescript
test('Creación de cliente con datos válidos', async ({ page }) => {
  await test.step('GIVEN: Soy administrador del banco logueado', async () => {
    // Configuración de la prueba
  });

  await test.step('WHEN: Creo un nuevo cliente', async () => {
    // Acción de negocio
  });

  await test.step('THEN: El cliente debería estar registrado', async () => {
    // Validación y aserciones
  });
});
```

**Beneficios**:
- **Claridad**: Los stakeholders de negocio pueden entender el flujo de la prueba
- **Documentación**: Las pruebas sirven como documentación viva
- **Debugging**: Identificación clara de pasos cuando las pruebas fallan

### **Manejo Inteligente de Alertas**
```typescript
page.once('dialog', async dialog => {
  console.log(`Alerta capturada: ${dialog.message()}`);
  expect(dialog.message()).toEqual('Mensaje esperado');
  await dialog.accept();
  alertWasHandled = true;
});
```

**Beneficios**:
- **Fiabilidad**: Las pruebas no se cuelgan con alertas inesperadas
- **Debugging**: Mensajes de alerta registrados para solución de problemas
- **Validación**: Confirmación explícita de que las alertas fueron manejadas

## 🚀 Inicio Rápido

### **Prerrequisitos**
```bash
node -v  # Debería mostrar v18+
npm -v   # Debería mostrar v9+
```

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/sepeto/Guru99-Bank-automated-test
cd qa-automation-izertis

# Instalar dependencias
npm install

# Instalar navegadores Playwright
npx playwright install
```

### **Ejecución de Pruebas**

#### **Todas las Pruebas**
```bash
npx playwright test
```

#### **Archivos de Pruebas Específicos**
```bash
# Funcionalidad de login
npx playwright test tests/login.spec.ts

# Creación de clientes
npx playwright test tests/createUser.spec.ts

# Casos negativos
npx playwright test tests/createUserNegativeCases.spec.ts
```


#### **Navegador Específico**
```bash
npx playwright test --project=firefox
npx playwright test --project=webkit
```

#### **Modo Debug**
```bash
npx playwright test --debug
```

### **Visualización de Reportes**

Después de la ejecución de pruebas, abrir el reporte HTML:
```bash
npx playwright show-report
```

Los reportes también están disponibles automáticamente en el directorio `html-report/`.

## 📁 Estructura Profunda del Proyecto

### **Organización de Pruebas**
```
tests/
├── login.spec.ts              # Escenarios de autenticación
├── createUser.spec.ts         # Camino feliz de creación de cliente
├── createUserNegativeCases.spec.ts  # Escenarios de error
├── createUserNegativeCases2.spec.ts # Validación adicional
└── titleExists.spec.ts        # Prueba básica de humo
```

### **Page Objects**
```
pages/
├── LoginPage.ts               # Interacciones del formulario de login
├── HomePage.ts                # Navegación y menú
└── CreateUserPage.ts          # Formulario de creación de cliente
```

### **Configuración**
```typescript
// playwright.config.ts
export default defineConfig({
  use: {
    headless: false,           // Depuración visual
    screenshot: 'only-on-failure',  // Colección de evidencias en fotos
    video: 'retain-on-failure',     // Grabación de pruebas fallidas en videos
    trace: 'on-first-retry'   // Información detallada de depuración con capturas de pantalla de las acciones, mensajes de consola y trafico de red
  }
});
```

## 🔧 Guías de Desarrollo

### **Estándares de Código**
- **TypeScript**: Tipado estricto habilitado
- **ESLint**: Formato de código consistente
- **Prettier**: Estilizado de código automatizado
- **Git Hooks**: Verificaciones de calidad pre-commit

### **Mejores Prácticas de Escritura de Pruebas**
1. **Una aserción por paso de prueba** cuando sea posible
2. **Nombres de prueba descriptivos** explicando valor de negocio
3. **Page objects reutilizables** para interacciones comunes
4. **Estrategias de espera apropiadas** para evitar pruebas inestables
5. **Logging comprensivo** para depuración

### **Estrategia de Manejo de Errores**
```typescript
// Manejo elegante de estados inesperados
try {
  await userAction();
} catch (error) {
  console.log('Acción fallida:', error.message);
  await takeScreenshot();
  throw error;
}
```

## 📊 Monitoreo y Reportes

### **Pipeline CI/CD**
```yaml
# .github/workflows/playwright.yml
- Ejecución diaria a las 02:00 UTC (3:00 Madrid)
- Pruebas de navegador paralelas
- Generación automatizada de reportes
- Almacenamiento de artefactos por 7 días
```

### **Características del Reporte**
- **Reportes HTML**: Resultados interactivos de pruebas
- **Capturas de Pantalla**: Evidencia visual de estados de prueba
- **Videos**: Grabaciones de pantalla de pruebas fallidas
- **Trazas**: Línea de tiempo detallada de ejecución
- **Logs de Consola**: Captura de salida de la consola del navegador

## 🚧 Mejoras Futuras

### **📈 Dashboard de Monitoreo con Allure**
**Métricas y Analíticas Temporales**
- **Tendencias de Ejecución**: Tasa histórico de éxito/fracaso
- **Métricas de Rendimiento**: Tiempos de carga a lo largo del tiempo
- **Detección de Inestabilidad**: Pruebas con resultados inconsistentes
- **Seguimiento de Cobertura**: Evolución del porcentaje de cobertura de características
- **Estado en Tiempo Real**: Monitoreo vivo de ejecución de pruebas


### **🤝 Depuración Mejorada con IA**
**Análisis Inteligente de Logs**
- **Categorización Inteligente de Errores**: Clasificación IA de tipos de fallos
- **Reconocimiento de Patrones**: Identificación de fallos recurrentes de prueba
- **Auto-sugerencia**: Recomendar arreglos para problemas comunes
- **Consultas en Lenguaje Natural**: Hacer preguntas sobre resultados de pruebas


### **🔌 Integración de Pruebas API**
**Cobertura de Prueba Comprensiva**
- **Validación Backend**: Pruebas de respuesta API
- **Pruebas de Contrato**: Validación de esquema API
- **Pruebas de Rendimiento**: Verificación de tiempo de respuesta
- **Pruebas de Carga**: Simulación de usuarios concurrentes


### **🔄 Funcionalidades Avanzadas CI/CD**
**Pipeline Mejorado**
- **Ejecución Paralela**: Ejecutar pruebas a través de múltiples entornos
- **Integración Slack**: Notificaciones en tiempo real de pruebas
- **Disparadores de Rollback**: Rollback automático en fallos críticos
- **Promoción de Entorno**: Validación Staging → Producción

### **📱 Pruebas Multi-plataforma**
- **Pruebas Móviles**: Pruebas de navegador iOS y Android
- **Diseño Responsivo**: Pruebas de múltiples resoluciones de pantalla
- **Accesibilidad**: Validación de cumplimiento WCAG
- **Rendimiento**: Monitoreo de Core Web Vitals

## 🏆 Estado del Proyecto

**Estado**: ✅ Listo para Producción
**Versión**: 1.0.0
**Última Actualización**: 24/11/2025
**Mantenedor**: Joseba Portas Abalde: Equipo de Ingeniería QA

> **Nota**: Este proyecto demuestra prácticas profesionales de automatización QA adecuadas para entornos empresariales. La arquitectura está diseñada para escalar con el crecimiento de la aplicación y expansión del equipo.