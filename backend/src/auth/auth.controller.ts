import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

    /**
   * TODO: Implement the POST /auth/login endpoint.
   *
   * Requirements:
   * - Use the correct HTTP verb decorator and route.
   * - Accept a validated `LoginDto` from the request body.
   * - Delegate to `AuthService.login()` and return its result.
   * - On success the status code must be 201 (NestJS default for POST).
   */

  @Post('login')
  // HttpStatus.CREATED corresponds to 201
  // The request was successful, and a new resource was created.
  @HttpCode(HttpStatus.CREATED) // 201
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
