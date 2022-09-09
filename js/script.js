var addmore = document.querySelector(".add-more");
var btntxt = document.querySelector(".btntxt");
var blocks = document.querySelector(".blocks");
var block_s = document.querySelectorAll(".block");
var block_btns = document.querySelectorAll(".block-btn");

addmore.addEventListener('click', (e) => {
    if(btntxt.value != ""){
        e.preventDefault();
        var block = document.createElement('div');
        block.className = "block";
        blocks.appendChild(block);
        var block_txt = document.createElement('div');
        block_txt.className = "block-txt";
        block_txt.innerHTML = btntxt.value;
        block.appendChild(block_txt);
        var block_btn = document.createElement('button');
        block_btn.className = "block-btn";
        block.appendChild(block_btn);
    }
    btntxt.value = '';
    var block_btns = document.querySelectorAll(".block-btn");
    blockBtn(block_btns);
});
blockBtn(block_btns);
function blockBtn(block_btns){
    block_btns.forEach(blockBtn => {
        blockBtn.addEventListener('click', (e) => {
            e.preventDefault();
            blockBtn.parentElement.style.opacity = "0"
            setInterval( () => {blockBtn.parentElement.remove();}, 500);
        });
    });
    
}