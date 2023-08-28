class Route {
    constructor(
        routeName,
        driverId,
        dropoffTime,
        pickupTime,
        shuttleId,
        route,
        routeImage
    ){
        this.routeName = routeName;
        this.driverId = driverId;
        this.dropoffTime = dropoffTime;
        this.pickupTime = pickupTime;
        this.route = route;
        this.shuttleId = shuttleId;
        this.routeImage = routeImage;
    }

    toJSON() {
        return {
            routeName: this.routeName,
            driverId: this.driverId,
            shuttleId: this.shuttleId,
            dropoffTime: this.dropoffTime,
            pickupTime: this.pickupTime,
            route: this.route,
            routeImage: this.routeImage
        }
    }

}

export default Route;