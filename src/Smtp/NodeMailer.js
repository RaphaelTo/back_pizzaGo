import nodemailer from 'nodemailer';

export default class NodeMailer {

    constructor({host, port, secure, auth}) {
        this.host = host,
        this.port = port,
        this.secure = secure,
        this.auth = auth
    }

    createTransport() {
        nodemailer.createTransport({
            host: this.host,
            port: this.port,
            secure: this.secure,
            auth: {
                user : this.auth.email,
                pass : this.auth.password
            }
        })
    }



}