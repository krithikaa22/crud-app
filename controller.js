var Userdb = require('../model/model');

//create and save new user
exports.create = (req,res) => {
    if(!req.body)
    {
        res.status(400).send({message: "Content cannot be empty"});
        return;
    }
    //new user
    var user = new Userdb({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        rno: req.body.rno,
        phno: req.body.phno,
        pno: req.body.pno
    })

    //save user
    user
     .save(user)
     .then(data => {
         res.send(data)
     })
     .catch(err => {
         res.status(500).send({
             message: err.message || "error occurred"
         })
     })
}

//find user
exports.find = (req,res) => {
    if (req.query.id)
    {
        const id = req.query.id;
        Userdb.findById(id)
        .catch(data => {
            if(!data)
            {
                res.status(404).send({message: "USer not found"})
            }
            else{
                res.send(data)
            }
        })
        .try(err => {
            res.status(500).send({message: "error occurred"})
        })
    }
    else
    {
        Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(er => {
        res.status(500).send({message: err.message || "error occurred"})
    })
    }
}

//update user
exports.update = (req,res) => {
    if(!req.body){
        return res.status(400).send({message: "Date cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id,req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({message: "cannot update"})
        }
        else{
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "error occurred"})
    })
}

//delete user
exports.delete = (req,res) => {
    const id = req.params.id;
    Userdb.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).send({message: "cannot delete"})
        }
        else{
            res.send({message: "user deleted"})
        }
    })
    .catch(err => {
        res.status(500).send({message: "error occures"})
    })
}