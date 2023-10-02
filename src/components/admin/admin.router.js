import express from 'express';

class AdminRouter {
    constructor(adminController){
        this.adminController = adminController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-admins').get(this.adminController.getAllAdmins);
        router.route('/get-admin/:email').get(this.adminController.getAdminByEmail);
        router.route('/register-admin').post(this.adminController.registerAdminAccount);
        router.route('/delete-admin/:id/:email').delete(this.adminController.deleteAdmin);
        return router;
    }

}

export default AdminRouter;