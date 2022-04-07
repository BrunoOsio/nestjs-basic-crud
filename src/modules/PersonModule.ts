import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonController } from "src/controllers/PersonController";
import { Person } from "src/models/Person";

@Module({
    imports: [TypeOrmModule.forFeature([
        Person
    ])],

    controllers: [PersonController],
})
export class PersonModule {

}