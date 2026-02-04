import { ApiProperty } from "@nestjs/swagger";

export class RootDto {
    @ApiProperty()
    type: string;
    @ApiProperty()
    id: number;
}