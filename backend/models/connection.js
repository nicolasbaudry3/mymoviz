var mongoose = require('mongoose')

var options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true
}

mongoose.connect('mongodb+srv://nico:nico@cluster0.vltjl.mongodb.net/mymovizApp?retryWrites=true&w=majority',
    options,
    function(err){
        console.log(err)
    }
)

module.exports = mongoose