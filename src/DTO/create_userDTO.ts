import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDTO {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsNotEmpty({ message: 'le nom est requis' })
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(3, { message: 'le nom doit avoir au mons 3 caracteres' })
  name: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @IsEmail({}, { message: 'EMail pas valide' })
  email: string;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  @MinLength(8, { message: 'le mot de passe trop court' })
  password: string;
}
