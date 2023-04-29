import sendgrid from "@sendgrid/mail";
import {NextResponse} from "next/server";

type EmailType = {
  first_name?: string,
  last_name?: string,
  email?: string,
  message?: string,
}


export async function POST(req: Request) {

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

  const data: EmailType = await req.json()

  const {first_name, last_name, email, message} = data

  //
  // } catch (err) {
  //   const errorMessage = err instanceof Error ? err.message : 'Internal server error';
  //   res.status(500).json({message: errorMessage});
  // }


  const msg = {
    to: 'cateyesmedia22@gmail.com',
    from: 'cateyesmedia22@gmail.com',
    subject: 'New Client From Website',
    html: `
    <div style="border: 1px solid black; border-radius: 10px;padding: 40px">
        <h3> Client's Name is ${first_name} ${last_name} </h3>
        <p>${message}</p>
        <strong>Email : <a href={mailto:${email}}>${email}</a> </strong>
    </div>
    `
  }

  await sendgrid.send(msg)
      .then(() => {
        return NextResponse.json({message: "Contact Email Sent Successfully"});
        // console.log('EmailType sent')
      })
      .catch((error: any) => {
        return NextResponse.json({error: "Internal Error"});
      })
}