// const express = require('express')
// const nodemailer = require('nodemailer')
// require('dotenv').config()



// const PORT = process.env.PORT || 5000


// // Middleware
// app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send('Welcome to my form.')
// })

// app.post('/api/form', (req, res) => {
//   let data = req.body
//   let smtpTransport = nodemailer.createTransport({
//     service: 'Gmail',
//     port: 465,
//     auth: {
//       user: 'sweeneytech914@gmail.com',
//       password: process.env.EMAIL_PASSWORD
//     }
//   })

//   let mailOptions = {
//     from: data.email,
//     to: 'sweeneytech914@gmail.com',
//     subject: `WEBSITE EMAIL from ${data.name}`,
//     body: `
//       <h3>Email Information:</h3>
//       <br>
//       <ul>
//       <li>Name: ${data.name}</li>
//       <li>Email: ${data.email}</li>
//       </ul>
//       <br><br>
//       <h3>Message:</h3>
//       <p>${data.message}</p>
//     `
//   }

//   smtpTransport.sendMail(mailOptions, (error, res) => {
//     if (error) {
//       res.send(error)
//     } else {
//       res.send('Success!')
//     }
//   })

//   smtpTransport.close()

// })



// app.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`)
// })