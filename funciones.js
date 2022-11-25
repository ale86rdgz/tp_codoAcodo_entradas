
document.getElementById("calcular").addEventListener("click", calcular);

function calcular(){
    let precioBase = 200;
    let cant = document.getElementById("cantidad").value;
    let categoria = document.getElementById("categoria").value;
  
    document.getElementById("mostrarMensaje").value = "Total a Pagar: $ "+cant*(precioBase-((precioBase*categoria)/100));
   
}




 