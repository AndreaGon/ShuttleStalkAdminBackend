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

    deleteShuttle = (req, res) => {
        const { id } = req.params;
        return res.status(200).send(this.shuttleService.deleteShuttle(id));
    }

}

export default ShuttleController;