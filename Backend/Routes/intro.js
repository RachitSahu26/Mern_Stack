import { Router } from 'express';

const route = Router();

route.get('/', (req, res) => {
    let obj = {
        name: "Rachit Sahu",
        rollNumber: 13435,
        branch: 'CSE inte'
    };
    res.json(obj);
});

export default route;