import {transporter} from "@/app/api/mail/nodemailer";

export async function POST(req: Request) {
  // const body = await req.json()
  // console.log(body)
  // return new Response('ok')
  console.log('here')
  const res = await req.json()
  console.log(res)

  try {
    console.log(transporter)
    await transporter.sendMail({
      to: 'cateyesmedia22@gmail.com',
      from: 'cateyesmedia22@gmail.com',
      subject: 'Test',
      text: 'Trying one',
      html: '<p>Test</p>'
    })
  } catch (err) {
    console.log(err)
  }

}