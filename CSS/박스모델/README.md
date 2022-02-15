# 박스모델 (Box-Model)

- 브라우저가 요소를 렌더링 할 때, 각각의 요소는 기본적으로 사각형 형태로 영역을 차지하게 된다. 이 영역을 '박스'라 표현하며, CSS는 박스의 크기, 위치, 속성(색, 배경, 테두리 모양 등)을 결정할 수 있다.

- 하나의 박스는 다음 네 개의 영역으로 구성된다.

1. &nbsp; 콘텐츠 영역 ( width, height )
2. &nbsp; 안쪽 여백 ( padding )
3. &nbsp; 경계선(테두리) ( border )
4. &nbsp; 바깥쪽 여백 ( margin )

### 인라인 블록은 width, height를 설정할수 없음
그렇기 때문에 inline-block를 사용함.

# 다양한 경우의 수
- 여백은 상하좌우 네 개의 면에 존재하는 영역이다. <br>
- 작성자는 각 면에 개별적으로 두께를 정의할 수 있다. <br>
- 이를 해결하기 위해 다음 두 가지 방법을 사용한다.
1. &nbsp; 하위 속성 정의하기
2. &nbsp; 여러 값을 한 번에 정의하기

#  여러 값을 한번에 정의하기
- padding과 margin은 네 면의 여백에 대한 단축속성이다.

```css
span{
    display: inline-block;
    width: 100px; height: 100px;
    margin: 10px 20px 30px 40px;
}
```

# box-sizing

- box-sizing 속성은 요소의 너비(width)와  높이(height)를 계산하는 방법을 지정한다.

|속성값|의미|
|:---:|:---:|
|content-box|기본값. 너비와 높이가 콘텐츠 영역만을 포함한다.|
|border-box|너비와 높이가 안쪽 여백과 테두리까지 포함한다.|

너비와 높이가 같더라도, box-sizing 속성값에 따라 크기가 달라질수 있다.

# background

- 배경(background)은 콘텐츠의 배경을 정의한다.
- 단축 속성으로써 색상, 이미지, 반복 등 다양한 하위 속성을 정의할 수 있다.
|하위 속성|역할|
|:---:|:---:|
|background-color|배경 색을 정의한다.|
|background-image|배경 이미지를 정의한다.|
|background-position|배경 이미지의 초기 위치를 정의한다.|
|background-size|배경 이미지의 크기를 정의한다.|
|background-repeat|배경 이미지의 반복 방법을 정의한다.|