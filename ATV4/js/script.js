const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

$(document).ready(function(){
	$('.menu-btn').click(function(){
	  $('.menu-mobile-itens').toggleClass('active');
	});
  });


function Login(event) {
	event.preventDefault();
	var usuario = document.getElementsByName('nome')[0].value;
	usuario = usuario.toLowerCase();
	var senha = document.getElementsByName('senha')[0].value;
	senha = senha.toLowerCase();
  
	if (usuario == "shark" && senha == "123") {
	  alert("Logado com sucesso!!");
	  window.location = "index.html";
	}else{
	  alert("Dados incorretos, tente novamente");
	}
}



