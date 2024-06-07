import z from "zod";
export const verifyValidSchema = z.object({
    code:z.string({
        message:"Verification code is required"
    }).min(6,{message:"Verification code must be 6 digit only"})
})