// Importing NestFactory, which is a core part of NestJS used for creating application instances.
import { NestFactory } from '@nestjs/core';
// Importing AppModule, the root module of the application, which organizes all the application features.
import { AppModule } from './app.module';

// Defining an asynchronous function called 'bootstrap' to initialize and start the server.
async function bootstrap() {
  // Using NestFactory to create an instance of the application based on AppModule.
  // This setup process includes setting up the entire dependency graph of modules and providers.
  const app = await NestFactory.create(AppModule);

  // Telling the created app instance to listen on port 3333.
  // This starts the server and makes it listen for incoming requests on this port.
  await app.listen(3333);
}

// Calling the bootstrap function to execute the initialization and start the server.
bootstrap();
