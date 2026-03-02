// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create_userDTO';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
