//문자열 내  p와 y의 개수
function solution(s){
    let low = s.toLowerCase()
    let find_p = low.split('p').length
    let find_y = low.split('y').length
    return find_p === find_y ? true : false
}
