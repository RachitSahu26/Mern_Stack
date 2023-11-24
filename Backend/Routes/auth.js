import express from 'express';
import User from '../Model/User.js';
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send(req.body);


})


// router.get('/', (req, res) => {
//     let obj = {
//         name: "Rachit",
//     };
//     res.json(obj);
// });

export default router