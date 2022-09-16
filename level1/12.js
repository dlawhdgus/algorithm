function solution(x, n) {
    let a = []
    let b = []
    let sum = x;
    let sum1 = x;
    let buho = String(x).split("")[0]
    if(buho === '-'){
        for(let i = 0; i<n; i++){
            b.push(sum1)
            sum1 += x
        }
        return b
    } else {
        for(let i = 0; i<n; i++){
            a.push(sum)
            sum += x
        }
        return a
    }
}
//.