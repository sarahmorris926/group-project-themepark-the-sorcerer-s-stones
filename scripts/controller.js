"use strict";
let $ = require("jquery");
let format = require("./format");
let factory = require("./factory");
let output = require("./output");


module.exports.startAreas = () => {
    factory.getAreas()
    .then((parkAreas) => {
        output.printToDom(parkAreas);
    });
};

        
module.exports.startAreaClick = () => {
    let areas = factory.getAreas();
    let attractions = factory.getAttr();
    let attrTypes = factory.getAttrTypes();
    Promise.all([areas, attractions, attrTypes])
    .then((dataArray) => {
        return format.formatAttr(dataArray[0], dataArray[1], dataArray[2]);        
    })
    .then((updateAttr) => {
        // factory.openRides
    });
};
