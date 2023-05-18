var readline = require('readline-sync');
let i = 0
var nome = ''
while (i <= 50) {
    console.log("+----------------Passagens Aéreas---------------------+")
    console.log("|     1- Comprar Passagem                             |")
    console.log("|     2- Consultar Voos                               |")
    console.log("|     3- Mapa de Assentos                             |")
    console.log("|     4- Emitir Ticket                                |")
    console.log("|     0- Encerrar Programa                            |")
    console.log("+-----------------------------------------------------+")
    var resposta = readline.question('Qual sera sua escolha?')

    switch (resposta) {
        case "1":
            console.log("+----------------Passagens Aéreas---------------------+")
            console.log("     Você esta -->  Comprar Passagens                     ")
            var nome = readline.question('Qual o seu nome? ')
            var sobrenome = readline.question('Qual o seu sobrenome? ')
            var idade = readline.question('Qual a sua idade? ')
            var assento = readline.question('Qual sera o seu assento? ')
            var voo = readline.question('Como sera o trajeto? ')
            var vooFinal = readline.question('Qual será o destino?')
            var nada = readline.question
            console.log("+----------------Passagens Aéreas---------------------+")
            console.log("     Você esta -->  Comprar Passagens                  ")
            console.log('                Resumo da Compra')
            console.log('  Cliente:'+nome+' '+ sobrenome)
            console.log('  Idade: '+idade)
            console.log('  Assento: '+assento)
            console.log('  Voo: '+voo)
            console.log('  Destino: '+vooFinal)
            console.log('  Valor: 3.500,00 $')
            break;

        case "2":
            console.log('+-----------------Passagens Aéreas--------------------+')
            console.log("|     Você esta -->  Consultar Voos                   |")
            console.log('|  Origem                    x  Destino               |')
            console.log('|-----------------------------------------------------|')
            console.log('| Presidente Prudente          Dublin                 |')
            console.log('| Presidente Prudente          Ceará                  |')
            console.log('| Presidente Prudente          São Paulo              |')
            console.log('| Presidente Prudente          Nova York              |')
            console.log('+-----------------------------------------------------+')
            var nada = readline.question("")
            break;

        case "3":
            console.log("+------ Passagens Aéreas ------+")
            console.log("Você está em -> Mapa de Assentos")
            var fileiraA = "";
            var fileiraB = "";
            for (let y = 1; y <= 12; y++) {
                if (assento == "A" + y) {
                    fileiraA += " X "
                    fileiraB += "B" + y + " "
                }
                else if (assento == "B" + y) {
                    fileiraA += " X "
                    fileiraB += "A" + y + " "
                }
                else {
                    fileiraA += "A" + y + " "
                    fileiraB += "B" + y + " "
                }
            }
                console.log(fileiraA)
                console.log(fileiraB)
break;

        case "4":
            if (nome.length > 0) {
                console.log('+-----------------Passagens Aéreas--------------------+')
                console.log('|    Voce esta -->  Emitir Ticket                     |')
                console.log('|                                                     |')
                console.log('|*****************************************************|')
                console.log('|         OBRIGADO POR VIAJAR COM AGENTE              |')
                console.log('|                                                     |')
                console.log('|  Cliente: ' + nome + sobrenome + '                  |')
                console.log('|  Idade: ' + idade + '  Assento ' + assento + '      |')
                console.log('|  Origem/Destino: ' + voo +vooFinal+"                |")
                console.log('+-----------------------------------------------------+')
            }
            else {
                console.log('voce ainda não comprou um ticket')
                var nada = readline.question('')
            }
            break;
        case "0":
            i = 51
            break;
    }
}