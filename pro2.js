require('./mongoose')
const Task = require('./tasks')
Task.findByIdAndDelete('').then((result) => {
    console.log(result)
    return Task.countDocuments({
        completed: false
    })
}).catch((e) => {
    console.log(e)
})