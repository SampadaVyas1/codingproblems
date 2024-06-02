
const array=[1,3,5,6];
array.forEach((el) => console.log(el))

function printForEach(el)
{
    console.log(el)
}

Array.prototype.myforEach = function (callback)
{
    console.log(this)
    for (i = 0; i < this.length; i++)
    {
        callback(this[i])
        }
}
array.myforEach(printForEach)