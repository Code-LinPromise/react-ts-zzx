export function randomNum(minNum:number,maxNum:number){
    switch(arguments.length){
        case 1:
            return parseInt(String(Math.random() * minNum + 1),10);
            break;
        case 2:
            return parseInt(String(Math.random() * (maxNum - minNum + 1) + minNum),10);
            break;
        default:
            return 0;
            break;
    }
}