let num = 0;
localStorage.setItem('iteration' = num);
setTimeout(function(){
    console.log('');
    num = localStorage.getItem('iteration')
    if (num === 0){
    window.location.href = "preloader.html";
    increase();
    }
});

increase(function(){
    console.log('');
    if (num === 0){
    num++;
    localStorage.setItem('iteration' = num);
    }
});

