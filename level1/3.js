//자릿 수 더하기
function solution(n){
    let answer = 0
    n = n.toString()  //문자열로 변환 -> 배열 ex) 123
    for (let i = 0; i < n.length; i++){  //n.length -> 3
      answer += parseInt(n[i])
    }
    return answer; 
    
}