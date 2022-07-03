export default class Client{

    firstName:string;
    lastName:string;
    email: string;
    cep:number;
    password:string;
    address:string;
    phone:number;
    level:number;
    xp:number;

    constructor(client:any){
      this.firstName = client.First;
      this.lastName = client.lastName;
      this.email = client.email;
      this.cep = +client.cep;
      this.address = client.address;
      this.phone = client.phone;
      this.password = client.password;
      this.level = 1;
      this.xp = 0;
    }

}
