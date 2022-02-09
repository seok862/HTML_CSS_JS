# 뷰포트(viewport)

- 뷰포트(viewport)란 현재 화면에 보여지고 있는 영역을 의미한다.
- 기기 별로 뷰포트가 다르기 때문에, 동일한 웹 페이지라도 기기에 따른 배율 조정이 발생해 화면의 크기가 다르게 보이는 현상이 나타난다.

# name="viewport"

- 기기 별로 뷰 포트가 다르기 때문에 발생하는 배율 문제에 대응하기 위해 meta 태그를 통해 뷰포트 관련 설정을 추가할 수 있다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- 뷰포트의 너비를 단말기 너비에 맞추고, 초기 배율을 1로 한다! -->
```