import { ApiProperty } from "@nestjs/swagger";

export class SublibDto {
    @ApiProperty()
    type: string;
    @ApiProperty()
    id: number;
}
