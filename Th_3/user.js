var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, userName, password) {
        this.name = name;
        this.userName = userName;
        this.password = password;
    }
    User.prototype.login = function (name, password) {
        if (name === this.userName && password === this.password) {
            console.log("Login success");
        }
        else {
            console.log("Login failed,check username and password");
        }
    };
    User.prototype.setPassword = function (newPassword) {
        var isValid = false;
        isValid = this.validateUsernameOrPassword(newPassword);
        if (isValid) {
            this.password = newPassword;
        }
        else {
            console.log('Password not valid');
        }
    };
    User.prototype.validateUsernameOrPassword = function (text) {
        if (text.length > 6) {
            return true;
        }
        return false;
    };
    return User;
}());
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author(email, name, userName, password) {
        var _this = _super.call(this, name, userName, password) || this;
        _this.email = email;
        _this.numOfPost = 0;
        return _this;
    }
    Author.prototype.createPost = function () {
        this.numOfPost++;
    };
    Author.prototype.getNumPost = function () {
        return this.numOfPost;
    };
    return Author;
}(User));
var author1 = new Author('hzdkv@example.com', 'john', 'john123', '1234567');
author1.createPost();
author1.getNumPost();
author1.login('john', '1234567');
console.log(author1.email, author1);
var user1 = new User('john', 'john123', '1234567');
console.log(user1.userName);
//console.log(user1.name); 
user1.login('john123', '1234567');
user1.setPassword('1234');
user1.login('john123', '123');
