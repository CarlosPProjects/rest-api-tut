"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.postItem = exports.updateItem = exports.getItems = exports.getItem = void 0;
const error_handle_1 = require("../utils/error.handle");
const getItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOG");
    }
};
exports.getItem = getItem;
const getItems = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_GET_BLOGS");
    }
};
exports.getItems = getItems;
const updateItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_UPDATE_BLOG");
    }
};
exports.updateItem = updateItem;
const postItem = ({ body }, res) => {
    try {
        res.send(body);
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_POST_BLOG");
    }
};
exports.postItem = postItem;
const deleteItem = (req, res) => {
    try {
    }
    catch (e) {
        (0, error_handle_1.handleHttp)(res, "ERROR_DELETE_BLOG");
    }
};
exports.deleteItem = deleteItem;
