//핸드폰 번호 가리기
function solution(phone_number) {
    let arr = []
    let str = phone_number.split('')
    let arr2=[]
    for(let i = 0; i<str.length; i++){
        arr.push(str[i])
        
    }
    reverse_arr = arr.reverse()
    for(let i =0; i<reverse_arr.length; i++){
        if(i > 3){
            arr2.push('*')
        } else {
            arr2.push(reverse_arr[i])
        }
    }
    let arr3 = arr2.reverse()
    return String(arr3).replace(/,/g,'')
}
solution('01033334444')