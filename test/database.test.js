const Database = require("../models/database");
const Link = require("../models/Link");


test('list must exists', () => {
    let database1 = new Database();
    expect(database1.print()).toStrictEqual([]);
});

test('Must add new_link on list', () => {
    let database1 = new Database();
    database1.push("ajeje");
    let list1 = database1.print();
    expect(list1[list1.length-1].long_url).toStrictEqual("ajeje");
});

test('Must increment and return url when open a link', () => {
    let database1 = new Database();
    let list1 = database1.print();
    database1.push("ajeje");
    let path1 = list1[list1.length-1].short_path;
    expect(database1.open(path1)).toBe("ajeje");
    expect(list1[list1.length-1].view_counter).toBe(1);
});

test('Must return false if short_path not exists', () => {
    let database1 = new Database();
    expect(database1.open("lorem_false")).toBe(false);
});

test('Must return existing short_path if long_url already exists', () => {
    let database1 = new Database();
    database1.push("ajeje");
    let list1 = database1.print();
    expect(database1.push("ajeje")).toBe(list1[0].short_path);
});

test('BONUS return history with date for every time link is opened', () => {
    let database1 = new Database();
    database1.push("ajeje");
    let list1 = database1.print();
    database1.open(list1[list1.length-1].short_path);
    expect(list1[list1.length-1].history).not.toBe([]);
});