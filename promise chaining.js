require('./mongoose')
const User = require('./user')

/* User.findByIdAndUpdate('5e8a5f0f38b94c26a4dbcdc4', {
age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({
        age: 1
    })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})*/



const updateAgeandCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id, {
        age
    })
    const count = await User.countDocuments({
        age
    })
    return count
}

updateAgeandCount('5e8b7aa49ecd9139e0f62b13', 3)