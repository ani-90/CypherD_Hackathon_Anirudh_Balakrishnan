


import {Controller,Get,Post,Body,Param,Delete} from '@nestjs/common'
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

  
  @Delete(':id')
  removeProduct(@Param('id') prodId: string) {
      return this.wls.deleteItem(prodId);
      

}
}
