class Driver {
    constructor(fullname, icNumber, email, password){
        this.fullname = fullname;
        this.icNumber = icNumber;
        this.email = email;
        this.password = password;
                
    }

    toJSON() {
        return {
            fullname: this.fullname,
            icNumber: this.icNumber,
            email: this.email,
            password: this.password
        }
    }

}

export default Driver;