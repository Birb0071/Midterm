function displayFormData() {
    var name = document.getElementById("name").value;
    var id = document.getElementById("id").value;
    var output = document.getElementById("output");

    output.innerHTML = "Thanks for your cooperation"+  "<br>Name: " + name + "<br>ID: " + id ;
}
