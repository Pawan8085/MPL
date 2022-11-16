var arr=JSON.parse(localStorage.getItem('schedule'));
func(arr);
function filter(){
    var selected=document.querySelector('#filterVenue').value;
    var newarr=arr.filter(function(ele){
        return ele.venue==selected;
    })
    func(newarr);
}
var myarr=JSON.parse(localStorage.getItem('favourites'))||[];
function func(arr){
    document.querySelector('tbody').innerHTML='';
    arr.forEach(element => {
        var tr=document.createElement('tr');
        var td1=document.createElement('td');
        td1.innerText=element.matchnum;
        var td2=document.createElement('td');
        td2.innerText=element.team_a;
        var td3=document.createElement('td');
        td3.innerText=element.team_b;
        var td4=document.createElement('td');
        td4.innerText=element.date;
        var td5=document.createElement('td');
        td5.innerText=element.venue;
        var td6=document.createElement('td');
        td6.innerText='Favourite';
        td6.style.color='green';
        td6.style.cursor='Pointer';
        td6.addEventListener('click',func);
        function func() {
            myarr.push(element);
            localStorage.setItem('favourites',JSON.stringify(myarr));
        }
        tr.append(td1,td2,td3,td4,td5,td6);
        document.querySelector('tbody').append(tr);
    });
}
