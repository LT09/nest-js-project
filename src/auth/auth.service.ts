// Importing the Injectable decorator from NestJS.
// Injectable marks the class as a provider that can be injected into other classes, like controllers.
import { Injectable } from '@nestjs/common';

// The @Injectable decorator declares that AuthService can be injected into other components
// like controllers, making its methods accessible wherever it's imported.
@Injectable({})
export class AuthService {
  // The signup method simulates a signup operation and returns a simple object with a message.
  signup() {
    return {
      message: 'I am signup test', // This could be replaced with actual signup logic.
    };
  }

  // The signin method simulates a signin operation and returns a simple object with a message.
  signin() {
    return {
      message: 'I am signin test', // This could be replaced with actual signin logic.
    };
  }
}
