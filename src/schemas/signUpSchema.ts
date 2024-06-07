import z from "zod";
export const userNameValidSchema = z.string().min(5,{message:"Username must be at laest 5 character"}).max(20,{message:"Username must be less than 20 character"});


const signupValideSchema = z.object({
    username:userNameValidSchema,
    email:z.string().email({ message: "Invalid email address" }),
    password:z.string()
});

export default signupValideSchema;