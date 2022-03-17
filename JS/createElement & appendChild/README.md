# document.createElement

- document의 createElement 메소드는 지정된 이름의 HTML 요소를 만들어 반환해 준다.

```javascript
document.createElement('div')

document.createElement('p')

document.createElement('a')
```

- 메소드를 이용해 만든 요소를 DOM에 추가하는 작업을 진행해야 한다.

## DOM에 추가하기

- appendChild 메소드는 DOM 내 개별 요소('노드'라고도 함)에 자식 요소를 추가할 때 사용하는 메소드이다.

```javascript
// 기본 사용법
target.appendChild(자식으로_추가할_요소)

// 예제
const p = document.createElement("p")
document.body.appendChild(p)
```

## appendChild vs append
- appendChild 메소드와 비슷한 역할을 하는 append 메소드도 있다.
- 타겟 요소에 자식 요소를 추가한다는 점에서 같으나, 차이점도 존재한다

### 주요한 차이
- appendChild의 경우 추가한 자식 노드를 반환하지만, append는 반환 데이터가 없다
- append를 이용하면 요소에 노드 객체 또는 문자열을 자식 요소로 추가할 수 있지만, appendChild는 노드 객체만을 추가할 수 있다