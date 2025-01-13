// Importing the Module decorator from NestJS's common functionality.
import { Module } from '@nestjs/common';
// Importing AuthController, which will handle incoming requests related to authentication.
import { AuthController } from './auth.controller';
// Importing AuthService, which will contain the business logic for authentication.
import { AuthService } from './auth.service';

// The @Module decorator is used to define a class as a NestJS module, organizing related functionalities.
@Module({
  // Registering AuthController to handle requests. Controllers define routes and handle HTTP requests.
  controllers: [AuthController],
  // Registering AuthService as a provider. Providers can inject dependencies; they are used to abstract logic and state away from controllers.
  providers: [AuthService],
})
export class AuthModule {} // Defining the AuthModule class, which bundles the authentication features.
