import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return {
      message: 'I am signup test',
    };
  }

  signin() {
    return {
      message: 'I am signin test',
    };
  }
}
