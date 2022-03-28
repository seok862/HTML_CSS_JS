# 조건문

- 조건문이란 주어진 조건의 참/거짓 여부에 따라 프로그램의 흐름을 결정할 수 있는 구문을 뜻한다.
- 여기서 조건이란, 불리언 데이터를 반환하거나 불리언 데이터로 해석할 수 있는 표현식을 의미한다.
- ex) 게임 캐릭터의 HP가 0입니까? => true일 경우 캐릭터가 죽는다.

## if문

- 키워드 if를 이용해 만드는 구문 'if문'은 가장 일반적인 형태의 조건문이다.
- if문의 기본 형태는 다음과 같다

```javascript
if(조건){
    // 조건이 ture일 때 실행할 코드
} else{
    // 조건이 false일 때 실행할 코드
}

// 버튼을 클릭했을 때 나타나는 동작
<input id="night_day" type="button" value="night" onclick="
    var target = document.querySelector('body');
    if(this.value === 'night'){
      target.style.backgroundColor = 'black';
      target.style.color = 'white';
      this.value = 'day';
    } else {
      target.style.backgroundColor = 'white';
      target.style.color = 'black';
      this.value = 'night';
    }">

```

- 예제

```javascript
let number = 5;

if(number == 3){
    console.log('It is ture!');
} else{
    console.log('It is false');
}
```