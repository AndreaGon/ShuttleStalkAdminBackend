class Admin {
    constructor(fullname, email, password, role){
        this.fullname = fullname;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    toJSON() {
        return {
            fullname: this.fullname,
            email: this.email,
            password: this.password,
            role: this.role
        }
    }
}

export default Admin;