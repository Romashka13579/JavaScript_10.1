var addmore = document.querySelector(".add-more");
var btntxt = document.querySelector(".btntxt");
var blocks = document.querySelector(".blocks");

addmore.addEventListener('click', (e) => {
    if(btntxt.value != ""){
        e.preventDefault();
        var block_s = document.querySelectorAll(".block");
        var block = block_s[0].cloneNode(true);
        blocks.prepend(block);
        var block_s = document.querySelectorAll(".block");
        var block_txt = document.querySelector(".block-txt")
        block_txt.innerHTML = btntxt.value
    }
});