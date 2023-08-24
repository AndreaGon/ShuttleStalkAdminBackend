class Shuttle {
    constructor(
        routeName,
        driverId,
        dropoffTime,
        pickupTime,
        plateNo,
        route,
        seats,
        shuttleImage
    ){
        this.routeName = routeName;
        this.driverId = driverId;
        this.dropoffTime = dropoffTime;
        this.pickupTime = pickupTime;
        this.plateNo = plateNo;
        this.route = route;
        this.seats = seats;
        this.shuttleImage = shuttleImage;
    }

    toJSON() {
        return {
            routeName: this.routeName,
            driverId: this.driverId,
            dropoffTime: this.dropoffTime,
            pickupTime: this.pickupTime,
            plateNo: this.plateNo,
            route: this.route,
            seats: this.seats,
            shuttleImage: this.shuttleImage
        }
    }

}

export default Shuttle;