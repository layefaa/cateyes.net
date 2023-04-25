import sendgrid from "@sendgrid/mail";
import {NextResponse} from "next/server";

type Email = {
  first_name?: string,
  last_name?: string,
  email?: string,
  message?: string,
}


export async function POST(req: Request) {

  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string)

  const data: Email = await req.json()

  const {first_name, last_name, email, message} = data

  //   return res.status(200).json({message: "Contact Email Sent Successfully"});
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

  try {
    await sendgrid.send(msg)
        .then(() => {
          return 'success'
          // console.log('Email sent')
        })
        .catch((error: any) => {
          return error
        })
  } catch (error) {
    throw new Error('Email could not be sent, Please try again later');
  }

  return NextResponse.json({first_name, last_name, email, message})
}