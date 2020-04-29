const {
    MongoClient,
    ObjectId
} = require('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'tia'
const id = new ObjectId()
console.log(id)
console.log(id.id.length)
console.log(id.id)
console.log(id.toHexString().length)


MongoClient.connect(connectionURL, {
    useUnifiedTopology: true
}, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').updateOne({
        _id: new ObjectId("5e825c334fd67613d419174b")
    }, {
        $set: {
            name: 'hila'
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})