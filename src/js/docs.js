const gitCommands = [
    {
        name: "git help",
        description: 
    },
    {
        name: 'git config --global user.name "Leonardo Comelli"',
        description: 
    },
    {
        name: "git config --global user.email leonardo@software-ltda.com.br",
        description: 
    },
    {
        name: "git init",
        description: 
    },
    {
        name: "git status",
        description: 
    },
    {
        name: "git add",
        description: 
    },
    {
        name: "git commit",
        description: 
    },
    {
        name: "git rm",
        description: 
    },
    {
        name: "git log",
        description: 
    },
    {
        name: "git checkout",
        description: 
    },
    {
        name: "git reset",
        description: 
    },
    {
        name: "git remote",
        description: 
    },
    {
        name: "git push",
        description: 
    },
    {
        name: "git pull",
        description: 
    },
    {
        name: "git fetch",
        description: 
    },
    {
        name: "git clone",
        description: 
    },
    {
        name: "git tag",
        description: 
    },
    {
        name: "git branch",
        description: 
    },
    {
        name: ,
        description: 
    },
    {
        name: ,
        description: 
    },
    {
        name: ,
        description: 
    },
    {
        name: ,
        description: 
    },
    {
        name: "git init",
        description: "Inicializar um repositório Git. Cria um novo repositório Git na pasta atual.",
    },
    {
        name: "git clone",
        description: "Clonar um repositório existente. Cria uma cópia local de um repositório Git existente.",
    },
    {
        name: "git add",
        description: "Adicionar arquivos ao índice. Coloca as alterações feitas em arquivos na área de preparação para o próximo commit.",
    },
    {
        name: "git commit",
        description: "Criar um novo commit. Registra as alterações na área de preparação em um novo commit.",
    },
    {
        name: "git pull",
        description: "Buscar alterações do repositório remoto. Recupera as alterações do repositório remoto para a branch local.",
    },
    {
        name: "git push",
        description: "Enviar alterações para o repositório remoto. Envia os commits locais para o repositório remoto.",
    },
    {
        name: "git branch",
        description: "Listar branches. Exibe a lista de branches no repositório local.",
    },
    {
        name: "git merge",
        description: "Mesclar alterações de outra branch. Mescla as alterações de uma branch em outra branch.",
    },
];

document.addEventListener("DOMContentLoaded", function () {

    const ulComandos = document.getElementById("git-commands");

    gitCommands.forEach((command) => {
        const listItem = document.createElement("li");
        const heading = document.createElement("h2");
        heading.innerHTML = `<span class="command-name">${command.name}</span> - ${command.description}`;
        listItem.appendChild(heading);
        ulComandos.appendChild(listItem);
    });
});


