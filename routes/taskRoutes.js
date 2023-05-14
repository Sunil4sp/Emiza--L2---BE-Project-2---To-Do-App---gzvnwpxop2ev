const express = require("express");

/* const {errorHandler} = require("../utils/errorHandler"); */

const { createTask, getdetailTask } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/create", createTask);
router.get("/detail", getdetailTask);

module.exports = router;