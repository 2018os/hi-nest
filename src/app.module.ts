import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

// 데코레이터는 클래스에 메소드를 추가 시켜줌
// module is part of Application
// like django's app

@Module({
  imports: [],
  controllers: [MoviesController],
  // controllers is get url & exec function
  // like express.router
  providers: [MoviesService],
  // providers (services) is business logic
})
export class AppModule {}
