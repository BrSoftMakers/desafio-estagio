import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors'; // Importe o pacote 'cors' aqui

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: cors.CorsOptions = {
    origin: '*', // ou coloque a origem específica que deseja permitir
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: 'http://localhost:3000/', // Cabeçalhos permitidos
  };

  app.use(cors(corsOptions)); // Aplicar configuração CORS aqui

  await app.listen(4000);
}

bootstrap();
