function sayHello(){
   let hello = "문자열 헬로우"
    console.log(hello)
}

sayHello();

const sayBye = function(){
    console.log("good bye");
}

sayBye();

function thereIsReturn(){
    console.log("반환한다");
    return 10;
}

const result = thereIsReturn();
console.log(result)


function sayAnyting(ant, number){
    for(let i = 0; i<number; i++){
        console.log(ant)
    }
}

sayAnyting("으아아아아", 2)
sayAnyting("아아아아아", 6)

function oddEven(number){
    if(number % 2 == 1){
        return "홀수"
    } else{
        return "짝수"
    }
}

console.log(oddEven(10));
console.log(oddEven(7));