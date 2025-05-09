import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Gestor de Opniones Academicas API", 
            version: "3.0.0",
            description: "API para gestionar las opiniones academicas de los estudiantes",
            contact:{
                name: "Ludwin Xocoy",
                email: "lxocoy-2023020@kinal.org.gt"
            }
        },
        servers:[
            {
                url: "http://localhost:3001/blog",
            }
        ]
    },
    apis:[
        "./src/publicaciones/publicaciones.routes.js",
        "./src/comentarios/comentarios.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}