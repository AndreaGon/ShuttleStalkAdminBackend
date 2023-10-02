class Admin {
    constructor(email, password, role){
        this.email = email;
        this.password = password;
        this.role = role;
    }

    toJSON() {
        return {
            email: this.email,
            password: this.password,
            role: this.role
        }
    }
}

export default Admin;