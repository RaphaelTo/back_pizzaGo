import nodemailer from 'nodemailer';

export default class NodeMailer {

    constructor({host, port, secure, auth}) {
        this.host = host,
        this.port = port,
        this.secure = secure,
        this.auth = auth
    }

    createTransport() {
        return nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: {
                user : this.auth.email,
                pass : this.auth.password
            }
        })
    }

    modelMailDefault({to, subject, html}) {

        return  {
            from: `"Pizza GO 🍕" <${this.auth.user}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: "<b>Hello world?</b>", // html body
        }
    }

}