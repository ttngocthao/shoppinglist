function processForm(){
    var listItem=document.additem.item.value;
    var mylist = '<div><input type="checkbox"/>' + listItem + '</div>';
    document.getElementById('mylist').innerHTML += mylist;

}
function clearForm(){
    document.getElementById('mylist').innerHTML = "";
}