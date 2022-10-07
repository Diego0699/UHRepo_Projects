export class Product{
    public name: string;
    public price: number;
    public imagePath:string;
    public frecuency:string;
    public cores:string;


    constructor(name:string, price:number,imagePath:string){
        this.name=name;
        this.price=price;
        this.imagePath=imagePath;


    }
}