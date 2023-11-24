import express from 'express';
const router = express.Router();

router.get('/notes', (req, res) => {
    let obj = {
        name: "Kamal Nayan Upadhyay",
        rollNumber: 15,
        branch: 'CSE'
    }
    res.json(obj);
})

export default router