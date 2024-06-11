import { resend } from "@/lib/resend";
import { ApiResponse } from "../../types/ApiResponse";
import VerificationEmail from "../../emails/VerificationEmail";

export async function sendVerificationEmail(username:string,email:string,verifyCode:string):Promise<ApiResponse> 
{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Verify your email',
            react: VerificationEmail({username:username,otp:verifyCode}),
          });

          return {
            success:true,
            message:"Verification mail send successfully."
          }
        
    } catch (error) {
        console.log("Error sending verification email",error);
        return {
            success:false,
            message:"Failed to send verification email"
        }
        
    }
    
}