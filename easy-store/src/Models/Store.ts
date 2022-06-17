class Store{

    private _id :Number;
    name: string;
    email: string;
    address: string;
    cnpj: Number;
    level: string;
    sells: number;
    accountCreation: Date;
    
    // bank account

    constructor(id,name,email){

        this._id = id;
        this.name = name;
        this.email = email; 
    }

    // getters and setters

    getAddress() {
        return this.address;
    }
}

export default Store;