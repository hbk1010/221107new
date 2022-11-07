// then(실행,error)
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(
  (response) => response.text()
)
.then(
  (result) => {
    console.log('welcome')
    console.log(re1sult)
  }
)
.catch(
  () => console.log('에러가 발생되었습니다.')
) //에러났을때 표시, 마지막에 넣음

.finally(
  () => console.log('작업이 끝났습니다.')
) //완전 마지막에 넣음

/* fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(
  (response) => response.text(), 
  (error) => console.log(error) //에러났을때 에러를 표시
)
.then(
  (result) => {
    console.log(result)
  }
) */