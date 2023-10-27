class Link {
    constructor(long_url) {
     this.short_path = this.generateShortPath(6);
     this.long_url = long_url;
     this.view_counter = 0;
     this.history = [];
    }

    generateShortPath = (length) => {
        const char = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let result = '';
        for (let i = 0; i < length; i++) {
          const rnd = Math.floor(Math.random() * char.length);
          result += char.charAt(rnd);
        }
        return result;
    }
}

module.exports = Link;