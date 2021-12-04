function Stamp() {
    var date = new Date();
    var d = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
    var t = date.getHours() + "-" + date.getMinutes() + "-" + date.getSeconds();
    return d + "      " + t;
}
console.log(Stamp());