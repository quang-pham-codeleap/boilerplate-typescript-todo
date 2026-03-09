import { AffectedResponseSchema } from "@boilerplate-typescript-todo/types";
import { createZodDto } from "nestjs-zod";

export class AffectedResponseDto extends createZodDto(AffectedResponseSchema) {}
