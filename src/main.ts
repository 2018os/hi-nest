import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// nest start main.ts
async function bootstrap() {
  // AppModule is root module
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // request를 없앰
      forbidNonWhitelisted: true,
      // return error
      transform: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
