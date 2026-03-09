import { AffectedResponseSchema } from "@boilerplate-typescript/types";
import { createZodDto } from "nestjs-zod";

export class AffectedResponseDto extends createZodDto(AffectedResponseSchema) {}
