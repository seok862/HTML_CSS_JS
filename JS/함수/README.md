# 함수

- 함수는 '호출될 수 있는 코드 조각'이다.
- 변수를 선언하고 데이터를 대입하면 변수의 이름을 데이터 대신 사용할 수 있는 것처럼, 함수를 선언하면 함수의 이름을 코드조각 대신 사용할 수 있다.

## 함수의 이름

- 함수의 기능을 적절하게 표현할 수 있는 이름 사용
- 명사보다는 동사로 된 이름을 사용
- 소문자로 시작하되, 여러단어가 섞인 경우 카멜표기법을 사용

## 함수 선언식

```javascript
function 함수명(){
    // 함수의 기능을 표현한 구문
}
```

## 함수 표현식

```javascript
const 함수명  = function(){
    // 함수의 기능을 표현한 구문
}


const sayHello = function(){
    let number = 3+3
    console.log(number)
}

sayHello() // 함수 호출
```

## 데이터 반환

- 함수를 만들 때, 함수가 데이터를 반환하도록 할 수 있다.
- 함수가 데이터를 반환한다는 것은, 함수 호출문이 데이터로 대체됨을 뜻한다.

```javascript
// 그냥 3을 출력
console.log(3);

// 3을 반환하는 함수 호출문을 출력
console.log(getThree());

function getThree(){
    // 이 함수를 호출하면 3을 반환
    return 3;
}
```

