import express from 'express';

class AdminRouter {
    constructor(adminController){
        this.adminController = adminController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-admin/:email').get(this.adminController.getAdminByEmail);
        return router;
    }

}

export default AdminRouter;