import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
      origin: [
        'http://localhost:3000', // Your local frontend
        // 'https://your-frontend-domain.vercel.app' // Your future production frontend
      ],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
