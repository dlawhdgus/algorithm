let a = [1,2,3,4,5]
let max = []
for(let i = 0; i<a.length; i++){
    
    
    if(a[i] > max){
        max[i] = a[i]
        // max.push(a[i])
    }
}
console.log(max)
// console.log(a)
let b = String(a)
let c = b.replace(/,/g,'')
// console.log(c)