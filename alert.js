const login = () => {

  Swal.fire({
    text: 'Obrigado pela oportunidade!',
    icon: 'success',
    confirmButtonColor: '#8aed95',
    width: '30%',
  })
}

function clicar() {
  var num1 = document.querySelector(".num1").value;
  var num2 = document.querySelector(".num2").value;
  var resultado = parseInt(num1) + parseInt(num2);
  Swal.fire({
    text: resultado,
    confirmButtonColor: '#8aed95',
    width: '20%',
  })
}