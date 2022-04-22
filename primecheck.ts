var num:number=19;
var i:number;
if(num)
{
var chk:number=0;
for(i=2;i<num;i++)
{
if(num%2==0)
{
chk++;
break;
}
}
if(chk==0)
{
console.log("is prime");
}
else
{
console.log("is  not prime");
}
}

