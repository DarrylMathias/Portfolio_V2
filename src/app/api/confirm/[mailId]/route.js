import connect from "@/config/mongoose"
import userModel from "@/models/user"

export async function GET(request, { params }) {
    try {
        await connect()
        const { mailId } = await params

        if (!mailId) {
            return new Response(`
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px;">
                    <h1 style="color: #dc3545;">Invalid Request</h1>
                    <p style="color: #6c757d;">No user ID provided.</p>
                </div>
            `, {
                status: 400,
                headers: { 'Content-Type': 'text/html' }
            })
        }

        const confirmUser = await userModel.findOneAndUpdate({
            _id: mailId
        },
            {
                hasConfirmed: true
            })

        if (!confirmUser) {
            return new Response(`
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px;">
                    <h1 style="color: #dc3545;">User Not Found</h1>
                    <p style="color: #6c757d;">The confirmation link is invalid or expired.</p>
                </div>
            `, {
                status: 404,
                headers: { 'Content-Type': 'text/html' }
            })
        }

        return new Response(`
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px;">
               <h1 style="color: #28a745; margin-bottom: 20px;">Email Successfully Confirmed!</h1>
               <p style="font-size: 18px; color: #6c757d; margin-bottom: 30px;">
                   Your email has been verified and you are now subscribed to Daily Spark.
               </p>
               <p style="color: #6c757d;">
                   Thank you for confirming your subscription. You'll start receiving our daily content soon!
               </p>
               <div style="margin-top: 40px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #28a745;">
                   <p style="margin: 0; font-style: italic; color: #495057;">
                       "Welcome to Daily Spark! Your journey begins now." 
                   </p>
               </div>
            </div>
        `, {
            status: 200,
            headers: { 'Content-Type': 'text/html' }
        })
    } catch (err) {
        console.log(`Error : ${err.message}`);
        return new Response(`
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 50px auto; text-align: center; padding: 40px; background: #f8f9fa; border-radius: 10px;">
                <h1 style="color: #dc3545;">Error</h1>
                <p style="color: #6c757d;">Something went wrong. Please try again later.</p>
            </div>
        `, {
            status: 500,
            headers: { 'Content-Type': 'text/html' }
        })
    }
}