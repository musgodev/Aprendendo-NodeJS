const perguntas = [
    "Oque aprendi hoje?",
    "Qual foi minha maior dificuldade nesse novo aprendizado?",
    "Como posso melhorar os conhecimentos obtidos?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n" + perguntas[index] + " > ")
}

ask()

const respostas = []

process.stdin.on("data", data => {
    respostas.push(data.toString().trim())
    if (respostas.length < perguntas.length) {
        ask(respostas.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(
        
        `
        \n Confira suas repostas:

        ${perguntas[0]}
        ${respostas[0]}

        ${perguntas[1]}
        ${respostas[1]}

        ${perguntas[2]}
        ${respostas[2]}
        
        `
    )
})

// process.on("oque vai ser ouvido" , () => {} ) = mantem um processo de escuta, fazendo com que ele rode após algo acontecer

// process.stdout.write("") = funciona como o console.log("") por debaixo dos panos

// process.stdin.on("data", (data) => {}) = esse trecho faz com que haja um processo de entrada ao mesmo tempo que é combinada com um on, fazendo com que fique escutando constantemente, no caso ele espera a entrada de um dado o "data", e passa esse data como argumento para a arrow function, como esse data é a resposta para a nossa pergunta, ele é adicionado em um array vazio que nomeamos de respostas e utilizamos um if else passando o tamanho do array de respostas no lugar do index = 0, para que ele continue nos perguntando ate que o numero que repostas seja igual ao numero existente dentro do array de perguntas

// process.exit() = é responsavel por parar o process.on() ja que ele continua escutando infinitamente