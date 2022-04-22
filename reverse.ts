var r:number;
var num:number=153;
 var res:number=0;
while(num!=0)
{
r=(num%10);
res=(res*10)+r;
num=parseInt(""+num/10+"");
}
console.log("reverse "+res);

