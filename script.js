// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector('#masaiForm').addEventListener('submit',func);
var arr=JSON.parse(localStorage.getItem('schedule'))||[];
function func(){
    event.preventDefault();
    var obj={
        matchnum: document.querySelector('#matchNum').value,
        team_a: document.querySelector('#teamA').value,
        team_b: document.querySelector('#teamB').value,
        date: document.querySelector('#date').value,
        venue: document.querySelector('#venue').value,
    }
    arr.push(obj);
    localStorage.setItem('schedule',JSON.stringify(arr));
    window.location.href='matches.html';
}