O que vamos aprender?
Na terceira parte da sua jornada através do HTML & CSS, você vai aprender na prática como alterar o layout da página utilizando o CSS, assim como utilizar regras de seleção bem definidas para escolher exatamente o tipo de elemento que você quer estilizar.


Você será capaz de:
Compreender como funciona o Box Model do CSS e como os elementos da página se relacionam visualmente;
Posicionar elementos na página de diferentes formas;
Combinar e agrupar seletores de CSS para criar regras bem definidas.


Por que isso é importante?
Além de estilos e tamanhos, o CSS também é responsável pelo layout da página. Saber criar regras específicas que selecionam os elementos de maneira apropriada e posicioná-los na página permite que você organize as informações da página como quiser.
Seletores de pseudoclasses permitem que você adicione lógica condicional de estilização.


Conteúdos
Para que você aprenda na prática, a partir de agora, teremos alguns vídeos feitos pelo nosso time de especialistas e alguns exercícios de fixação que irão te auxiliar nessa caminhada pelo maravilhoso mundo do CSS!
Você irá desenvolver alguns desafios entre os vídeos. Para subi-los para o seu repositório de exercícios, siga as instruções abaixo.
PS: Peça ajuda no Slack em caso de dúvidas!
fundamentos
Antes de começar: versionando seu código
Para versionar seu código, utilize o seu repositório de exercícios. 😉
Abaixo você vai ver exemplos de como organizar os exercícios do dia em uma branch, com arquivos e commits específicos para cada exercício. Você deve seguir este padrão para realizar os exercícios a seguir.
Abra a pasta de exercícios:
Copiar
$ cd ~/trybe-exercicios
Certifique-se de que está na branch main e ela está sincronizada com a remota. Caso você tenha arquivos modificados e não comitados, deverá fazer um commit ou checkout dos arquivos antes deste passo.
Copiar
$ git checkout main
$ git pull
A partir da main, crie uma branch com o nome exercicios/3.3 (bloco 3, dia 3)
Copiar
$ git checkout -b exercicios/3.3
Caso seja o primeiro dia deste módulo, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir fundamentos
$ cd fundamentos
Caso seja o primeiro dia do bloco, crie um diretório para ele e o acesse na sequência:
Copiar
$ mkdir bloco-3-introducao-a-html-e-css
$ cd bloco-3-introducao-a-html-e-css
Crie um diretório para o dia e o acesse na sequência:
Copiar
$ mkdir dia-3-html-css-seletores-e-posicionamento
$ cd dia-3-html-css-seletores-e-posicionamento
Os arquivos referentes aos exercícios deste dia deverão ficar dentro do diretório ~/trybe-exercicios/fundamentos/block-3-introducao-a-html-e-css/dia-3-html-css-seletores-e-posicionamento. Lembre-se de fazer commits pequenos e com mensagens bem descritivas, preferencialmente a cada exercício resolvido.

Verifique os arquivos alterados/adicionados:
Copiar
$ git status
On branch exercicios/3.3
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

  modified:   exercicio-1

Adicione os arquivos que farão parte daquele commit:
Copiar
# Se quiser adicionar os arquivos individualmente
$ git add caminhoParaArquivo

# Se quiser adicionar todos os arquivos de uma vez, porém, atente-se
para não adicionar arquivos indesejados acidentalmente
$ git add --all

Faça o commit com uma mensagem descritiva das alterações:
Copiar
$ git commit -m "Mensagem descrevendo alterações"
Você pode visualizar o log de todos os commits já feitos naquela branch com git log.
Copiar
$ git log
commit 100c5ca0d64e2b8649f48edf3be13588a77b8fa4 (HEAD -> exercicios/3.3)
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 17:48:01 2019 -0300

    Exercicio 2 - mudando o evento de click para mouseover, tirei o alert e coloquei pra quando clicar aparecer uma imagem do lado direito da tela

commit c0701d91274c2ac8a29b9a7fbe4302accacf3c78
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 16:47:21 2019 -0300

    Exercicio 2 - adicionando um alert, usando função e o evento click

commit 6835287c44e9ac9cdd459003a7a6b1b1a7700157
Author: Tryber Bot <tryberbot@betrybe.com>
Date:   Fry Sep 27 15:46:32 2019 -0300

    Resolvendo o exercício 1 usando eventListener
Agora que temos as alterações salvas no repositório local precisamos enviá-las para o repositório remoto. No primeiro envio, a branch exercicios/3.3 não vai existir no repositório remoto, então precisamos configurar o remote utilizando a opção --set-upstream (ou -u, que é a forma abreviada).
Copiar
$ git push -u origin exercicios/3.3
Após realizar o passo 9, podemos abrir a Pull Request a partir do link que aparecerá na mensagem do push no terminal, ou na página do seu repositório de exercícios no GitHub através de um botão que aparecerá na interface. Escolha a forma que preferir e abra a Pull Request. De agora em diante, você repetirá o fluxo a partir do passo 7 para cada exercício adicionado, porém como já definimos a branch remota com -u anteriormente, agora podemos simplificar os comandos para:
Copiar
# Quando quiser enviar para o repositório remoto
$ git push

# Caso você queria sincronizar com o remoto, poderá utilizar apenas
$ git pull
Quando terminar os exercícios, seus códigos devem estar todos commitados na branch exercicios/3.3, e disponíveis no repositório remoto do GitHub. Pra finalizar, compartilhe o link da Pull Request no canal de Code Review para a monitoria e/ou colegas revisarem. Faça review você também, lembre-se que é muito importante para o seu desenvolvimento ler o código de outras pessoas. 🤜🏼🤛🏼



