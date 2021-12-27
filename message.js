const di =document.getElementById('di');
const btn= document.getElementById('btn');

btn.addEventListener('click',()=>{
   dothis()
})

function dothis(){
    const div= document.createElement('div');
    div.classList.add('msg');
    div.innerText="your notification"
    di.appendChild(div);

    setTimeout(()=>{
         div.remove();
    },4000)
}