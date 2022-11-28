const express = require("express");
const router = express.Router();
const passport = require("passport");


router.get('/login', (req,res) => {   
    res.render('login');
});

router.post('/login', passport.authenticate('local', {failureRedirect: '/login'}),  (req,res) =>{
    req.session.user = req.user
    console.log(req.session.user)

    if(req.session.user.role === 'farmer One'){
        res.redirect('/fo')
    }else if (req.session.user.role === 'urbanFarmer') {
        res.redirect('/add_prod');
    }else if (req.session.user.role === 'gp_user'){
        res.redirect('/buy')
    }else if (req.session.user.role === 'ao'){
        res.redirect('/ao')
    }

    

    
 

})




module.exports = router;