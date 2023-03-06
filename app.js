const menuItem=[
    {
        id:1,
        item:"Hotem menu1",
        oneliner:"Lorem ipsum dolor sit amet.",
        img:"./Images/1.jpg",
        hotel:"Hotel Name1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi corporis ad doloribus. Aut nulla voluptas rem repudiandae totam autem explicabo! Rem ratione animi ad beatae dolores voluptates commodi tempore?10",



    },
    {
        id:2,
        item:"Hotem menu2",
        oneliner:"Lorem ipsum dolor sit amet.",
        img:"./Images/2.jpg",
        hotel:"Hotel Name2",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi corporis ad doloribus. Aut nulla voluptas rem repudiandae totam autem explicabo! Rem ratione animi ad beatae dolores voluptates commodi tempore?10",
        


    },
    {
        id:3,
        item:"Hotem menu3",
        oneliner:"Lorem ipsum dolor sit amet.",
        img:"./Images/3.jpg",
        hotel:"Hotel Name3",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi corporis ad doloribus. Aut nulla voluptas rem repudiandae totam autem explicabo! Rem ratione animi ad beatae dolores voluptates commodi tempore?10",
        


    },
    {
        id:4,
        item:"Hotem menu4",
        oneliner:"Lorem ipsum dolor sit amet.",
        img:"./Images/4.jpg",
        hotel:"Hotel Name1",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi corporis ad doloribus. Aut nulla voluptas rem repudiandae totam autem explicabo! Rem ratione animi ad beatae dolores voluptates commodi tempore?10",
        


    },
    {
        id:5,
        item:"Hotem menu5",
        oneliner:"Lorem ipsum dolor sit amet.",
        img:"./Images/5.jpg",
        hotel:"Hotel Name5",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi corporis ad doloribus. Aut nulla voluptas rem repudiandae totam autem explicabo! Rem ratione animi ad beatae dolores voluptates commodi tempore?10",
        


    }
]
const item=document.getElementById('item');
const oneliner=document.getElementById('oneliner');
const img=document.getElementById('img');
const hotel=document.getElementById('hotel');
const description=document.getElementById('description');
const prev=document.getElementById('prev');
const random=document.getElementById('random');
const next=document.getElementById('next');

let curruent_menu=0;
window.addEventListener('DOMContentLoaded',function(){
    //let menu=menuItem[curruent_menu];
    //item.textContent=menu.item; 
    //oneliner.textContent=menu.oneliner;
    //img.textContent=menu.img;
    //hotel.textContent=menu.hotel;
    //description.textContent=menu.description;
    //prev.textContent=menu.prev;
    //random.textContent=menu.random;
    //next.textContent=menu.next;
   allmenu(curruent_menu);
})
const allmenu=()=>{
    let menu=menuItem[curruent_menu];
    item.textContent=menu.item; 
    oneliner.textContent=menu.oneliner;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    description.textContent=menu.description;


}
random.addEventListener('click',()=>{
    curruent_menu=Math.floor(Math.random()*menuItem.length);
    console.log(curruent_menu);
    allmenu(curruent_menu);
})
prev.addEventListener('click',()=>{
   curruent_menu--;
   if(curruent_menu<0)
   {
       curruent_menu=menuItem.length-1;
   }
    allmenu(curruent_menu);
})
next.addEventListener('click',()=>{
    curruent_menu++;
    if(curruent_menu>menuItem.length-1){
         curruent_menu=0;
    }
     allmenu(curruent_menu);
 })
