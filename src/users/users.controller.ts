import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  findAll() {
    return [{ id: 1, name: 'Lili' }];
  }
  @Get(':id')
  findById(@Param('id') id:string) {
    return { id };
  }
  @Post()
  Create(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return body;
  }
  @Put(':id')
  Update(@Param('id') id: string, @Body() body) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return { id, ...body };
  }
  @Delete(':id')
  Delete(@Param('id') id: string){
    return { id };
  }
}

}
