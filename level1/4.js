//정수 제곱근 판별
function solution(n) {
    let x = Math.sqrt(n);
    if(Number.isInteger(x)){
        x+=1
        return x*x
    } else {
        return -1
    }
}