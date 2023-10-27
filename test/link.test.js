const Link = require("../models/Link");

let link1 = new Link("google.com/akjsndkajsdnkdjandskjn");

test('Save long_url in link', () => {
    expect(link1.long_url).toBe("google.com/akjsndkajsdnkdjandskjn");
});

test('Generate a short path', () => {
    expect(link1.short_path).not.toBe("");
});