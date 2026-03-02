import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO } from '../DTO/create_userDTO';
import { UpdateUserDTO } from '../DTO/update_userDTO';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDTO) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateuserDto: UpdateUserDTO) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.usersService.update(+id, updateuserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
