# 상속
- 상속(Inheritance)이란 하위 요소가 상위 요소의 스타일 속성값을 물려받는 것을 의미한다.

```css
ul{
    color: tomato;
}

/* li요소를 선택하지 않아도 상위요소 ul의 색깔이 반영됨. */
```

- 상위요소로부터 상속이 이루어지는 속성이 있는 반면, 그렇지 않은 속성도 있다.

|상속 된다|상속 안된다|
|:---:|:---:|
|color, font-family, font-size, font-weight, text-align, cursor 등|background-color, background-image, background-repeat, border, display 등|

# 공용 키워드
- 모든 CSS속성에 사용 가능한 키워드

|키워드|의미|
|:---:|:---:|
|inherit|상위 요소로부터 해당 속성의 값을 받아 사용한다.|
|initial|(브라우저에 지정되어 있는)해당 속성의 기본값을 요소에 적용한다.|
|unset|상속 속성에 대해서는 inherit처럼, 상속되지 않는 속성에 대해서는 initial처럼 적용된다.|