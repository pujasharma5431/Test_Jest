
describe(" Illustrate mocks and spies",()=>{
    test("Illustarte Mock",()=>{

// arrange
const greeter=require('./mock.js');
const mock= jest.fn().mockReturnValue('mocked name');
greeter.getFullName=mock



// act
const result= greeter.greet("Puja","Sharma")

// assert

console.log(result)

    })
})