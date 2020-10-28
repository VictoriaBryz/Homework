exports.myMessage = function (username) {
    let time = new Date().getHours();
    let message = "";
    switch(true){
        case (time > 5 && time <= 11) :
            message = "Good morning, " + username;
            break;
        case (time > 11 && time <= 17) :
            message = "Good afternoon, " + username;
           break;
        case (time > 17 && time <= 23):
           message =  "Good evening, " + username;
           break;
        default:
           message = "Good night, " + username;
   
    };
    return message;
};
exports.myDateTime = function () {
    return Date();
}