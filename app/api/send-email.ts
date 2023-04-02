import mailgun from 'mailgun-js'

const apiKey = process.env.mailgunApiKey ?? ''
const domain = process.env.mailgunDomain ?? ''

const mg = mailgun({ apiKey, domain })
const data = {
  from: 'Jonathan Mann <jonathan@communionwithlove.com>',
  to: 'jdmann84@gmail.com',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomness!',
}
mg.messages().send(data, function (error, body) {
  if (error) console.error(error)
  console.log(body)
})
