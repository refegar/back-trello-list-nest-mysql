```ts
Solución en un proyecto NestJS

    Instalar el paquete CORS Asegúrate de tener instalado el middleware para habilitar CORS en NestJS:

npm install @nestjs/platform-express

Habilitar CORS en la aplicación principal Edita tu archivo principal main.ts para habilitar CORS globalmente:

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permite todos los orígenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });

  await app.listen(3000);
}
bootstrap();

    Nota: En producción, reemplaza origin: '*' con una lista específica de dominios permitidos para mayor seguridad.

Configurar el módulo de CORS (opcional) Si necesitas configuraciones más específicas, puedes usar el middleware de CORS en el módulo de tu aplicación. Por ejemplo:

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import * as cors from 'cors';

@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        cors({
          origin: 'http://example.com', // Cambia por tu dominio frontend
          methods: ['GET', 'POST', 'PUT', 'DELETE'],
          allowedHeaders: ['Content-Type', 'Authorization'],
        }),
      )
      .forRoutes('*');
  }
}

Verificar rutas y estado HTTP El error Código de estado: 404 indica que el endpoint /auth/signup no está correctamente configurado en el backend o que la solicitud no llega a él. Verifica:

    Que el controlador de NestJS maneje la ruta correctamente.
    Que estás enviando el método HTTP correcto (POST, en este caso).
    Que los parámetros requeridos (si los hay) se estén enviando en el cuerpo de la solicitud.

Ejemplo de un controlador para /auth/signup:

import { Controller, Post, Body } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  async signup(@Body() signupDto: any) {
    return { message: 'User registered successfully', data: signupDto };
  }
}

Probar la configuración Una vez realizados los cambios:

    Reinicia el servidor NestJS.
    Asegúrate de que el cliente está enviando correctamente las solicitudes al endpoint.
    Si usas herramientas como Postman o un navegador, verifica los encabezados en las solicitudes.
```