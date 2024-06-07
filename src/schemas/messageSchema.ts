import z from "zod";

export const messageValidSchema = z.object({
    content:z.string()
})