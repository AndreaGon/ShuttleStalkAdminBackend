import Admin from './admin.entities.js';

class AdminController {
    constructor(adminService){
        this.adminService = adminService;
    }

    getAllAdmins = (_, res) => {
        this.adminService.getAllAdmins().then((value)=>{
            return res.status(200).json(value);
        });
    }

    getAdminByEmail = (req, res) => {
        const { email } = req.params;
        this.adminService.getAdminByEmail(email).then((value) => {
            return res.status(200).json(value);
        })
    }

    registerAdminAccount = (req, res) => {
        const admin = new Admin(req.body.fullname, req.body.email, req.body.password, req.body.role);
        this.adminService.registerAdminAccount(admin).then((value)=>{
            return res.status(201).send();
        });
    }

    deleteAdmin = (req, res) => {
        const { id, email } = req.params;
        return res.status(200).send(this.adminService.deleteAdmin(id, email));
    }
}

export default AdminController;