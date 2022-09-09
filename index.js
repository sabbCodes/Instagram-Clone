const likeBtn = document.getElementsByClassName("likeBtn");
const picPosts = document.getElementsByClassName("post");

for (let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener("click", function(){
        likeBtn[i].classList.toggle("active");
    })
}

for (let i = 0; i < picPosts.length; i++){
    picPosts[i].addEventListener("dblclick", function(){
        likeBtn[i].classList.toggle("active");
    })
}