import Route from './route.entities.js';

//Messaging
class RouteController {
    constructor(routeService){
        this.routeService = routeService;
    }

    getAllRoutes = (_, res) => {
        this.routeService.getAllRoutes().then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getRouteById = (req, res) => {
        const { id } = req.params;
        this.routeService.getRouteById(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getRouteByShuttleId = (req, res) => {
        const { id } = req.params;
        this.routeService.getRouteByShuttleId(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getRouteByDriverId = (req, res) => {
        const { id } = req.params;
        this.routeService.getRouteByDriverId(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    addRoute = (req, res) => {
        const route = new Route(
            req.body.routeName, 
            req.body.driverId,
            req.body.dropoffTime,
            req.body.pickupTime,
            req.body.shuttleId,
            req.body.route,
            req.body.routeImage
        );
        return res.status(200).send(this.routeService.addRoute(route));
    }

    updateRoute = (req, res) => {
        const route = new Route(
            req.body.routeName, 
            req.body.driverId,
            req.body.dropoffTime,
            req.body.pickupTime,
            req.body.shuttleId,
            req.body.route,
            req.body.routeImage
        );
        console.log(route);
        const { id } = req.params;
        return res.status(201).send(this.routeService.updateRoute(id, route)); 
    }

    uploadRouteImage = (req, res) => {
        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;
        const fileExtension = "." + req.file.mimetype.split("/")[1];

        console.log(req.file);

        this.routeService.uploadRouteImage(fileBuffer, fileName, fileExtension).then((value)=>{
            return res.status(200).json(value); 
        });
    }

    getImageDownloadUrl = (req, res) => {
        const { imageName } = req.params;
        this.routeService.getImageDownloadUrl(imageName).then((value)=>{
            return res.status(200).json(value); 
        });
    }

    deleteRoute = (req, res) => {
        const { id } = req.params;
        return res.status(200).send(this.routeService.deleteRoute(id));
    }

}

export default RouteController;