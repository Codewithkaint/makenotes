let noteobj;
console.log('NOTES-WEBSITES')
shownotes()
let btn=document.querySelector('#adBtn');
btn.addEventListener("click",function(e){
    let txt=document.getElementById('adTxt')
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteobj=[]
    }
    else{
        noteobj=JSON.parse(notes);
    }
    noteobj.push(txt.value.toLowerCase());
    localStorage.setItem('notes',JSON.stringify(noteobj))
    txt.value=''
    shownotes()
});
function shownotes(){
    let notes=localStorage.getItem('notes');
    if(notes==null){
        noteobj=[]
    }
    else{
        noteobj=JSON.parse(notes)
    }
    let html='';
    noteobj.forEach(function(element,index) {
        html+=`<div class="popl card m-2" style="width: 18rem;">

    <div class="card-body">
        <h5 class="card-title">NOTE ${index+1}</h5>
        <p id="paras" class="card-text">${element}</p>
        <button id='${index}' onclick='deletes(this.id)' class="btn btn-primary">DELETE</button>
    </div>
</div>`
        
    });
    let noteElm=document.getElementById('notes')
    let BOX=document.querySelector('.box')
    
   
    if(noteobj.length!=0){  
        noteElm.innerHTML=html
    }
    else{
        noteElm.innerHTML=`<b>NOTHING TO SHOW "SAVE YOUR NOTES"</b>`;
    }
}
function deletes(ele){
  
    let notes = localStorage.getItem("notes");
    if (notes == null) {
      noteobj = [];
    } else {
      noteobj = JSON.parse(notes);
    }
    noteobj.splice(ele,1);
    localStorage.setItem('notes',JSON.stringify(noteobj));
    shownotes()
}

let search=document.getElementById('sete');
search.addEventListener('input',function(){
    let inp = search.value.toLowerCase();
    let nc=document.getElementsByClassName('popl')
    Array.from(nc).forEach(function(els){
        let pt=els.getElementsByTagName('p')[0].innerText
        if(pt.includes(inp)){
            els.style.display='block'
        }
        else{
            els.style.display='none'
        }
    })    
})