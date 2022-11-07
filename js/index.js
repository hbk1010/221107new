// fetch('https://www.google.com').then((response) => {return response.text()})
// fetch('https://www.google.co.kr/')
// .then((response) => response.text())
// .then((result) => console.log(result))

fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => response.text()).then((result) => {console.log(result)})
