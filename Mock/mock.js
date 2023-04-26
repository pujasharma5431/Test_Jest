//  functions - fn1 and f2

function greet(firstname, lastname){
    return "Hello!" + this.getFullName(firstname, lastname)
}
function getFullName(firstname, lastname){
    return firstname +" "+ lastname
}
module.exports={greet,getFullName}

