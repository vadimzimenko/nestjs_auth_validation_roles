import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length, IsEmail } from "class-validator";

export class CreateUserDto {
  @ApiProperty({
    example: "user@mail.com",
    description: "Электронная почта пользователя",
  })
  @IsString({ message: "Должно быть строкой" })
  @IsEmail({}, { message: "Некорректный email" })
  readonly email: string;
  @ApiProperty({ example: "ABCabc123", description: "Пароль пользователя" })
  @IsString({ message: "Должно быть строкой" })
  @Length(4, 16, {
    message: "Пароль должен быть не короче 4 символов, но не длиннее 16",
  })
  readonly password: string;
}
