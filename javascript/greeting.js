function greeting() {
    let blocks = $('.greeting .row .block');
    colorizeBlocks(blocks);
    shuffleBlocks(blocks);

    for (let block in blocks) {
        if (blocks.hasOwnProperty(block)) {
            setTimeout(function () {
                $(blocks[block]).fadeTo(1000, 1);
                $(blocks[block]).fadeTo(1000, 0);
            }, block * 500);
        }
    }
}

function colorizeBlocks(blocks) {
    for (let block in blocks) {
        if (blocks.hasOwnProperty(block)) {
            let hue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
            $(blocks[block]).css("background-color", hue);
        }
    }
}

function shuffleBlocks(blocks) {
    blocks.sort(() => Math.random() * 2 - 1);
}
