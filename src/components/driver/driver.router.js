import express from 'express';

class DriverRouter {
    constructor(driverController){
        this.driverController = driverController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-drivers').get(this.driverController.getAllDrivers);
        router.route('/register-driver').post(this.driverController.registerDriverAccount);
        return router;
    }
}

export default DriverRouter;