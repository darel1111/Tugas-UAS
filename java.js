function prosescheckout(){
    // Get the user's input from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var shippingAddres = document.getElementById('shipping-addres').value;
    var creditcard = document.getElementById('credit-card').value;

    // validate the input
    if (!name || !email || shippingaddres || creditcard ||){
        alert ('Please fill out all fields');
        return;
    }
    // Send the input to the server
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/checkout', true);
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
    xhr.send ('name=' + name + '&email=' + email + '&shippingaddres=' + shippingAddres + '&creditcard=' + creditcard);
    
    // Display a succes message
    alert('Your order has been placed succesfully!');
}