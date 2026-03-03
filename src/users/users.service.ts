import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Alice', email: 'alicehdygu@gmail.com' },
    { id: 2, name: 'Abalo', email: 'abalohdygu@gmail.com' },
  ];
  findAll() {
    return this.users;
  }
  findOne(id: number) {
    return this.users.find((u) => u.id == id);
  }
  create(user: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const newUser = { id: this.users.length + 1, ...user };
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    this.users.push(newUser);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return newUser;
  }
  update(id: number, user: any) {
    const index = this.users.findIndex((u) => u.id == id);
    if (index !== -1) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.users[index] = { ...this.users[index], ...user };
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return user;
    }
    return null;
  }
  remove(id: number) {
    const index = this.users.findIndex((u) => u.id == id);
    if (index !== -1) {
      this.users.splice(index, 1);
      return { deleted: true };
    }
    return { deleted: false };
  }
}
