// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(
//   (response) => response.text()
// )
// .then(
//   (result) => {console.log(result)}
// )


//async 로 해보기
async function fetchStr(){
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const result = await response.text()
  console.log(result)
}
fetchStr();