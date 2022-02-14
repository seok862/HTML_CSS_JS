# 텍스트 관련 속성

- font-family : 글꼴을 정의한다.
- font-size : 글자 크기를 정의한다.
- text-align : 정렬 방식을 정의한다.
- color : 글자 색상을 정의한다.

## font-family

- 요소를 구성하는 텍스트의 글꼴을 정의한다.
- 글꼴명을 속성값으로 지정한다.
- 여러 개의 글꼴을 연달아 기입하여 우선 순위를 지정할 수 있다.

```css
*{
    font-family : Times, monospace, serif;
}
```
Times를 우선 지정하되, 지원되지 않을 경우 monospace를 지정한다.

## font-size

- 숫자와 단위를 지정해 글자의 크기를 정의할 수 있다.
- px : 모니터 상의 화소 하나 크기에 대응하는 절대적인 크기
- rem : <html> 태그의 font-size 에 대응하는 상대적인 크기
- em : 부모태그(상위태그)의 font-seze에 대응하는 상대적인 크기

사용 예
```css
span{ font-size: 16px;}
span{ font-size: 2rem;} 
span{ font-size: 1.5em;}
```

## text-align

- 블록 내에서 텍스트의 정렬 방식을 정의한다. 미리 정의된 키워드 값을 지정한다

### 속성값

- left/right : 왼쪽 또는 오른쪽 정렬한다.
- center : 가운데 정렬한다.
- justify : 양끝 정렬한다.

사용 예
```css
p{
    text-align : right;
}
```

## color

- 텍스트의 색상을 정의한다.

### 속성값 유형

- 키워드 : 미리 정의된 색상별 키워드를 사용한다 (red, blue)
- RGB 색상 코드 : # + 여섯자리 16진수 값 형태로 지정한다
- RGB 함수 : Red, Green, Blue 의 수준을 각각 정의해 지정한다

```css
span{ color : red;}
span{ color : #FF0000;}
span{ color : rgb(100%, 0%, 0%);}
```
모두 같은색이다.