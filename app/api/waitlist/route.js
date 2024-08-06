import { connectToDB } from "@utils/database";
import Waitlist from "@models/waitlist";


export const POST = async (req) => {
    const { email } = await req.json();
    
    try{
        await connectToDB();
        const newEmail = new Waitlist({
            email: email
        });
        
        newEmail.save();

        return new Response({
            status:201,
            msg:"You have been added to the waiting list"
        })
    }catch(error){
        return new Response({
            status:500,
            msg:"Failed to add you to the waiting list, TRY AGAIN LATER"
        })
    }
};

