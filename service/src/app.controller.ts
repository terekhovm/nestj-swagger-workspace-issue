import { Controller, Get } from "@nestjs/common";
import { RootDto } from "@workspace-issue/common";
import { SublibDto } from "@workspace-issue/common/sublib";
import { LocalDto } from "./local.dto";

@Controller()
export class AppController {
    @Get("root")
    getRoot(): RootDto {
        return { type: RootDto.name, id: 1 };
    }

    @Get("sublib")
    getSublib(): SublibDto {
        return { type: SublibDto.name, id: 2 };
    }

    @Get("local")
    getLocal(): LocalDto {
        return { type: LocalDto.name, id: 3 };
    }
}
