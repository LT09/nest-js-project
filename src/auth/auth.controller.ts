// Importing the Controller and Post decorators from NestJS.
// Controller is used to define a basic controller class. Post is used to handle POST requests.
import { Controller, Post } from '@nestjs/common';
// Importing AuthService, which contains the business logic for authentication processes.
import { AuthService } from './auth.service';

// The @Controller decorator is used to declare that this class is a controller with a base route 'auth'.
// All routes defined in this controller will start with '/auth'.
@Controller('auth')
export class AuthController {
  // Constructor injection of AuthService. This makes an instance of AuthService available in this controller.
  // The 'private' keyword also declares and initializes a private member in the class.
  constructor(private authService: AuthService) {}

  // @Post decorator specifies that this 'signup' method should handle POST requests made to '/auth/signup'.
  // When the route is hit, the signup method in AuthService is called.
  @Post('signup')
  signup() {
    return this.authService.signup();
  }

  // Similar to the signup method, this 'signin' method handles POST requests made to '/auth/signin'.
  // It calls the signin method in AuthService when the route is hit.
  @Post('signin')
  signin() {
    return this.authService.signin();
  }
}
