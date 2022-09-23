//하샤드수
function solution(x) {
    let answer = 0
    x = x.toString()  //문자열로 변환 -> 배열 ex) 123
    for (let i = 0; i < x.length; i++){  //n.length -> 3
      answer += parseInt(x[i])
    }
    if(x % answer === 0){
        return true
    } else {
        return false
    }
}