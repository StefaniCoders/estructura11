function rectangulo(base,altura){
  this.base=base;
  this.altura=altura;


}
var rec=new rectangulo(10,20);

console.log(rec);
var area = rec.base * rec.altura;
console.log(area);
