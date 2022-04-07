import { IsEmail, IsInt, IsString, Max, MaxLength, Min } from "class-validator";

export class PersonSchema {
    @IsString()
    @MaxLength(120)
    name: string;

    @IsInt()
    @Min(0)
    @Max(120)
    age: number;

    @IsString()
    @IsEmail()
    email: string;
}