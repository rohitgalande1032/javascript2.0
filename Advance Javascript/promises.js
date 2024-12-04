// A promise is an object that will produce a single value sometime
// in the future. If the promise is successful, it will produce a
// resolved value, but if something goes wrong then it will produce
// a reason why the promise failed.

// Simply said:- It behaves very much similar to real life promises


let fruits = ["apple", "mango", "banana"]

function animateOne(fruit, animate) {
    return new Promise((res, rej) => {
        setTimeout(()=>{
            animate(fruit)
            res(true)
        }, 1000)
    })
}

const animateAll = (animate) => {
    animateOne(fruits[0], animate)
    .then(()=> animateOne(fruits[1], animate))
    .then(()=> animateOne(fruits[2], animate))
    .catch((err) => console.log(err))
}

function animate(fruit){
    console.log(`animate ${fruit}`)
}

animateAll(animate)