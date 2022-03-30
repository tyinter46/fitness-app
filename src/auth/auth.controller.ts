import {Controller, Post} from '@nestjs/common';
import { AuthService } from './auth.service';



@Controller('auth')
export class AuthController {
constructor ( private authService : AuthService) {}

@Post('signup')
signup(){
return "i have signed up"
}

@Post('signin')
signin(){
  return "i have signed in"
}

@Post('signout')
signout(){
    
}
}