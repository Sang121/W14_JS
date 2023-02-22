class User{
   private name:String;
    userName:String;
    password:String;
    constructor(name:String, userName:String, password:String){
        this.name = name;
        this.userName = userName;
        this.password = password;
    }
    login(name:String, password:String){

        if(name === this.userName && password === this.password){
            console.log("Login success");

        }
        else{
            console.log("Login failed,check username and password");

            }
        }
    setPassword(newPassword:string){
        let isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword
        } else {
            console.log('Password not valid');
        }
     }
     validateUsernameOrPassword(text: string): boolean {
        if (text.length > 6) {
            return true;
        }
        return false;}

}
class Author extends User{
    numOfPost: number;
    email: String;
    constructor(email:String,name:String, userName:String, password:String){
        super(name, userName, password);
        this.email = email;
        this.numOfPost = 0;
    }
    createPost(){
this.numOfPost++;}
getNumPost(){
    return this.numOfPost;}

}
let author1:Author=new Author('hzdkv@example.com', 'john', 'john123', '1234567');
author1.createPost();
author1.getNumPost();
author1.login('john123', '1234567');
console.log(author1.email, author1);




let user1:User=new User('john', 'john123', '1234567');
console.log(user1.userName);
//console.log(user1.name); 

user1.login('john123', '1234567');
user1.setPassword('1234');
user1.login('john123', '123');




