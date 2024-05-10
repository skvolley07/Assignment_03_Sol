let originalNumbers = [2,5,8,10,3]
let modifyArr = [];
originalNumbers.forEach((ele)=>{
    if(ele%2 === 0){
        modifyArr.push(ele)
    }
})
console.log(modifyArr)