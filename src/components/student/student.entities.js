class Student {
    constructor(no_show){
        this.no_show = no_show;
    }

    toJSON() {
        return {
            no_show: this.no_show
        }
    }

}

export default Student;