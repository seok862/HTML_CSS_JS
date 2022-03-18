# 타이머 관련 기능

## setTimeout

- 정해진 시간이 지나고 나면 주어진 함수를 실행 해주는 타이머 메서드
- 사용 방법
```javascript
setTimeout(실행할_함수, ms_단위의_시간)
```
- 사용 예
```javascript
// 1000ms 가 지나고 나면 함수를 실행한다
setTimeout(function(){
    console.log("재미있다")
}, 1000)
```

## setInterval

- 일정한 시간 간격에 따라 함수를 반복 실행할 수 있도록 해주는 타이머 메서드
- 사용 방법
```javascript
setInterval(반복_실행할_함수, ms_단위의_시간)
```
- 사용 예
```javascript
// 500ms 마다 함수를 반복 실행한다!
setInterval(function(){
    console.log("안녕하세요")
}, 500)
```