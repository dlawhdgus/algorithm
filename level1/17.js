//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    let answer = []
    for(let i =0; i< arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i])
        }
    }
    if(isEmptyArr(answer)){
        console.log(-1)
    }
    else{
        console.log(answer.sort((a,b) => a-b))
    }
}
function isEmptyArr(arr)  {
    if(Array.isArray(arr) && arr.length === 0)  {return true}
    else {return false}
}
solution([3,2,6],10)