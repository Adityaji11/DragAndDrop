const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/file_upload', {
//   // useNewUrlParser: true,
//   // useUnifiedTopology: true,
//   // useCreateIndex: true
// });

mongoose.connect(`mongodb+srv://${encodeURIComponent('Amit8964')}:${encodeURIComponent('Cypher@8964')}@${'cluster0.adtotkd'}.mongodb.net/${'File'}?retryWrites=true&w=majority`).then(data=>{

console.log("Data connected")

}).catch((err)=>{

    console.log(err)
})

