import Admin from './admin.entities.js';

class AdminController {
    constructor(adminService){
        this.adminService = adminService;
    }

    getAdminByEmail = (req, res) => {
        const { email } = req.params;
        this.adminService.getAdminByEmail(email).then((value) => {
            return res.status(200).json(value);
        })
    }
}

export default AdminController;