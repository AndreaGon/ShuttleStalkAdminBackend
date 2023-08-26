import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

class ShuttleRouter {
    constructor(shuttleController){
        this.shuttleController = shuttleController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-shuttles').get(this.shuttleController.getAllShuttles);
        router.route('/get-shuttle/:id').get(this.shuttleController.getShuttleById);
        router.route('/get-shuttle-image/:image').get(this.shuttleController.getImageDownloadUrl);
        router.route('/add-shuttle').post(this.shuttleController.addShuttle);
        router.route('/upload-shuttle-image').post(upload.single('image'), this.shuttleController.uploadShuttleImage);
        router.route('/update-shuttle/:id').put(this.shuttleController.updateShuttle);
        router.route('/delete-shuttle/:id').delete(this.shuttleController.deleteShuttle);
        return router;
    }
}

export default ShuttleRouter;