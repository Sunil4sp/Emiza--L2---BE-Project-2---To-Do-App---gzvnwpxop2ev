const express = require("express");

const {errorHandler} = require("../utils/errorHandler");

const { createTask, getdetailTask } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/create", errorHandler(createTask));
router.get("/detail", errorHandler(getdetailTask));

module.exports = router;