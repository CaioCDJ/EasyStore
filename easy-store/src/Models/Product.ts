export default class Product{

    private _id :Number;
    name: string;
    price: Number;
    qt: Number;
    rating: number;
    description: string;
    categorie: string;
    mainCategorie: string[];
    //pictures[]:Blob; // pior parte

    constructor(id:Number,
                name:string,
                price:Number,
                qt:Number,
                description:string,
                categorie:string,
                rating:number,
                mainCategorie:string[]){

        this._id = id;
        this.name = name;
        this.price = price;
        this.qt = qt;
        this.description = description;
        this.categorie = categorie;
        this.rating = rating;
        this.mainCategorie = mainCategorie;
    }
    
    // getters and setters

}