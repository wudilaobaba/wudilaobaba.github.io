const top1 = document.getElementsByClassName('inner')[0];
const tiao = document.getElementsByClassName('inner-tiao')[0]
let left = 0;
setInterval(() => {
  left -= 3;
  top1.style.left = left + 'px'
  tiao.style.left = left + 'px'
  // console.log(top1.style.lef/t)
}, 100)

const tim = document.getElementsByClassName('timer')[0];
setInterval(() => tim.innerHTML = `${(new Date().getHours() + "").padStart(2, '0')}:${(new Date().getMinutes() + "").padStart(2, '0')}:<span class="cu">${(new Date().getSeconds() + "").padStart(2, '0')}</span> &nbsp;&nbsp;&nbsp;${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, '0')}-${(new Date().getDate()).toString().padStart(2, '0')}`, 1000)

const bottom = document.getElementsByClassName('bottoms')[0];
bottom.innerHTML = `${(new Date().getMonth() + 1).toString().padStart(2, '0')}/${(new Date().getDate()).toString().padStart(2, '0')} 7时`

const itime = document.getElementsByClassName('intime')[0];
let six = 60;
setInterval(() => {
  six--;
  if (six === 0) {
    six = 9;
  }
  itime.innerHTML = six.toString().padStart(2, '0')
}, 1000)

const isMe = window.location.href.includes("id=1")
const btn = document.body
btn.onclick = () => {
  if (isMe) {
    if (document.body.style.backgroundImage === 'url("./qq.jpg")') {
      document.body.style.backgroundImage = 'url("./dt1.jpg")';
      xxx('none')
    } else {
      document.body.style.backgroundImage = 'url("./qq.jpg")';
      xxx('block')
    }
  } else {
    if (document.body.style.backgroundImage === 'url("./qq.jpg")') {
      document.body.style.backgroundImage = 'url("./dt.jpg")';
      xxx('none')
    } else {
      document.body.style.backgroundImage = 'url("./qq.jpg")';
      xxx('block')
    }
  }
}

document.getElementsByClassName('user')[0].innerHTML = isMe ? "王*钧" : "邓*丽"
document.getElementsByClassName('id')[0].innerHTML = isMe ? "22**************10" : "51**************21"

function xxx(typing) {
  document.getElementsByClassName('inner')[0].style.display = typing;
  document.getElementsByClassName('user')[0].style.display = typing;
  document.getElementsByClassName('time')[0].style.display = typing;
  document.getElementsByClassName('tiao')[0].style.display = typing;
  document.getElementsByClassName('id')[0].style.display = typing;
  document.getElementsByClassName('update')[0].style.display = typing;
}

if(!isMe){
  document.getElementsByClassName('time')[0].style.top = '335px';
  document.getElementsByClassName('inner')[0].style.marginTop = '-30px';
  document.getElementsByClassName('top-world')[0].style.top = '200px';
  document.getElementsByClassName('tiao')[0].style.top = '660px';
  document.getElementsByClassName('bottoms')[0].style.top = '708px';
  document.getElementsByClassName('update')[0].style.top = '736px';
}