
const {Router} = require("express");
const UserController = require('./Controllers/userController')


const router = Router();

router.get('/index', (req, res) => {
    return res.status(200).json({message: "Server is on..."});
});

router.post('/register', UserController.create);
router.get('/users', UserController.index);
router.get('/users/:id', UserController.show);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.delete);

module.exports = router;

// router.post('/register', async (req, res) => {
//     try{
//         const user = await User.create(req.body);

//         return res.json(user);

//     } catch{
//         return res.status(400).send({ error: "Registration Failed"})
//     }
// });

// module.exports = app => app.use('/auth', router);
