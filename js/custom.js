// Add your custom JS code here
var uploadField = document.getElementById("file");

uploadField.onchange = function() {
    if(this.files[0].size > 1000000){
       alert("Il File è troppo grande!");
       this.value = "";
    };
};