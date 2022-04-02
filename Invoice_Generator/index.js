
const washEle = document.getElementById("wash-btn")
const mowEle = document.getElementById("mow-btn")
const pullEle = document.getElementById("pull-btn")
const contentEle = document.getElementById("container-content")
const priceContEle = document.getElementById("container-price")
const totalEle = document.getElementById("total-amount")
const paymentEle = document.getElementById("payment-terms")


let sum = 0

const taskArr = []
const priceArr = []

function rendertask() {
    for (let i = 0; i < taskArr.length; i++) {
        const taskEle = document.createElement("li")
        const priceEle = document.createElement("li")
        taskEle.textContent = taskArr[i]
        priceEle.textContent = priceArr[i]
        contentEle.append(taskEle)
        priceContEle.append(priceEle)
    }
    totalEle.innerHTML = `$ ${sum}`
    paymentEle.innerHTML = "We accept cash, credit card, or PayPal"
}


washEle.addEventListener("click", function() { 
    contentEle.innerHTML = ""
    priceContEle.innerHTML = ""
    if (taskArr.includes("Wash Car") && priceArr.includes("$10")) {
        rendertask()
        console.log("Task Already Queued")
    }
    else {
        taskArr.push("Wash Car")
        priceArr.push("$10")
        sum += 10
        rendertask()
    }
}) 

mowEle.addEventListener("click", function() { 
    contentEle.innerHTML = ""
    priceContEle.innerHTML = ""
    if (taskArr.includes("Mow Lawn") && priceArr.includes("$20")) {
        rendertask()
        console.log("Task Already Queued")
    }
    else {
        taskArr.push("Mow Lawn")
        priceArr.push("$20")
        sum += 20
        rendertask()
    }
})

pullEle.addEventListener("click", function() { 
    contentEle.innerHTML = ""
    priceContEle.innerHTML = ""
    if (taskArr.includes("Pull Weed") && priceArr.includes("$30")) {
        rendertask()
        console.log("Task Already Queued")
    }
    else {
        taskArr.push("Pull Weed")
        priceArr.push("$30")
        sum += 30
        rendertask()
    }
})


