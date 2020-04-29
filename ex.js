const add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
    })
}
const doi = await add(3, 4)
const ria

//now chaining is started so look this no

/*add(1, 2).then((sum) => {
console.log(sum)
return add(sum, 7).then((sum2) => {
console.log(sum2)
return add(sum, 9).then((sum3) => {
    console.log(sum3)
})
})
}).catch((e) => {
    console.log(e)
})
//alternative method for this here is
add(1, 2).then((sum) => {
    console.log(sum)
    add(8, 8).then((sum2) => {
        console.log(sum2)
    }).catch((e) => {
        console.log(e)
    })
}).catch((e) => {
    console.log(e)
})*/