class Announcement {
    constructor(title, content, timestamp, createdBy){
        this.title = title;
        this.content = content;
        this.timestamp = timestamp;
        this.createdBy = createdBy;
    }

    toJSON() {
        return {
            title: this.title,
            content: this.content,
            timestamp: this.timestamp,
            createdBy: this.createdBy
        }
    }

}

export default Announcement;