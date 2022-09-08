var addmore = document.querySelector(".add-more");
var btntxt = document.querySelector(".btntxt");
var blocks = document.querySelector(".blocks");
var block_btns = document.querySelectorAll(".block-btn");
var blocks_s = document.querySelectorAll(".block");


addmore.addEventListener('click', (e) => {
    if(btntxt.value != ""){
        e.preventDefault();
        var block_s = document.querySelectorAll(".block");
        var block = block_s[0].cloneNode(true);
        blocks.prepend(block);
        var block_s = document.querySelectorAll(".block");
        var block_txt = document.querySelector(".block-txt");
        var block_btns = document.querySelectorAll(".block-btn");
        block_txt.innerHTML = btntxt.value;
        MinusBtn(block_btns);
    }
    btntxt.value = '';
});
MinusBtn(block_btns);
function MinusBtn(block_btns){
    block_btns.forEach(blockBtn => {
        blockBtn.addEventListener('click', (e) => {
            if(block_btns.length != 1){
                e.preventDefault();
                blockBtn.parentElement.remove();
            }
        });
    });
}