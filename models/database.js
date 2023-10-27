const Link = require("../models/Link");

class Database {
    constructor() {
        this.list = []
    }

    push = (long_url) => {
        let link = new Link(long_url);
        let checkLink =  this.list.find(l => l.long_url === long_url);
        if (checkLink) {
            return checkLink.short_path;
        } else {
            this.list.push({
                "short_path": link.short_path,
                "long_url": link.long_url,
                "view_counter": link.view_counter,
                "history": link.history
            });
            return link.short_path;
        }
    };
    print = () => this.list

    open = (path) => {
        let link =  this.list.find(l => l.short_path === path);
        if (link) {
            this.list[this.list.indexOf(link)].view_counter++;
            const currentDate = new Date();
            this.list[this.list.indexOf(link)].history.push(currentDate.toISOString());
            return link.long_url;
        } else {
            return false;
        }
    }
}
module.exports = Database;
