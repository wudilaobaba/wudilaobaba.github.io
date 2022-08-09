const top1 = document.getElementsByClassName('inner')[0];
const tiao = document.getElementsByClassName('inner-tiao')[0]
let left = 0;
setInterval(()=>{
  left-=3;
  top1.style.left = left+'px'
  tiao.style.left = left+'px'
  // console.log(top1.style.lef/t)
},100)

const tim = document.getElementsByClassName('timer')[0];
setInterval(()=>tim.innerHTML = `${(new Date().getHours()+"").padStart(2,'0')}:${(new Date().getMinutes()+"").padStart(2,'0')}:<span class="cu">${(new Date().getSeconds()+"").padStart(2,'0')}</span> &nbsp;&nbsp;&nbsp;${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${(new Date().getDate()).toString().padStart(2,'0')}`,1000)

const bottom = document.getElementsByClassName('bottoms')[0];
bottom.innerHTML = `${(new Date().getMonth()+1).toString().padStart(2,'0')}/${(new Date().getDate()).toString().padStart(2,'0')} 7时`

const itime = document.getElementsByClassName('intime')[0];
let six = 60;
setInterval(()=>{
  six--;
  if (six === 0){
    six = 9;
  }
  itime.innerHTML = six.toString().padStart(2,'0')
},1000)

const btn = document.body
btn.onclick = ()=>{
  if(document.body.style.backgroundImage === 'url("./qq.jpg")'){
    document.body.style.backgroundImage = 'url("./dt1.jpg")';
    xxx('none')
  }else{
    document.body.style.backgroundImage = 'url("./qq.jpg")';
    xxx('block')
  }
}

function xxx(typing) {
  document.getElementsByClassName('inner')[0].style.display = typing;
  document.getElementsByClassName('user')[0].style.display = typing;
  document.getElementsByClassName('time')[0].style.display = typing;
  document.getElementsByClassName('tiao')[0].style.display = typing;
  document.getElementsByClassName('id')[0].style.display = typing;
  document.getElementsByClassName('update')[0].style.display = typing;
}

// const n1 = new Date(new Date().getTime()-24*60*60*1000*1)
// // document.getElementsByClassName('time1')[0].innerHTML = `${n1.getFullYear()}-${(n1.getMonth()+1).toString().padStart(2,'0')}-${n1.getDate().toString().padStart(2,'0')} 21时`
// const n2 = new Date(new Date().getTime()-24*60*60*1000*0)
// document.getElementsByClassName('time4')[0].innerHTML = `${n2.getFullYear()}-${(n2.getMonth()+1).toString().padStart(2,'0')}-${(n2.getDate()).toString().padStart(2,'0')} 7时`
//
// const n3 = new Date(new Date().getTime()-24*60*60*1000*2)
// document.getElementsByClassName('time2')[0].innerHTML = `${n3.getFullYear()}-${(n3.getMonth()+1).toString().padStart(2,'0')}-${(n3.getDate()).toString().padStart(2,'0')} 19时`
//
// document.getElementsByClassName('time3')[0].innerHTML = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${(new Date().getDate()).toString().padStart(2,'0')} 7时`
// document.getElementsByClassName('time5')[0].innerHTML = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${(new Date().getDate()).toString().padStart(2,'0')} 7时`
// document.getElementsByClassName('time6')[0].innerHTML = `${new Date().getFullYear()}-${(new Date().getMonth()+1).toString().padStart(2,'0')}-${(new Date().getDate()).toString().padStart(2,'0')} 7时`