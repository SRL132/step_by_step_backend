//connect to mongo database books
const mongoose = require("mongoose");

function connect() {
    return mongoose.connect("mongodb://localhost:27017/step-by-step-mvc", () => {
        console.log("connected");
    },
        e => console.error(e),
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

// export the connect function
module.exports = connect;
