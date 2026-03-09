import {
  TodoCreateSchema,
  TodoSchema,
  TodoUpdateSchema,
} from "@boilerplate-typescript-todo/types";
import { createZodDto } from "nestjs-zod";

export class TodoDto extends createZodDto(TodoSchema) {}

export class TodoCreateDto extends createZodDto(TodoCreateSchema) {}

export class TodoUpdateDto extends createZodDto(TodoUpdateSchema) {}
