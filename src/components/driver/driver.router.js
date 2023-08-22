import express from 'express';

class DriverRouter {
    constructor(driverController){
        this.driverController = driverController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-drivers').get(this.driverController.getAllDrivers);
        router.route('/get-driver/:email').get(this.driverController.getDriverByEmail);
        router.route('/register-driver').post(this.driverController.registerDriverAccount);
        router.route('/delete-driver/:id/:email').delete(this.driverController.deleteDriver);
        return router;
    }
}

export default DriverRouter;