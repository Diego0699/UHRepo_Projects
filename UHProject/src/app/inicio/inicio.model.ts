export class ProductInicio{
    public id:number;
    public name: string;
    public price: number;
    public imagePath:string;
 

    constructor(id:number,name:string, price:number,imagePath:string){
        this.id=id;
        this.name=name;
        this.price=price;
        this.imagePath=imagePath;


    }
}