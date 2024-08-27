// foreach loop or itrable

let Arryname=[1,2,3,4,5,6,7]
 Arryname.forEach((iteam,index)=>{
 console.log(index)
 console.log(iteam)
 
 if(iteam>5){
    console.log(iteam);
    
 }
 else{
    console.log(iteam);
    
 }
})

//maping concept

Arryname.map((iteam,index)=>{
    console.log(iteam)

    if(iteam>4){
        
        return iteam;
}

    else{
        return iteam;
    }

    
})

const CallMap=Arryname.unshift(100)
console.log(Arryname);
console.log(CallMap);

//higherorder Function
//sureshbabu sir asked Queastion

const HorFun=()=>{
    console.log("Hi my name is Diwakar")

    return function NormalFun(a,b){
        console.log("here the Answer",a+b)
    }
}
const CallFun=HorFun()
CallFun(10,20)//passing a parameter


// sir its your First Question to Ask your student to slove the problem as your student. i will slove your question

function FirstFun(){
    console.log("suresh sir Question")

     return function SecFun(){
     console.log("Diwakar slove the Question");
}

}
const Answer=FirstFun()
Answer()//sir you said that call the sec function below the end of the first function

//jsion

let json=[{name:"diwakar",age:20, Myguruis:"sureshbabu sir"}] 

    console.log(json);    

    
