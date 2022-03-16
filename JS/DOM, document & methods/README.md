# DOM(Dovument Object Model)

- 브라우저는 HTML 코드를 해석해서 요소들을 트리 형태로 구조화해 표현하는 문서(객체)를 생성한다. 이를 DOM이라 하며, 브라우저는 DOM을 통해 화면에 웹 콘텐츠들을 렌더링한다.

## DOM의 목적

- DOM은 자바스크립트를 사용해서 웹 콘텐츠를 추가, 수정, 삭제하거나 마우스 클릭, 키보드 타이핑 등 이벤트에 대한 처리를 정의할 수 있도록 제공되는 프로그래밍 인터페이스(interface)이다.

# window.document

- 브라우저 객체 window의 document 속성은 창이 포함한 문서를 참조한다. 즉, window.document은 현재 브라우저에 렌더링되고 있는 문서를 의미하며, 이 속성을 이용하면 해당 문서에 접근할 수 있다.
- document는 문서(HTML, XML, SVG 등)에 대한 공통의 속성과 메소드를 제공한다. 즉, 다양한 API(Application Programming Interface)를 제공한다.

## document.querySelector

- document의 querySelector 메소드는 선택자를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 첫 번째 요소(Element)를 반환한다. 일치하는 요소가 없으면 '없다'라는 의미의 null 데이터를 반환한다.
- 인자로 전달되는 선택자는 문자열 타입의 '유효한 CSS 선택자'를 의미한다.

```javascript
// p 태그를 선택
document.querySelector("p");

// id가 text인 요소를 선택
document.querySelector("#text");

// class가 text인 요소를 선택
document.querySelector(".text");
```

## document.getElementById

- document의 getElementById 메소드는 id를 인자로 전달받아, 전달받은 선택자와 일치하는 문서 내 요소(Element)를 반환한다. 일치하는 요소가 없으면 '없다'라는 의미인 null 데이터를 반환한다.
- 인자로 전달되는 선택자는 문자열 타입의 'id'를 의미한다.

```javascript
// id가 text인 요소를 선택
document.getElementById("text");

// id가 image인 요소를 선택
document.getElementById("image");
```

## textContent

- textContent속성은 해당 노드가 포함하고 있는 텍스트 콘텐츠를 표현하는 속성이다. textContent를 통해 ㅛㅇ소가 포함한 텍스트를 읽을 수도, 변경할 수도 있다.

```javascript
// p 요소를 반환받아 상수로 이름을 붙인다
const p = document.querySelector("p");

// p 요소의 textContent 속성을 콘솔에 출력
console.log(p.textContent)

// p 요소의 textContent 값을 변경
p.textContent = "텍스트 변경"
```