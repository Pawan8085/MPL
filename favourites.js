// write js code here corresponding to favourites.html
var arr=JSON.parse(localStorage.getItem('favourites'));
func(arr);
var x=document.querySelector('#filterVenue');
function func(arr){
    arr.forEach(function (ele,index){
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        td1.innerText=ele.matchnum;
        var td2=document.createElement('td');
        td2.innerText=ele.team_a;
        var td3=document.createElement('td');
        td3.innerText=ele.team_b;
        var td4=document.createElement('td');
        td4.innerText=ele.date;
        var td5=document.createElement('td');
        td5.innerText=ele.venue;
        var td6=document.createElement('td');
        td6.innerText='Delete';
        td6.style.color='red';
        td6.style.cursor='Pointer';
        td6.addEventListener('click',dltRow);
        function dltRow() {
            arr.splice(index,1);
            localStorage.setItem('favourites',JSON.stringify(arr));
            window.location.reload();
        }
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector('tbody').append(tr);
        
    });
}
