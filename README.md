# Proyecto: Gestión de Tareas

##Descripción
Aplicación web sencilla para gestionar tareas, que permite a los usuarios crear, ver y eliminar tareas.
Backend: Desarrollado con Java 11 y Spring Boot MVC. Proporciona una API REST para gestionar tareas.
Frontend: Desarrollado con HTML, CSS y JavaScript, comunicándose con el backend a través de la API REST.

###Requisitos Generales:
Java 11 (para el backend).
Maven (para compilar el backend).
Navegador web moderno (para el frontend).
Git (opcional, para clonar el repositorio).

####Estructura del Proyecto
project-root/
├── backend/                      # Carpeta del backend (API REST con Spring Boot)
│   ├── src/                      # Código fuente del backend
│   ├── pom.xml                   # Configuración de dependencias del backend
│   └── README.md                 # Instrucciones específicas del backend
├── frontend/                     # Carpeta del frontend (HTML, CSS, JS)
│   ├── tasks.html                # Página principal del frontend
│   ├── js/                       # Archivos JavaScript
│   ├── css/                      # Archivos CSS
│   └── README.md                 # Instrucciones específicas del frontend
└── README.md                     # Instrucciones generales del proyecto

#####Instalación
1. Clonar el Repositorio:git clone <URL-del-repositorio> cd project-root
2. Configurar el Backend
#Navegar a la carpeta del backend:cd backend
##Verificar JDK: Asegúrate de tener Java 11 instalado:java -version
###Compilar el proyecto con Maven:mvn clean install
####Iniciar el servidor:mvn spring-boot:run. El servidor estará disponible en http://localhost:8080/api.
3. Configurar el Frontend
#Navegar a la carpeta del frontend:cd frontend
##Abrir el archivo tasks.html en tu navegador
###Asegúrate de que el backend esté corriendo para que el frontend pueda comunicarse con la API REST.

####Pruebas
Backend:
Ejecutar pruebas unitarias:

bash
Copiar código
cd backend
mvn test
Endpoints disponibles (ejemplo):

GET /api/tasks: Obtiene todas las tareas.
POST /api/tasks: Agrega una nueva tarea.
DELETE /api/tasks/{id}: Elimina una tarea.

Frontend:
Valida que el frontend se comunica correctamente con el backend.
Asegúrate de que el frontend maneje correctamente mensajes de error si el backend no está disponible.

######Dependencias Principales
Backend:
Spring Boot Starter Web: Desarrollo de API REST.
Spring Boot Starter Data JPA: Persistencia de datos.
H2 Database: Base de datos en memoria.
Maven: Gestión de dependencias.
Frontend:
Bootstrap: Estilización y diseño responsivo.
jQuery: Manejo de eventos y llamadas AJAX.
