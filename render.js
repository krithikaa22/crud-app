const axios = require('axios')

exports.homeRoutes = (req,res) => {
    axios.get('http://localhost:3000/api/users')
     .then(function(response){
         console.log(response)
         res.render('index', { users: response.data })
     })
     .catch(err => {
         res.send(err);
     })
}

exports.addUser = (req,res) => {
    res.sendFile('add-user.html' , {root: '../crud/views'})
}

exports.updateUser = (req,res) => {
    res.sendFile('update-user.html', {root: '../crud/views'})
}