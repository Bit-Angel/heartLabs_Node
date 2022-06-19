const {Router} = require('express');
const router = Router();
const nodemailer = require('nodemailer');

router.post('/send-email',(req,res)=>{
    const {email,mensaje} = req.body;

    contentHTML = `
        <h1>Mensaje de Contacto</h1>
        <ul>
            <li>Correo: ${email}</li>
        </ul>
        <p>${mensaje}</p>
    `;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, 
        auth: {
          user: 'brayanvazq1608@gmail.com', // generated ethereal user
          pass: 'ndcudewzopqtrasl', // generated ethereal password
        },
        tls:{
            rejectUnauthorized: false
        }
      });

      const info =  transporter.sendMail({
        from: "'Heart Labs' <brayanvazq1608@gmail.com>",
        to: 'brayanvazq1608@gmail.com',
        subject:'Contacto Heart Labs',
        html: contentHTML
      });

      console.log('Message sent');

    res.send('recived');
});

router.get('/:id/:nombre/:precio/:fecha/:name/:lastname',(req,res)=>{
    const data ={
        id:req.params.id, 
        nombre:req.params.nombre, 
        precio:req.params.precio, 
        fecha:req.params.fecha,
        name:req.params.name,
        lastname:req.params.lastname,
    }
    res.render('index', {datos: data});
});

module.exports = router;