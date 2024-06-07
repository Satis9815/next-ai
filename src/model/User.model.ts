import mongoose ,{Schema,Document} from "mongoose";
export interface Message extends Document{
    content:string,
    createdAt:Date;
}

const messageShema:Schema<Message> =new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }

});

export interface User extends Document{
    username:string;
    email:string;
    password:string;
    verifyCode:string;
    verifyCodeExpiry:Date;
    isVerified:boolean;
    isAcceptingMessage:boolean;
    messages:Message[]
};

const UserSchema:Schema<User> =new Schema({
    username:{
        type:String,
        unique:true,
        trim:true,
        required:[true,"User name is required"]
    },
    email:{
        type:String,
        unique:true,
        required:[true,"Email is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    verifyCode:{
        type:String,
    },
    verifyCodeExpiry:{
        type:Date
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAcceptingMessage:{
        type:Boolean,
        default:false
    },
    messages:[messageShema]
});

const userModel = (mongoose.models.User as mongoose.Model<User>) || mongoose.model<User>("User",UserSchema);

export default userModel