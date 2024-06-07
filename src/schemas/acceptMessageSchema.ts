import z from "zod";

export const acceptMessageValidSchema = z.object({
    isAcceptingMessage:z.boolean()

});