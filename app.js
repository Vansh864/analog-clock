setInterval(() => {
    let currentTime = new Date();
    let hour = currentTime.getHours();
    let minute = currentTime.getMinutes();
    let second = currentTime.getSeconds();
    
    document.querySelector(".hour").style.rotate = `${(hour*30)+(minute*0.5)}deg`;
    document.querySelector(".minute").style.rotate = `${minute*6}deg`;
    document.querySelector(".second").style.rotate = `${second*6}deg`;
}, 1);