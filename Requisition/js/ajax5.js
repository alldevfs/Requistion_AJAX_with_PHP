
$('#select').change(function(event){
	var input = event.currentTarget.value;
		//console.log(dado)
		retorno = consult(input);
	});

function consult(dado) {
	$.ajax({
		type: 'POST',
		data:  {dado: dado}, 
		url:  'content/data.php',
		async: false
	}).then(sucesso, falha);

	function sucesso(data) {
		/*
		variável data vem do retorno da requisição ajax no qual foi passado o arquivo data.php na pasta content.
		
		*/
		if (data == 'false') {
			alert('Não consta no banco');
		} else {
		 alert(data)
				//Adicionando registros retornados na tabela
				$('#tabela').append('<tr><td>'+data.user_name+'</td><td>'+data.user_email+'</td><td>'+data.user_office+'</td></tr>');
			}
		}
		function falha() {
			alert('Algo deu errado!')
		}
	}

/*
//informações vinherem de um formulário
$('#id_form').submit(function(e) {
	e.preventDefault();
	form = $(this);
	alert(form.serialize());
});
*/

// $(document).ready(function(){
// 				// var i = <?php echo $row['indice_perc']; ?>;
// 				// if (i >= 11.5){
// 					$('#indice').css({"background-color":"#FF3232"}); //vermelhin
// 				// } else if (i >= 11 && i < 11.5){
// 					$('#indice').css({"background-color":"#E88139"}); //laranjinha
// 				// } else if (i >= 10.5 && i < 11) {
// 					$('#indice').css({"background-color":"#FFDC73"}); //amarelin
// 				// } else {
// 					$('#indice').css({"background-color":"#202082"}); //azulzin
// 				// }
// 			})
