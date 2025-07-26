import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // <-- Step 1: Import ValidationPipe

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Step 3: Add this line to enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Automatically remove properties that are not in the DTO
      forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are present
      transform: true, // Automatically transform payloads to be objects typed according to their DTO classes
    }),
  );

  app.enableCors({
    origin: [
      'http://localhost:3000', // Your local frontend
      'http://localhost:3001', // Your local frontend (alternative port)
      'https://fahrschulfinder-frontend.vercel.app', // Your production frontend (if deployed)
      'https://fahrschulfinder-frontend.onrender.com', // Your production frontend (if deployed)
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
