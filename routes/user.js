import express, { Router } from 'express';
import * as user   from '../controllers/user.js';
<<<<<<< Updated upstream
//import multer from "../middlewares/multer-config.js";
import { body } from 'express-validator';
import multer from 'multer';

=======
import { adduser } from '../controllers/user.js';
>>>>>>> Stashed changes


const router = express.Router();

router.route("/")
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    .post( multer("image"),
=======
    .post( 
>>>>>>> Stashed changes
    body("wallet").isNumeric(),
    body("adresse").isLength({min:5,max:100}),
    body("password").isLength({min:5,max:10}),
    body("last_name").isLength({min:5,max:10}),
    body("first_name").isLength({min:5,max:10}),
    body("email").isEmail(),
    body("phone").isLength({min:8,max:8}),
    user.adduser);
=======
    .post( adduser ),

>>>>>>> Stashed changes

router.route("/:user")
.get(user.getuser);

router.route("/:id")
   .put(multer("image"),user.updateuser)
   .delete(user.deleteuser);

 /*  //Handlers from controllers

<<<<<<< Updated upstream

router.post('/login', login)
router.post('/signup', signup)
router.post('/send-otp', sendOTP)
=======
   // .router.post("/user", upload, adduser);
   //.put(multer("image"),user.updateuser)
    router.route("/:user")
    .get(user.getuser)
    router.route("/:id")
    .put(user.updateuser)
<<<<<<< Updated upstream
    .delete(user.deleteuser);
>>>>>>> Stashed changes
=======
    .delete(user.deleteuser)
>>>>>>> Stashed changes


//testing protected route
router.get("/test",auth, (req,res)=>{
    res.json({
        success: true,
        message: "You are a valid Tester "
    })
})


*/
    export default router;