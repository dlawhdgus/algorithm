//자릿수더하기
function solution(n) {
    let arr =[];
    let string_n = String(n).split('')
    for(let i = (string_n.length)-1; i>=0; i--){
        arr.push(Number(string_n[i]))
    }
    return arr
}