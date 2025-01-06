import { Controller, Get } from '@nestjs/common';

@Controller('data')
export class DataController {

    @Get()
    getNavbar() {
        return {
            "List":{
                "Item1": {
                    "name": "Home",
                    "link": "/main"
                },
                "Item2": {
                    "name": "About",
                    "link": "/burq"
                },
                "Item3": {
                    "name": "Contact",
                    "link": "/burq"
                }
            },
            "Button":{
                "name": "Back to Burq",
                "link": "/burq"
            }
        };
    }
}
