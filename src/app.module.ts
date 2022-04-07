import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonModule } from './modules/PersonModule';

@Module({
  imports: [
    PersonModule, 
    TypeOrmModule.forRoot()
  ],
})
export class AppModule {}

