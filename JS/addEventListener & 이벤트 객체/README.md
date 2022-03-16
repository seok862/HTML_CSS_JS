# addEventListener

- onclick, onkeydown과 같은 이벤트 속성을 통해 이벤트 핸들러를 등록하는 것보다 현대적인 방법은, addEventListener 메소드를 활용하는 것이다

```javascript
// 이전 방식
target.onclick = function(){

}

// addEventListener 방식
target.addEventListener('click', function(){})

```

## 이벤트 객체

- 이벤트 객체는 추가적인 기능과 정보를 제공하기 위해 이벤트 핸들러에 자동으로 전달되는 데이터이다. 이를 활용하기 위해서는 이벤트 핸들러 함수에 매게변수를 추가하여 이벤트 발생 시마다 전달받을 수 있도록 해야 한다.

```javascript
// click 이벤트가 발생하면 함수를 호출하겠다
target.addEventListener('click', function(){})

// click 이벤트가 발생하면 함수를 호출하겠다
// + 이때 자동으로 전달되는 이벤트 객체를 매개변수 event에 대입하겠다
target.addEventListener('click', function(event){})

```