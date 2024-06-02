const array = [1, 3, 5, 6,7,8,900];
// const res = array.filter((el) => el > 3)
// console.log(res)

Array.prototype.myFilter = function (cb)
{
    let res = [];
    for (let i = 0; i < this.length; i++)
    {
        if(cb(this[i])) {
           res.push(this[i]) 
        }
    }
    return res;
}
const res = array.myFilter((el) => el > 3)
console.log(res)