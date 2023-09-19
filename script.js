const input=document.querySelector('input');
const btn=document.querySelector('button');
const ul=document.querySelector('.list-container ul');
btn.addEventListener('click',()=>{
    if(input.value===''){
        alert('No Task to Add')
    }
    else{
        let li=document.createElement('li')
        
        li.innerHTML=input.value+'<span>x</span>'
        ul.appendChild(li)
    }
    input.value=''
});

ul.addEventListener('click',(e)=>{
    if (e.target.tagName=='LI') {
        e.target.classList.toggle('complete');
    }
    else if(e.target.tagName=='SPAN'){
        e.target.parentElement.remove();
        
    }
    // console.log(e);
})