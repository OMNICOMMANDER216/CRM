const router = require("express").Router();
const { isAuthenticated } = require("../helpers/auth");
const Controller = require("../controllers/controller.tasks").tasksController;

// @route    GET /tasks
// @desc     return list of all tasks
// @access   private
router.get("/", Controller.getAll);

// @route    POST /tasks
// @desc     Create a new task
// @access   private
router.post("/", Controller.create);

// @route    PUT /tasks
// @desc     update a task
// @access   private
router.put("/", Controller.update);

// @route    DELETE /tasks/:id
// @desc     delete a task
// @access   private
router.delete("/:id", Controller.deleteById);

module.exports = router;
