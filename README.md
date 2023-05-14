# Emiza--L2---BE-Project-2---To-Do-App---gzvnwpxop2ev
TODO Application 

As a backend developer, you have been tasked with building a TODO Application using NodeJS, ExpressJS, Mongoose & MongoDB. User Auth is allready implemented. Now The system should be able to create Task and get specific Task detail. The project also requires the implementation of a taskSchema that includes heading, description, status, and creator_id. 

The folder structure of the project should consist of four main folders: "src," "models," "routes," and "controllers."




"src": contains the "index.js" and "app.js" files, where "index.js" handles the database connection.

"models": includes the "user.js" & "task.js" file, which defines the schema for the MongoDB database using Mongoose.

"routes": contains the "userRoutes.js" & "taskRoutes.js" files, which handle routing for login and signup of the user and CURD operation on task, respectively. You'll find routing logic with endpoints in these files. 

"controllers": folder includes the "userController.js" & "taskController.js" files for login and signup of the user operations and CURD operation on task, respectively.



You only need to update 1 Controllers "taskController.js", and 1 models  "task.js" .



NOTE: Don't edit any other file.



WHAT YOU HAVE TO DO?



1. Implement taskSchema in task.js models. Write missing code only.




heading should be a string and required

description should be a string and required

status should be a string, and it can have only two values ('pending', 'done') and the default should be pending

creator_id will be a reference to the user who has created this task (store the user id of the creator).

Also, Enable timestamps which will store the date of the document created and updated.



You need to Modify ./models/task.js



2. Write controller logic for createTask in taskControllers.js. Controller structure is given to you in this file, write missing code only. 




Create a new task from the request body.

From the JWT token payload, get the creator_id of this task. (userId in the payload will be creator_id).

Save the heading, description, and creator_id for every task.

Return a 200 status code with a JSON response containing a success message if the task was created successful.

Return a 404 status code with a JSON response containing a fail message for an invalid token.

Return a 404 status code with a JSON response containing a fail message for Fail.



Expected Input & Output:



Method: POST

Endpoint: api/v1/task/create



Input :



    req.body = { heading: heading, description: description, token: token }



Output :




On successful Task creation:


200 Status code.

json = { "status": 'success', "message": 'Task added successfully', , "task_id": task._id, //id of task that is created. }



Unabel to verify token (Invalid Token) :

404 Status code.

json = { message: 'Invalid token' , status: 'fail' }



If something went wrong:

404 Status code.

json = { message: error.message , status: 'fail' }





3. Write controller logic for getdetailTaskin taskControllers.js. Controller structure is given to you in this file, write missing code only. 




Return the detail of the task with given task_id.

For this task you will be only test with valid (Existing) task_id.



Expected Input & Output:



Method: GET

Endpoint: api/v1/task/detail



Input :



req.body = { task_id: task_id, token: token }



Output :




On success :


200 Status code.

json = { status: 'success', data: { Status: 'pending', heading: 'Study Doglapan', description: 'Need to study atleast 10 Pages', creator_id: 'kdjhgsdjgmsbmbs'} }



If something went wrong:

404 Status code.

json = { message: err.message , status: 'fail' }





Third-Party Libraries: The application uses two third-party libraries, JWT, and bcrypt.



NOTE: All error messages & success messages are in JSON Format.
