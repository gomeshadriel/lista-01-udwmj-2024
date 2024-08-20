function calcularAniversario() {
    // Solicita a data de nascimento do usuário
    var nascimento = prompt("Digite sua data de nascimento (formato: DD/MM/AAAA):");

    // Divide a data de nascimento em dia mes e ano
    var partesData = nascimento.split("/");
    var diaNascimento = parseInt(partesData[0]);
    var mesNascimento = parseInt(partesData[1]);
    var anoNascimento = parseInt(partesData[2]);

    // Obtém a data atual
    var hoje = new Date();
    var diaAtual = hoje.getDate();
    var mesAtual = hoje.getMonth() + 1; // Os meses em JavaScript vão de 0 a 11 por isso precisamos somar mais um para tratar a exibição para o usuário.
    var anoAtual = hoje.getFullYear();

    // Calcula a idade
    var idade = anoAtual - anoNascimento;
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--; // Se o mês ou dia atual for antes do aniversário, subtrai 1 da idade
    }

    // Calcula o tempo até o próximo aniversário
    var proximoAniversarioAno = anoAtual;
    if (mesAtual > mesNascimento || (mesAtual === mesNascimento && diaAtual > diaNascimento)) {
        proximoAniversarioAno++; // Se o aniversário já passou neste ano, considera o ano seguinte
    }
    var proximoAniversario = new Date(proximoAniversarioAno, mesNascimento - 1, diaNascimento);
    var diferenca = proximoAniversario - hoje;
    var diasFaltando = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // Converte a diferença de milisegundos para dias

    // imprime os resultados para o usuário.
    alert("Você tem " + idade + " anos.");
    alert("Faltam " + diasFaltando + " dias para o seu próximo aniversário.");
}

// Chama a função para executar o programa
calcularAniversario();
