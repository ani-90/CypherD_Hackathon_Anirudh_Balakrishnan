// import { SharedModule } from './shared';
// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [SharedModule],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WatchlistController } from './app.controller';
import { watchlistservice } from './app.service';
@Module({
  imports: [
    HttpModule,
  ],
  controllers:[WatchlistController],
  providers:[watchlistservice]
})
export class AppModule {}