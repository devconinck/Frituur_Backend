import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

const configuration = require('config');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'verbose', 'log'],
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle("Frituur d'Aa API")
    .setDescription('API Description')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configuration.get('port');

  app.enableCors({
    origin: [
      'https://2324-frontendweb-quinten-deconinck.vercel.app',
      'http://localhost:3000',
    ],
  });
  await app.listen(port);
}
bootstrap();
