const User = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SALT_FACTOR = 10
const jwtSecret = process.env.JWT_SECRET || 'secret'


function jwtSignUser (user){
const ONE_WEEK = 60*60*24*7
return jwt.sign(user, jwtSecret, {
    expiresIn: ONE_WEEK
})
}


module.exports = {
  async register(req, res){
      try{
          let {password, email} = req.body
          password = await bcrypt.hash(password, SALT_FACTOR).then(function(hash){
              return hash
          })
 
      const user = new User({password, email})
     
       const userJSON = user.toJSON()
       res.send({
           user: userJSON,
           token: jwtSignUser(userJSON)
       })
       
      } catch (err){
          console.log('error')
          res.status(400).send({
              error: err.message
          })
      }
    },
    async login (req, res) {
        try {
          const {email, password} = req.body
          const user = await User.findOne({ email: email})
          if (!user) {
            return res.status(403).send({
              error: 'The login information was incorrect'
            })
          }
    
          const isPasswordValid = await user.comparePassword(password)
          if (!isPasswordValid) {
            return res.status(403).send({
              error:' error'
            })
          }
    
          const userJson = user.toJSON()
          res.send({
            user: userJson,
            token: jwtSignUser(userJson)
          })
        } catch (err) {
          res.status(500).send({
            error: 'blah'
          })
        }
      }
   

}