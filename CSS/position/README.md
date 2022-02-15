# position

- position은 문서 상에 요소를 배치하는 방법을 정의한다.
- position이 요소의 배치 방법을 결정하면 top, bottom, right, left가 최종 위치를 결정하는 방식이다.

```css
position : 난 이렇게 배치할거야;
top : 윗면에서부터 얼만큼 떨어뜨릴꺼야;
right: 오른쪽면에서부터 얼만큼 떨어뜨릴꺼야;
bottom: 아랫면에서부터 얼만큼 떨어뜨릴거야;
left: 왼쪽면에서부터 얼만큼 떨어뜨릴거야;
```

상하좌우 위치 지정은 필요에 따라 선택적으로 사용

|속성값|의미|
|:---:|:---:|
|static|기본값. 요소를 일반적인 문서 흐름에 따라 배치한다.|
|relative|일반적인 문서 흐름에 따라 배치하되, 상하좌우 위치 값에 따라 오프셋을 적용한다.|
|absolute|일반적인 문서 흐름에서 제거하고, 가장 가까운 position 지정 요소에 대해 상대적으로 오프셋을 적용한다.|
|fixed|일반적인 문서 흐름에서 제거하고, 지정한 위치에 고정된다.|
|sticky|일반적인 문서 흐름에서 제거하고, 스크롤 동작이 존재하는 가장 가까운 요소에 대해 오프셋을 적용한다.|

# position : relative;

- 요소를 일반적인 문서 흐름에 따라 배치하되, 상하좌우 위치 값에 따라 오프셋을 적용한다. 오프셋(보충)이란, 위치를 얼마간 이동시키는 것을 의미한다.

```css
div{
    width : 100px; height: 100px;
    background-color: red;

    position: relative;
    top: 100px; left: 100px;
}
```

원래 위치보다 위에서부터 100px, 왼쪽에서부터 100px 떨어져 있어라

# position : absolute;

- 요소를 일반적인 문서 흐름에서 제거하고, 상위 요소 중 가장 가까운 position 지정 요소에 대해 상대적으로 오프셋을 적용한다.
- position 지정 요소란, position 속성에 속성값이 정의되어 있는 요소

```css
div{
    width : 100px; height: 100px;
    background-color: red;

    position: absolute;
    top: 100px; left: 100px;
}
```

# position : fixed;

- 요소를 일반적인 문서 흐름에서 제거하고, 지정된 위치에 고정시킨다.

```css
.pos{
    width : 200px; height: 200px;
    background: peru;
    position: fixed;
    top: 50px; left: 50px;
}
```

위에서부터 50px, 왼쪽에서부터 50px 덜어진 자리에서 움직이지 않는다.

# position : sticky;

- 요소를 일반적인 문서 흐름에 따라 배치하고, 스크롤(scroll)되는 가장 가까운 상위 요소에 대해 오프셋을 적용한다.

```css
.pos{
    width : 200px; height: 200px;
    background: peru;
    position: sticky;
    bottom: 0px;
}
```

스크롤 이동으로 요소가 움직여도 스티키 요소는 고정된 상태를 유지한다