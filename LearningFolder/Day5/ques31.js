let str = "Hello How are you";

function strToWord(str){
    const space = str.trim();

    if(space === ''){
        return 0;
    }

    const words = space.split(/\s+/);
    return words.length;
}

console.log(strToWord(['Hello How Are You']));
