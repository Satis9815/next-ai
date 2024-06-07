import z from "zod";

export const signInValidShema = z.object({
    username:z.string(),
    password:z.string()

})