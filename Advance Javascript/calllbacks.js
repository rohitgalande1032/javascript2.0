// A JavaScript callback is a function which is to be executed after another function has finished execution.

//Simply said:- Any function that is
// passed as an argument to another
// function so that it can be executed
// in that other function is called as a
// callback function. This results in
// callback hell. thats why promises introduces


let fruits = ["apple", "mango", "banana"]

const animateAll = (animate) => {
    setTimeout(()=>{
        animate(fruits[0])
        setTimeout(()=>{
            animate(fruits[1])
            setTimeout(()=>{
                animate(fruits[2])
            }, 1000)
        }, 1000)
    },1000)
}


function animate(fruit){
    console.log(`animate ${fruit}`)
}

animateAll(animate)