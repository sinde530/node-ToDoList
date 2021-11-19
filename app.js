// const "express" 라는 변수를 선언함.
const express = require('express') //const 는 상수이며 변수가 없이 사용을 하지 못함
const app = express() // Express app 객체로 모든 서버의 일을 처리한다는 뜻 
const port = 7000 // Port번호는 localhost.7000 번으로 찍힘.

const toDolists = ["밥먹기"]

app.set('view engine', 'pug')

app.get('/', (req,res) => { 
    // middleware 함수에 대한 HTTP 요청 인수(req) 응답 인수 (res) 콜백 인수 (next)라고 불림
    // index.pug 에 있는 =toDoListTitle 을 가져옴 
    res.render('index', {toDoListTitle: '오늘의 할 일 : ' + toDolists.length, toDolists: toDolists})
})
// => 화살표 함수는 function 키워드 대신 사용이 가능 (간략한 방법으로 함수 선언 가능)
// app.listen(port, () => {
app.listen(port, function() {
    console.log('connected')
})