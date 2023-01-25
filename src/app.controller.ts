// import { Controller, Get } from '@nestjs/common';
// import { AppService } from './app.service';

// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get('/')
//   async getHello(): Promise<string> {
//     return this.appService.getHello();
//   }
// }


import {Controller,Get,Post,Body,Param} from '@nestjs/common'
import { watchlistservice } from './app.service'

@Controller('tokens')
export class WatchlistController{
  constructor(private readonly wls:watchlistservice){}
  @Get()
  getData()
  {
        return this.wls.get_tokens()
  }

  @Post()
  addtoken(
  
      @Body('symbol')symbol:string,
      @Body('name')name:string
        
  )
  {
        const message=this.wls.addData(symbol,name)
        return {"message":message}
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.wls.getByID(prodId)
  }

}

