var addmore = document.querySelector(".add-more");
var btntxt = document.querySelector(".btntxt");
var blocks = document.querySelector(".blocks");
var block_btns = document.querySelectorAll(".block-btn");
var block_s = document.querySelectorAll(".block");


addmore.addEventListener('click', (e) => {
    if(btntxt.value != ""){
        e.preventDefault();
        var block = document.createElement('div');
        block.block_txt.innerHTML = btntxt.value;
        blocks.appendChild(block);
        var block_txt = document.querySelector(".block-txt");
        var block_btns = document.querySelectorAll("block-btn");
        MinusBtn(block_btns);
    }
    btntxt.value = '';
});
MinusBtn(block_btns);
function MinusBtn(block_btns){
    block_btns.forEach(blockBtn => {
        blockBtn.addEventListener('click', (e) => {
            if(block_btns.length > 2){
                e.preventDefault();
                blockBtn.parentElement.style.opacity = "0"
                setInterval( () => {blockBtn.parentElement.remove();}, 500);
            }
        });
    });
}