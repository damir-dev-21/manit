const {Router} = require('express');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');
const Auth = require('../models/Auth');
const router = Router();

// router.post('/',async(req,res)=>{
//     try{

//         const {name,password} = req.body;

//         const candidate = await Auth.findOne({name});

//         if(candidate){
//             return res.status(400).json({message:'User got!'})
//         }


//         const hashPassword = await bcrypt.hash(password,12);
//         const user = new Auth({name,password:hashPassword}); 

//         await user.save();
        
//         return res.status(201).json({message:'Регистрация прошла успешно!'})

//     }catch(e){
//         res.status(500).json({message:e.message})
//     }
// })

router.post('/',async(req,res)=>{
    try{

        const {name,password} = req.body;

        const candidate = await Auth.findOne({name});

        if(!candidate){
            return res.status(400).json({message:'Incorrect name or password'})
        }

        const isMatch = await bcrypt.compare(password,candidate.password);

        if(!isMatch){
            res.status(400).json({message:'Incorrect name or password'})
        }

        const token = jwt.sign(
            {userId:candidate.id},
            config.get('jwtSecret'),
            {expiresIn:'1h'}
        )

        res.json({token,userId:candidate.id})

    }catch(e){
        res.status(500).json({message:e.message})
    }
})

module.exports = router;