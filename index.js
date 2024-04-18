console.log('hello world')
// 1
const arrow=(a,b)=>{
  return a*b;
}
console.log(arrow(5,6))
//  2
const student={
   name:'shivpujan',
   age:24,
   greet(){
    console.log('hi i am'+" "+this.name+"."+'my age is  '+this.age)
   }
}
student.greet()