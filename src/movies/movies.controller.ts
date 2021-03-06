import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
// this is entry point
// localhost:3000/movies
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  // movies.module.ts 의 providers 에 MoviesService 를 명시해서
  // controller 에 MoviesService 를 주입 해줌
  // controller 에서는 타입만 정의해도 가능함
  // dependency injection

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(
    @Param('id')
    movieId: number,
  ): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete(':id')
  delete(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  // patch is update part of resource
  // put is update all resource
  @Patch(':id')
  update(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
