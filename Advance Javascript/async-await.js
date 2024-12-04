// Async/Await makes it easier to write promises. The keyword
// 'async' before a function makes the function return a
// promise, always. And the keyword await is used inside async
// functions, which makes the program wait until the Promise
// resolves.

let fruites = ["mango", "apple", "banana"]

// promise
const animateOne = (fruit, animate) => {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            animate(fruit)
            res(true)
        }, 1000)
    })
}


const animateAll = async (animate) => {
    await animateOne(fruites[0], animate)
    await animateOne(fruites[1], animate)
    await animateOne(fruites[2], animate)
}


function animate(fruit){
    console.log(`animate ${fruit}`)
}

animateAll(animate)