const Users   = require("../models/user.js");
const jwt = require("jsonwebtoken");
const Tasks   = require("../models/task.js");
const bcrypt  = require('bcrypt');
const { valid } = require("joi");
const JWT_SECRET = "newtonSchool";
const { json } = require("express");

/*

request.body = {
    heading: heading,
    description: description,
    token: token
}

1. Create new task from request body .
2. From JWT token payload get creator_id of this task. (userId in payload will be creator_id).
3. Save heading, description, creator_id for every task.

Response :

1. Success

200 StatusCode

json = 
{
    "message": 'Task added successfully',
    "task_id": task._id, //id of task that is created.
    "status": 'success'
}

2. Unabel to verify token (Invalid Token)
404 Status Code
json = 
{
    "status": 'fail',
    "message": 'Invalid token'
}

3. Fail to do

404 Status Code
json = 
{
    "status": 'fail',
    "message": error message
}

*/

const createTask =async (req, res) => {

    //creator_id is user id who have created this task.

    const { heading, description, token  } = req.body;
    //Write your code here.
        try{
            let tokenData = jwt.verify(token, JWT_SECRET);
            let userId = tokenData.userId;

            let userData = await Users.find();
            let findData = userData.filter((data) => data._id == userId);

            if(findData.length > 0){
                let newTask = new Tasks({
                    heading,
                    description,
                    creator_id: userId
                })

                try{
                    let task = await Tasks.create(newTask);
                    res.status(200).json({status: 'success', "message": 'Task added successfully', "task_id": task._id})
                } catch (error) {
                    res.status(404).json({message: error.message, status: 'fail'})
                }
            } else{
                res.status(404).json({message: 'Invalid token', status: 'fail'})
            }
        } catch (error) {
            res.status(404).json({message: error.message, status: 'fail'})
        }
}

/*

getdetailTask Controller

req.body = {
    "task_id" : task_id,
    "token" : token
}

1. Return the detail of the task with given task_id.
2. For this task you will be only test with valid (Existing) task_id.

Response --> 

1. Success

200 Status code

json = {
  status: 'success',
  data: {
    Status: 'pending',
    _id: 'mxcnbxzcn-khscc',
    heading: 'Study Doglapan',
    description: 'Need to study atleast 10 Pages',
    creator_id: 'kdjhgsdjgmsbmbs'
  }
}

2. Fail

404 Status Code
json = {
    "status": 'fail',
    "message": error message
}

*/

const getdetailTask = async (req, res) => {

    const task_id = req.body.task_id;
    //Write your code here.
    const token = req.body.token;

    try {
        let tokenData = jwt.verify(token, JWT_SECRET);
        let userId = tokenData.userId;

        let userData = await Users.find();
        let findData = userData.filter((data) => data._id == userId);

        if(findData.length > 0){
            let taskData = await Tasks.findById(task_id);
            res.status(200).json({status: 'success', data: taskData});
        } else {
            res.status(404).json({message: 'Invalid token', status: 'fail'})
        }
    } catch (error) {
        res.status(404).json({message: error.message, status: 'fail'})
    }
}

module.exports = { createTask, getdetailTask };