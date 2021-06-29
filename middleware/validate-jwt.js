const jwt = require("jsonwebtoken");
const {UserModel} = require("../models");
// const User = require("../models/user");

const validateSession = async(req, res, next) =>{
    if(req.method ==="OPTIONS"){
        return next()
    } else if( 
        req.headers.authorization){
            const {authorization} = req.headers;
            console.log(`authorization -->`, authorization);
            const payload = authorization
                ? jwt.verify
                (authorization, process.env.JWT_SECRET) : undefined

            if(payload){
                let foundUser = await UserModel.findOne({
                    where: {id: payload.id}
                });

                if(foundUser){
                    console.log(`request -->`, req);
                    req.user = foundUser
                    next()
                } else {
                    res.status(400).send({
                        message: `Not Authorized`
                    })
                }
            } else {
                res.status(401).send({
                    message: `Invalid Token`
                })
            }
        } else{
            res.status(403).send({
                message: `Forbidden`
            })
        }
    }

    module.exports = validateSession;