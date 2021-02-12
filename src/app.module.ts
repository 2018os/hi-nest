import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

// 데코레이터는 클래스에 메소드를 추가 시켜줌
// module is part of Application
// like django's app

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  // controllers is get url & exec function
  // like express.router
  providers: [],
  // providers (services) is business logic
})
export class AppModule {}
