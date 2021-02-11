import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// nest start main.ts
async function bootstrap() {
  // AppModule is root module
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
