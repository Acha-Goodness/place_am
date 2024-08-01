import Waitlist from "@models/waitlist";
import { connectToDB } from "@utils/database";


export const POST = async (req, res) => {
    const { email } = await req.json();

    try{
        await connectToDB();
        const newEmail = new Waitlist({
            email: email
        });

        await newEmail.save();

        return new Response.json({
            status:201,
            msg:"You have been added to the waiting list"
        })
    }catch(error){
        return new Response.json({
            status:500,
            msg:"Failed to add you to the waiting list, TRY AGAIN LATER"
        })
    }
};

