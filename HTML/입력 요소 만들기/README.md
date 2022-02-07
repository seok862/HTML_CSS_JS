# 입력 요소 만들기

## input 태그

- 사용자로부터 값을 입력받을수 있는 대화형 컨트롤(또는 '필드')을 나타낸다.
- 기본적으로 인라인 요소이며, 단일태그이다.

## input의 핵심, type 속성

- type의 값에 따라 입력 요소의 형태나 입력 데이터 유형 등이 달라진다.
- 사용 간가능한 type은 20여 가지 이며, 기본값은 text이다.
- type의 값이 달라짐에 따라 적용할 수 있는 추가 속성의 종류도 조금씩 차이를 보인다.
<br>
[사용 가능한 모든 속성에 대한 정보](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)


### text 타입
    maxlength : 최대 길이 설정
    placeholder : 입력값이 없을때 표시해주는 메시지

### button 타입
    value : 버튼 안에 넣을 글씨

### range 타입
    max : 최대값
    min : 최소값
    step : 값의 단위
