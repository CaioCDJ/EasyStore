export default interface Product {

    name:string ;    
    value:number;    
    qt:number;    
    ds:string;    
    categorie:string;

    constructor(product:any){
      this.name = product..name;
      this.value = product.value;
      this.qt = product.qt;
      this.ds = product.ds;
      this.categorie = product.categorie;
    }
}
