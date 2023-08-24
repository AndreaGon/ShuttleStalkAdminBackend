import express from 'express';

class ShuttleRouter {
    constructor(shuttleController){
        this.shuttleController = shuttleController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-shuttles').get(this.shuttleController.getAllShuttles);
        router.route('/get-shuttle/:id').get(this.shuttleController.getShuttleById);
        router.route('/delete-shuttle/:id').delete(this.shuttleController.deleteShuttle);
        return router;
    }
}

export default ShuttleRouter;