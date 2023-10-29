const gitCommands = [
    {
      command: 'git clone',
      description: 'Clona um repositório remoto para o seu sistema local.'
    },
    {
      command: 'git pull',
      description: 'Puxa as alterações mais recentes do repositório remoto para a sua ramificação atual.'
    },
    {
      command: 'git push',
      description: 'Envia as alterações locais para um repositório remoto.'
    },
    {
      command: 'git add',
      description: 'Adiciona mudanças no diretório de trabalho ao índice (staging area).'
    },
    {
      command: 'git commit',
      description: 'Registra as mudanças no repositório e cria um novo commit.'
    },
    {
      command: 'git branch',
      description: 'Lista, cria ou exclui branches (ramificações).'
    },
    {
      command: 'git merge',
      description: 'Combina alterações de uma ramificação em outra.'
    },
    {
      command: 'git rebase',
      description: 'Reorganiza commits para aplicá-los de forma linear.'
    },
    {
      command: 'git log',
      description: 'Exibe o histórico de commits do repositório.'
    },
    {
      command: 'git status',
      description: 'Exibe o status atual do repositório, incluindo arquivos modificados e não rastreados.'
    },
    {
      command: 'git diff',
      description: 'Exibe as diferenças entre alterações não confirmadas e a última confirmação.'
    },
    {
      command: 'git remote',
      description: 'Gerencia repositórios remotos conectados ao repositório local.'
    },
    {
      command: 'git init',
      description: 'Inicia um novo repositório Git local.'
    },
    {
      command: 'git tag',
      description: 'Gerencia tags (etiquetas) para marcar commits específicos.'
    },
    {
      command: 'git blame',
      description: 'Exibe quem modificou as linhas de um arquivo e o commit associado.'
    },
    {
      command: 'git show',
      description: 'Exibe informações sobre um commit específico.'
    },
    {
      command: 'git fetch',
      description: 'Recupera as informações dos repositórios remotos sem fazer mesclagem.'
    },
    {
      command: 'git stash',
      description: 'Guarda temporariamente as mudanças locais não confirmadas.'
    },
    {
      command: 'git cherry-pick',
      description: 'Aplica um commit específico de uma ramificação em outra.'
    },
    {
      command: 'git remote add',
      description: 'Adiciona um novo repositório remoto.'
    },
    {
      command: 'git remote remove',
      description: 'Remove um repositório remoto.'
    },
    {
      command: 'git checkout',
      description: 'Permite alternar entre branches ou restaurar arquivos.'
    },
    {
      command: 'git reset',
      description: 'Redefine o estado do repositório para um commit específico.'
    },
    {
      command: 'git rm',
      description: 'Remove arquivos do diretório de trabalho e do índice.'
    },
    {
      command: 'git clean',
      description: 'Remove arquivos não rastreados e diretórios do diretório de trabalho.'
    },
    {
      command: 'git bisect',
      description: 'Ajuda a encontrar o commit que introduziu um bug usando pesquisa binária.'
    },
    {
      command: 'git reflog',
      description: 'Registra todas as ações de referência para facilitar a recuperação de commits perdidos.'
    },
    {
      command: 'git log --graph',
      description: 'Exibe o histórico de commits em um formato de gráfico.'
    },
    {
      command: 'git log --author',
      description: 'Filtra o histórico de commits por autor.'
    },
    {
      command: 'git log --since',
      description: 'Filtra o histórico de commits por data.'
    },
    {
      command: 'git log -p',
      description: 'Exibe as diferenças (patch) introduzidas por cada commit.'
    },
    {
      command: 'git log -n',
      description: 'Limita o número de commits exibidos.'
    },
    {
      command: 'git config',
      description: 'Configura opções do Git, como nome de usuário e email.'
    },
    {
      command: 'git cherry-pick',
      description: 'Aplica um commit específico de uma ramificação em outra.'
    },
    {
      command: 'git describe',
      description: 'Exibe a descrição legível de um commit em relação às tags mais recentes.'
    },
    {
      command: 'git grep',
      description: 'Pesquisa o conteúdo de arquivos no repositório.'
    },
    {
      command: 'git log --pretty',
      description: 'Controla o formato da saída do comando `git log`.'
    },
    {
      command: 'git merge --squash',
      description: 'Combina alterações em um único commit.'
    },
    {
      command: 'git reset --hard',
      description: 'Redefine o estado do repositório e do diretório de trabalho para um commit específico, descartando todas as alterações não confirmadas.'
    },
    {
      command: 'git revert',
      description: 'Cria um novo commit que desfaz as alterações introduzidas por um commit específico.'
    },
    {
      command: 'git mv',
      description: 'Move ou renomeia arquivos no repositório.'
    },
    {
      command: 'git clean -n',
      description: 'Exibe os arquivos não rastreados que seriam removidos, mas não os remove.'
    },
    {
      command: 'git clean -f',
      description: 'Remove permanentemente os arquivos não rastreados do diretório de trabalho.'
    },
    {
      command: 'git config --global',
      description: 'Configura opções globais do Git para todos os repositórios.'
    },
    {
      command: 'git config --list',
      description: 'Exibe todas as configurações do Git.'
    },
    {
      command: 'git init --bare',
      description: 'Inicializa um repositório Git nu, sem diretório de trabalho.'
    },
    {
      command: 'git log --oneline',
      description: 'Exibe o histórico de commits em uma única linha por commit.'
    },
    {
      command: 'git remote -v',
      description: 'Exibe URLs dos repositórios remotos configurados.'
    },
    {
        command: "git help <qualquer_comando_git>",
        description: "Exibe a ajuda para um comando Git específico."
    },
    {
        command: "git config --global user.name",
        description: "Define o nome do usuário globalmente."
    },
    {
        command: "git config --global user.email",
        description: "Define o email do usuário globalmente."
    },
    {
        command: "git config --global core.editor",
        description: "Define o editor de texto padrão globalmente."
    },
    {
        command: "git config --global merge.tool",
        description: "Define a ferramenta de merge globalmente."
    },
    {
        command: "git config --global core.excludesfile",
        description: "Define o arquivo de exclusões global."
    },
];  

document.addEventListener("DOMContentLoaded", function () {

    const ulComandos = document.getElementById("git-commands");

    gitCommands.forEach((command) => {
        const listItem = document.createElement("li");
        const heading = document.createElement("h2");
        heading.innerHTML = `<span class="command-name">${command.command}</span> - ${command.description}`;
        listItem.appendChild(heading);
        ulComandos.appendChild(listItem);
    });
});


