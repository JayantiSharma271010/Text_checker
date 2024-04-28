



let para = document.getElementById("demo")



const answer1 = document.getElementById("answer1"),
answer2 = document.getElementById("answer2"),
answer3 = document.getElementById("answer3"),
answer4 = document.getElementById("answer4"),
answer5 = document.getElementById("answer5"),
answer6 = document.getElementById("answer6")



const urName = document.getElementById("your-name")


urName.addEventListener('keyup', ()=>{
    const value = urName.value

    answer1.textContent = getNumbers(value)
    answer2.textContent = getFirstChar(value)
    answer3.textContent = getLastChar(value)
    answer4.textContent = getLowerCase(value)
    answer5.textContent = getUpperCase(value)
    answer6.textContent = getCapitalize(value)
}
    
)


const getNumbers = (urName)=>{
    return urName.length
}

const getFirstChar = (urName)=>{
    return urName.trim().at(0)
}

const getLastChar = (urName)=>{
    return urName.at(-1)

}

const getLowerCase = (urName)=>{
    return urName.toLowerCase()
}

const getUpperCase = (urName)=>{
    return urName.toUpperCase()
}

const getCapitalize = (urName)=>{
    return urName[0].toUpperCase() + urName.slice(1).toLowerCase()
}
