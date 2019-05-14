const router = require("express").Router();
const { isAuthenticated } = require("../helpers/auth");
const customerController = require("../controllers/controller.customers")
  .customersController;

//@route    GET /customers
//@desc     return list of all customers
//@access   private
router.get("/", isAuthenticated, customerController.getAll);

//@route    GET /customers/:id
//@desc     return single customer by id
//@access   private
router.get("/:id", isAuthenticated, customerController.getById);

//@route    POST /customers
//@desc     Create a new customer
//@access   private
router.post("/", isAuthenticated, customerController.create);

//@route    PUT /customers
//@desc     update a customer
//@access   private
router.put(
  "/",
  isAuthenticated,
  customerController.updateMiddleware,
  customerController.update
);

//@route    DELETE /customers/:id
//@desc     delete a customer
//@access   private
router.delete("/:id", isAuthenticated, customerController.deleteById);

module.exports = router;
