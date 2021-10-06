// function removIdFromDom() {
//     document.getElementById("id1").style.display="none";
// }

// function removId2FromDom() {
//     document.getElementById("id2").style.display="none";
// }

// function removId3FromDom() {
//     document.getElementById("id3").style.display="none";
// }

// function removFromDom(objs) {
//     objs.style.display="none";
// }

// const listLi = document.querySelectorAll("li");
// console.log(listLi);
// for (let i = 0; i < listLi.length; i++) {
//     const element = listLi [i];
//     element.addEventListener("click", removFromDom)
// }

// function removFromDom() {
//     this.style.display="none";
// }

function loadDoc2() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
       console.log(`readyState : ${this.readyState}`);
      if (this.readyState === 4 && this.status === 200) {
        const obj2 = JSON.parse(this.responseText);
        document.getElementById("demo2").innerHTML = this.responseText;
        // console.log(obj2);
        // for (const element of obj2) {
        //     console.log(element.title);
        //     console.log(element.id);
        //     console.log(element.completed);
        // }
        console.log(obj2.rates);
    }
    // if (this.readyState === 4 && this.status === 404){
    //    document.getElementById("demo2").innerHTML = '404!!!!!!!!';
    // }
};
// document.getElementById("demo2").innerHTML = 'Ajax Error!!!!!!!!';
const API_KEY = "d378134ff7c62d8a5fb82a5e4d00cb6f";
const url3 = `http://api.exchangeratesapi.io/v1/latest?access_key=${API_KEY}`;
// const url3 = "https://jsonplaceholder1.typicode.com/todos";
// const url3 = "https://jsonplaceholder.typicode.com/todos1";
xhttp.open("GET", url3);
xhttp.send();
xhttp.onerror = function(){
}
}