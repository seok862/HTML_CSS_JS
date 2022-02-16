# flexbox

- flexbox란 박스 내 요소 간의 공간 배분과 정렬 기능을 제공하기 위한 1차원 레이아웃 모델이다.
- flexbox를 1차원 모델이라 부르는 이유는, 레이아웃을 다룰 때 한 번에 하나의 차원(행이나 열)만을 다룬다는 특성 때문이다.

## flexbox 만들기
- flexbox를 flex 컨테이너라고도 한다(요소들을 포함하기 때문)
- flex 컨테이너를 만들기 위해서는 컨테이너에 display: flex;를 적용해야 한다.

## flex-direction

- flex-direction 속성은 flexbox 내 요소를 배치할 때 사용할 주축 및 방향(정방향, 역방향)을 지정한다.

|속성값|의미|
|:---:|:---:|
|row|기본값. 주축은 행이고 방향은 콘텐츠의 방향과 동일|
|row-reverse|주축은 행이고 방향은 콘텐츠의 방향과 반대|
|column|주축은 열이고 방향은 콘텐츠의 방향과 동일|
|column-reverse|주축은 열이고 방향은 콘텐츠의 방향과 반대|

## flexbox 다루기
flexbox를 다루기 위해 다음과 같은 속성들을 사용할 수 있다.

- 주축 배치 방법 : justify-content
- 교차축 배치 방법 : align-items
- 교차축 개별요소 배치 방법 : align-self
- 줄 바꿈 여부 : flex-wrap

## flexbox 연습하는 사이트
https://flexboxfroggy.com/#ko