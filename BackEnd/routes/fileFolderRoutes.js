const express = require("express");
const { getFileFolders } = require("../controller/fileFollderControllers");


const fileFolderRouter = express.Router();


fileFolderRouter.post("/", getFileFolders);



module.exports = fileFolderRouter;
