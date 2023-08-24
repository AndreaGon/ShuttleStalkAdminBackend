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

}

export default ShuttleController;