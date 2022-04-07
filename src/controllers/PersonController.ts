import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Person } from "src/models/Person";
import { PersonSchema } from "src/schemas/PersonSchema";

@Controller("/person")
export class PersonController {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    @Post("/create")
    public async create(
        @Body() body: PersonSchema
        ): Promise<Person> {

        return await this.model.save(body);
    }

    @Get(":id")
    public async findOne(
        @Param("id", ParseIntPipe) id: number
        ): Promise<Person> {

        try {
            const person = await this.model.findOne({ where: { id } });

            return person;

        } catch (error) {
            throw new NotFoundException(`Could not find person with id ${id}`);
        }
    }

    @Get()
    public async findAll(): Promise<Person[]> {
        return await this.model.find();
    }

    @Put("update/:id")
    public async update(
        @Param("id", ParseIntPipe) id: number, 
        @Body() body: PersonSchema
        ): Promise<Person> {

        try {
            await this.model.update({ id }, body);

            return await this.model.findOne({ where: { id } });

        } catch (error) {
            throw new NotFoundException(`Could not update person with id ${id}`);
        }
    }

    @Delete("/delete/:id")
    public async delete(
        @Param("id", ParseIntPipe) id: number
        ): Promise<string> {
        
        const isPersonExist = await this.model.findOne({ where: { id } });

        if(!isPersonExist) throw new NotFoundException(`Could not find person with id ${id}`);

        await this.model.delete({ id });

        return `The person id ${id} was deleted`;
    }
}