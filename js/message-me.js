function sendMessage(){
    let messageBody = document.getElementById("messages");
    let oldMessageBody = messageBody.innerHTML;

    let content = document.getElementById("message-content").value;
    $.ajax({
        type : "POST",  //type of method
        url  : "message.php",  //your page
        data : { messageContent : content},// passing the values
        success: function(res){
            messageBody.innerHTML = "" +
                "<div class=\"w-75\">\n" +
                "   <span class=\"message-me\">Your message has been sent ✉️ I will get back to you soon!</span>\n" +
                "</div>";

            setTimeout(function () {
                messageBody.innerHTML = oldMessageBody;
            }, 10 * 1000);
        }
    });
}