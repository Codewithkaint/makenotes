let noteobj;
let headobj;

console.log('NOTES-WEBSITES')
shownotes()
let btn=document.querySelector('#adBtn');
btn.addEventListener("click",function(e){
    let txt=document.getElementById('adTxt')
    let kl=document.querySelector('.kl')
  
  
    let notes=localStorage.getItem('notes');
  
    if(notes==null){
        noteobj=[]
       
    }
    else{
        noteobj=JSON.parse(notes);
       
    }
    let myobj={
        title:kl.value,
        texts:txt.value.toLowerCase()
    }
    noteobj.push(myobj);
    
    localStorage.setItem('notes',JSON.stringify(noteobj))
 
    txt.value=''
    kl.value=''
   
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
  
    noteobj.forEach(function(element,index)
     {
        
        html+=`<div class="popl card m-2" style="width: 18rem;">

    <div class="card-body">
        
       
        <h5 id="paras" class="card-text">${element.title}</h5>
        <p id="paras" class="card-text">${element.texts}</p>
    
        <button id='${index}' onclick='deletes(this.id)' class="btn btn-primary">DELETE</button>
    </div>
</div>`
       

})

    let noteElm=document.getElementById('notes')

   
    if(noteobj.length!=0){  
        
        noteElm.innerHTML=html
    }
    else{
        noteElm.innerHTML=`<h3>NOTHING TO SHOW "TYPE AND SAVE YOUR NOTES"</h3>`;
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
    Array.from(nc).forEach(function(ep){
        let pt=ep.getElementsByTagName('p')[0].innerText
        if(pt.includes(inp)){
            ep.style.display='block'
        }
        else{
            ep.style.display='none'
        }
    })    
})
