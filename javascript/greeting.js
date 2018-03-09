function greeting() {
    let blocks = $('.greeting .row .block');
    colorizeBlocks(blocks);
    shuffleBlocks(blocks);

    for (let index = 0; index < blocks.length; index++) {
        setTimeout(function () {
            let block = blocks[index];
            $(block).fadeTo(1000, 1);
            $(block).fadeTo(1000, 0);
        }, index * 750);
    }

    setTimeout(function () {
        $('.greeting').remove();
    }, (blocks.length - 1) * 750);
}

function colorizeBlocks(blocks) {
    let generateColor = function () { return Math.floor((256 - 199) * Math.random()) + 200};
    for (let index = 0; index < blocks.length; index++) {
        $(blocks[index])
            .css("background-color",
                'rgb(' + generateColor() + ',' + generateColor() + ',' + generateColor() + ')');
    }
}

function shuffleBlocks(blocks) {
    blocks.sort(() => Math.random() * 2 - 1);
}

/*
 <div class="greeting container-fluid">
     <div class="row">
         <div class="block col-sm-4">Community</div>
         <div class="block col-sm-4">Knowledge</div>
         <div class="block col-sm-4">Friendship</div>
     </div>
     <div class="row">
         <div class="block col-sm-4">Skills</div>
         <div class="block col-sm-4">Meetups</div>
         <div class="block col-sm-4">Tech talks</div>
     </div>
     <div class="row">
         <div class="block col-sm-4">Chats</div>
         <div class="block col-sm-4">IT</div>
         <div class="block col-sm-4">Development</div>
     </div>
     <div class="row">
         <div class="block col-sm-4">QA</div>
         <div class="block col-sm-4">UI/UX</div>
         <div class="block col-sm-4">DevOps</div>
     </div>
     <div class="row">
         <div class="block col-sm-4">Management</div>
         <div class="block col-sm-4">Innovations</div>
         <div class="block col-sm-4">Improvement</div>
     </div>
 </div>
*/
