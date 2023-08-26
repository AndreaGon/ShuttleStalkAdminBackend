import Shuttle from './shuttle.entities.js';

//Messaging
class ShuttleController {
    constructor(shuttleService){
        this.shuttleService = shuttleService;
    }

    getAllShuttles = (_, res) => {
        this.shuttleService.getAllShuttles().then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    getShuttleById = (req, res) => {
        const { id } = req.params;
        this.shuttleService.getShuttleById(id).then((value)=>{
            return res.status(200).json(value); 
        });
        
    }

    addShuttle = (req, res) => {
        const shuttle = new Shuttle(
            req.body.routeName, 
            req.body.driverId,
            req.body.dropoffTime,
            req.body.pickupTime,
            req.body.plateNo,
            req.body.route,
            req.body.seats,
            req.body.shuttleImage
        );
        return res.status(200).send(this.shuttleService.addShuttle(shuttle));
    }

    updateShuttle = (req, res) => {
        const shuttle = new Shuttle(
            req.body.routeName, 
            req.body.driverId,
            req.body.dropoffTime,
            req.body.pickupTime,
            req.body.plateNo,
            req.body.route,
            req.body.seats,
            req.body.shuttleImage
        );
        const { id } = req.params;
        return res.status(201).send(this.shuttleService.updateShuttle(id, shuttle)); 
    }

    uploadShuttleImage = (req, res) => {
        const fileBuffer = req.file.buffer;
        const fileName = req.file.originalname;
        const fileExtension = "." + req.file.mimetype.split("/")[1];

        console.log(req.file);

        this.shuttleService.uploadShuttleImage(fileBuffer, fileName, fileExtension).then((value)=>{
            return res.status(200).json(value); 
        });
    }

    getImageDownloadUrl = (req, res) => {
        const { imageName } = req.params;
        this.shuttleService.getImageDownloadUrl(imageName).then((value)=>{
            return res.status(200).json(value); 
        });
    }

    deleteShuttle = (req, res) => {
        const { id } = req.params;
        return res.status(200).send(this.shuttleService.deleteShuttle(id));
    }

}

export default ShuttleController;