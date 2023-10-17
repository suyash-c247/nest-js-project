import { Controller, Get } from "@nestjs/common";

@Controller('/user')
export class userController {
   
    @Get('/profile')
    getUserProfile(){
       return "successFully get profile"
    }
}