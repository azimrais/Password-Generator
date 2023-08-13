class password {
    constructor() {
        this.pass = ""
    }
    generatePassword(len) {
        let chars = "QWERTYUIOPASDFGHJKLZXCVBNM"
        let char = "qwertyuiopasdfghjklzxcvbnm"
        let numbers = "7894561230"
        let special = "!@#$%^&*~?"

        let i = 0;
        while (i < len) {
            this.pass += chars[Math.floor(Math.random() * chars.length)]
            this.pass += char[Math.floor(Math.random() * char.length)]
            this.pass += numbers[Math.floor(Math.random() * numbers.length)]
            this.pass += special[Math.floor(Math.random() * special.length)]
            i+=4
        }
        this.pass = this.pass.substr(0,len)
        return this.pass
    }
}
let p = new password()
let inp = prompt("Enter the length of the password you waht to generate")
let m = p.generatePassword(inp)
if (inp < 3) {
    cont.innerHTML = "Yor password should be atleast 3 charactes long"
}
else {
    cont.innerHTML = m
}
