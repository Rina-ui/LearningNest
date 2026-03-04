import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDTO } from './DTO/create_userDTO';

@Injectable
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(createUserDTO: CreateUserDTO){
    await bcrypt.hash(createUserDTO.password, 10);
  }
}