function solution(a, b) {
    let sum,sum1,sum2 = 0

    if(a > b){
        sum = a-b
        for(let i = 0; i<=sum; i++){
            sum1 = a-i
            sum2 = sum2+sum1
            // console.log(`sum1 : ${sum1} sum2 : ${sum2}`)
        }
    } else {
        sum = b-a
        for(let i = 0; i<=sum; i++){
            sum1 = b-i
            sum2 = sum2+sum1
            // console.log(`sum1 : ${sum1} sum2 : ${sum2}`)
        }
    }
    return sum2
}