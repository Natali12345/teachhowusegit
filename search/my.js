let jsonData = null;
$.ajax({
    url: "my.json",
}).done((data) => {
    jsonData = data;
});
//my edit

$("#btn").click(() => {
    let userWrite = $("#search").val();
    for (let i = 0; i < jsonData.shit.length; i++) {
        let allShit = jsonData.shit[i];
        if (userWrite == allShit.type || userWrite == allShit.name || userWrite == allShit.color) {
            let div = "<div>" + allShit.type + allShit.name + allShit.color + "</div>";
            $("#stuff").append(div);
        }
    }
  

})
 