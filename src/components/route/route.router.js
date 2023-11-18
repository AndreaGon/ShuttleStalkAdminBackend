import express from 'express';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

class RouteRouter {
    constructor(routeController){
        this.routeController = routeController;
    }

    getRouter(){
        const router = express.Router();
        router.route('/get-routes').get(this.routeController.getAllRoutes);
        router.route('/get-route/:id').get(this.routeController.getRouteById);
        router.route('/get-route-by-shuttle/:id').get(this.routeController.getRouteByShuttleId);
        router.route('/get-route-by-driver/:id').get(this.routeController.getRouteByDriverId);
        router.route('/get-route-image/:image').get(this.routeController.getImageDownloadUrl);
        router.route('/add-route').post(this.routeController.addRoute);
        router.route('/upload-route-image').post(upload.single('image'), this.routeController.uploadRouteImage);
        router.route('/update-route/:id').put(this.routeController.updateRoute);
        router.route('/delete-route/:id').delete(this.routeController.deleteRoute);
        return router;
    }
}

export default RouteRouter;