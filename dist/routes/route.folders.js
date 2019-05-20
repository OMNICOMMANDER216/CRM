"use strict";

var router = require("express").Router();

var _require = require("../helpers/auth"),
    isAuthenticated = _require.isAuthenticated;

var Controller = require("../controllers/controller.folders").foldersController;

//@route    GET /folders
//@desc     return list of all folders
//@access   private
router.get("/", Controller.getAll);

//@route    POST /folders
//@desc     Create a new folder
//@access   private
router.post("/", Controller.create);

//@route    PUT /folders
//@desc     update a folder
//@access   private
router.put("/", Controller.update);

//@route    DELETE /folders/:id
//@desc     delete a folder
//@access   private
router.delete("/:id", Controller.deleteById);

module.exports = router;