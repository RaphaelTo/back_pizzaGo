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
        let futurHTML = "";
        if(html === "mustActivate") futurHTML = this.templateActivateYourAccount();

        return  {
            from: `"Pizza GO 🍕" <${this.auth.email}>`, // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            html: futurHTML, // html body
        }
    }

    templateActivateYourAccount() {
        return `
            <div>
                <h1>Bienvenue sur Pizza GO </h1>
                <p>Avant d'utiliser votre compte veuillez l'activer en cliquant <a href="">ici</a></p>
            </div>
        `
    } 

}