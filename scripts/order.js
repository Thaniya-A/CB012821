

window.addEventListener("load",()=>{
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    console.log(cartData);

    const tbody = document.querySelector("#ordertable tbody");
    const grandTotalElement=document.getElementById("grandtotal");
    console.log(tbody);
    let tableData = "";
    let grandTotal=0;
    cartData.forEach((item) => {
      tableData += `
    <tr>
        <td>${item.name}</td>
        <td>${item.quantity}</td>
        <td>$${item.price}</td>
        
        <td>$${item.quantity * item.price}</td>
    </tr>
    `;
    });

    tbody.innerHTML = tableData;
    grandTotalElement.textContent = `Rs.${grandTotal.toFixed(2)}`;
})
