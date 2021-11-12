// FUNDAMENTOS DO JAVA SCRIPT



//const nomeCliente = " Josepha"
//const idadeMinima = 18;
//let idadeCliente = 19;
//const bebidaAlcoolica = "Cerveja";
//const bebidaNaoAlcoolica = "Suco";

//const pedido = `Boa noite, meu nome é ${nomeCliente}, tenho ${idadeCliente} anos, e gostaria de beber ${idadeCliente >= idadeMinima ? bebidaAlcoolica : bebidaNaoAlcoolica} `

//console.log(pedido)


//------------------------------------------------------------------------------------------------------------


//const primeiroNumero = 10;
//const segundoNumero = 20;

//const somaDosNumeros = primeiroNumero + segundoNumero

//console.log(somaDosNumeros)

//console.log(primeiroNumero + segundoNumero)

//console.log(somaDosNumeros === primeiroNumero)


//------------------------------------------------------------------------------------------------------------

// medias = 10 / 6.5 / 8 / 7.5

//let nota1 = 10
//let nota2 = 6.5
//let nota3 = 8
//let nota4 = 7.5

//let media = (nota1 + nota2 + nota3 + nota4)/4

//let notas = [10, 6.5, 8, 7.5]
//notas.push(3)

//let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//console.log(notas)
//console.log(media)

//let nomeAluno = "José"
//let notas = [10, 6.5, 8, 7.5, 7.5]
//notas.pop()


//let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length

//console.log(notas)
//console.log(`a media final do ${nomeAluno} é ${media} `)

//------------------------------------------------------------------------------------------------------------

// SLICE # DIVIDE A ARRAY

//const nomes = ["Marcos", "Paulo", "Gabriel", "Gabriela", "Caio", "Kaique", "Josefa", "Fernando", "Gustavo", "Rodrigo", "Ricardo", "Fernanda", "Tatiane", "Talita", "Marcela", "Silvia", "Silvana", "Bianca", "Henrique", "Rick", "Jose", "Dirce", "Dalva", "Vivi"]
//nomes.push("Yasmin")
//nomes.push("Sophia")
//let sala1 = nomes.slice(0,nomes.length/2)
//let sala2 = nomes.slice(nomes.length/2)

//console.log(`Alunos da sala 1 : ${sala1}`)
//console.log("########################")
//console.log(`Alunos da sala 2 : ${sala2}`)


//------------------------------------------------------------------------------------------------------------


// SPLICE # APAGA ALGUM ITEM E/OU SUBSTITUI, INCLUI OUTRO INTEM

//const nomes = ["Ana", "Caio", "Rodrigo", "Leo", "Yasmin", "Theo"]

//nomes.splice(1,2,"Sophia")

//console.log(nomes)

//nomes.splice(0,0,"Taioba")

//console.log(nomes)


//------------------------------------------------------------------------------------------------------------


// CONCAT # CONCATENA ARRAYS

//const salaDePython = ['Lira', 'Pedro', 'José']
//const salaDeJavaScript = ['Ju', 'Léo', 'Marcos']

//const salaDaPalestra = salaDePython.concat(salaDeJavaScript)

//console.log(`Os alunos que vão participar da palestra são : ${salaDaPalestra}`)

//ARRAY 2 DIMENSÕES ## LISTA DE NTRO DE LISTA


//const alunos = ['João', 'Maria', 'Jose', 'Judas', 'Jesus']
//const media = [7,8,5,2,10]

//const listaDeAlunosENotas = [alunos, media]


//console.log(`${listaDeAlunosENotas[0][0]}, sua media final é ${listaDeAlunosENotas[1][0]}`)
//console.log(`${listaDeAlunosENotas[0][1]}, sua media final é ${listaDeAlunosENotas[1][1]}`)
//console.log(`${listaDeAlunosENotas[0][2]}, sua media final é ${listaDeAlunosENotas[1][2]}`)
//console.log(`${listaDeAlunosENotas[0][3]}, sua media final é ${listaDeAlunosENotas[1][3]}`)
//console.log(`${listaDeAlunosENotas[0][4]}, sua media final é ${listaDeAlunosENotas[1][4]}`)
//ERRADO
//console.log(`${listaDeAlunosENotas[1][0]}, sua media final é ${listaDeAlunosENotas[0][3]}`)


//------------------------------------------------------------------------------------------------------------


// FUNÇÕES IF

//const alunos = ['Ana', 'Fabricio', 'Laura', 'Maria']
//const notaDosAlunos = [5,6,8,9]

//let listaDeNotasEAlunos = [alunos, notaDosAlunos]

//const exibeNota = (nomeDoAluno) => {
    //if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        //let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        //return listaDeNotasEAlunos[0][indice] + ' sua media é : ' + listaDeNotasEAlunos[1][indice]
    //}else {
       // return 'Aluno não cadastrado no sistema'
    //}
//}

//console.log(exibeNota('Ana'))
//################################################################################################
//####.include - vai ver se o existe o 'valor' que vc procura na lista.                        ###
//####.indexOf - vai devolver a posição da sua pesquisa no array, vai te dar o numero do indice###
//################################################################################################

//------------------------------------------------------------------------------------------------------------

//FOR  


//const numeros = [10, 20, 30, 40, 50, 60, 70]

//for (i=0; i<numeros.length;i++){
   // console.log(i, numeros[i])
//}


//------------------------------------------------------------------------------------------------------------


// MEDIA COM FOR

//const notas = [10, 6.5, 8, 7.5]

//let somaDasNotas = 0

//for (i=0; i<notas.length; i++){
  //  somaDasNotas = somaDasNotas + notas[i]
//}

//let media = somaDasNotas/notas.length

//console.log(media)


//------------------------------------------------------------------------------------------------------------


// FOR.EACH 

//const notas = [ 10, 6.5, 8, 7.5]

//let somaDasNotas = 0

//notas.forEach(nota => {
  //  somaDasNotas += nota
//})     

//let media = somaDasNotas/notas.length


//console.log(media)


//------------------------------------------------------------------------------------------------------------

// MAP - ela entra em 1 por 1 para fazer a modificação

//const notas = [10, 9, 8, 7, 6]

//let notasAtualizadas = notas.map( nota => nota == 10 ? nota : ++nota)

//console.log(notasAtualizadas)


//####################################################################
// #MAP NAS STRINGS + TOUPPERCASE = deixa todas as letras em maiusculo
//####################################################################

//let nomes = ["ana Julia", "Caio vinicius", "MARCOS paulo"]

//const nomesAtualizados = nomes.map( nome => nome.toUpperCase())

//console.log(nomesAtualizados)

//ex::::::: treinamento::::::

//const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

//let arrayNumerosAtualizado = arrayNumeros.map(numero => numero*10)

//console.log(arrayNumerosAtualizado)

//::::::::::::::::::::::OOOUUUU:::::::::::::::::::::

//const arrayNumeros = [1,2,3,4,5,6,7,8,9,10]

//function multiplicaPorDez(num){
 //   return num*10
//}

//const arraySomada = arrayNumeros.map(multiplicaPorDez)

//console.log(arraySomada)


//------------------------------------------------------------------------------------------------------------


// FILTER ## FILTRAR O QUE PROCURO E ME DEVOLVER OS RESULTADOS.

//const nomes = ["Rodrigo", "Marcos", "Gabriela", "Mirela", "Hellena"]
//const notas = [7, 4.5, 8, 9.75, 5]


//const reprovados = nomes.filter((aluno, indice) => notas[indice] < 6)

//const notaReprovada = notas.filter((nota, indice) => notas[indice] < 6)

//console.log(reprovados)
//console.log(notaReprovada)

//console.log(`Os alunos reprovados foram: ${reprovados} , com as notas: ${notaReprovada}`)


//------------------------------------------------------------------------------------------------------------

// REDUCE ## VAI REDUZIR UMA ARRAY PRA UM NUMERO SÓ.... VAMOS SOMAR TODAS AS NOTAS

//const salaJS = [10, 4, 6, 7, 8, 4.5, 7.5, 9, 10, 5]
//const salaJava = [5, 6, 7, 9, 4.5, 5.5, 7, 8]
//const salaPython = [9, 5, 7, 6, 10, 5, 6, 3]

//function mediaDaSala(notasDaSala){
   // const somaDasNotas = notasDaSala.reduce((acum, atual)=> atual + acum, 0)
   // return somaDasNotas/notasDaSala.length  
//}

//console.log(`A média da sala de JavaScript é ${mediaDaSala(salaJS)}`)
//console.log(`A média da sala de Java é ${mediaDaSala(salaJava)}`)
//console.log(`A média da sala de Python é ${mediaDaSala(salaPython)}`)

//::::::::::::::::::::::::::exercicio:::::::::::::::::::::::::::::::

//const numeros = [56, 44, 66, 10, 5, 40, 55]

//const soma = numeros.reduce((acum, atual) => atual + acum, 0)

//console.log(soma)


//------------------------------------------------------------------------------------------------------------

























