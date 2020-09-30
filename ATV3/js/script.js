//<script language="JavaScript">
function enviardados(){

	if(document.dados.tx_nome.value=="" || document.dados.tx_nome.value.length < 8){
		alert( "Preencha campo NOME corretamente!" );
		document.dados.tx_nome.focus();
		return false;
	}
	    
	if( document.dados.tx_email.value=="" || document.dados.tx_email.value.indexOf('@')==-1 || document.dados.tx_email.value.indexOf('.')==-1 ){
		alert( "Preencha campo E-MAIL corretamente!" );
		document.dados.tx_email.focus();
		return false;
	}

	if(document.dados.tx_endereco.value=="" || document.dados.tx_endereco.value.length < 15){
		alert( "Preencha campo ENDEREÇO corretamente!" );
		document.dados.tx_endereco.focus();
		return false;
	}

	if(document.dados.tx_celular.value=="" || document.dados.tx_celular.value.length < 11 || document.dados.tx_celular.value.length > 11){
		alert( "Preencha campo CELULAR com o DDD da sua região e sem caracteres especiais" );
		document.dados.tx_celular.focus();
		return false;
	}
	  
	if (document.dados.tx_mensagem.value==""){
		alert( "Preencha o campo MENSAGEM!" );
		document.dados.tx_mensagem.focus();
		return false;
	}
	  
	if (document.dados.tx_mensagem.value.length < 50 ){
		alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
		document.dados.tx_mensagem.focus();
		return false;
	}
	alert("Dados enviados com sucesso!")
	return true;
}
//</script>
