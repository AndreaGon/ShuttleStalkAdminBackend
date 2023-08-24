import express from 'express';

class ShuttleRouter {
    constructor(shuttleController){
        this.shuttleController = shuttleController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-shuttles').get(this.shuttleController.getAllShuttles);
        return router;
    }
}

export default ShuttleRouter;