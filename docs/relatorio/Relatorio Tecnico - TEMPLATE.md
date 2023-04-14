# Informações do Projeto
`TÍTULO DO PROJETO`  

......  Studify ......

`CURSO` 

......  Ciências da Computação/Turno:manhã ......

## Participantes

...... 
> - Gabriel Alkmim Barros
> - Gabriel de Cortez Mourão
> - Guilherme Henrique Siqueira de Lana
> - João Gabriel Santos Andrade Almeida
> - Pedro Hosken Fernandes Guimarães
Karina Edith Castro Sander Morais
......

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução

> Com o aumento da disponibilidade de conteúdos on-line, nos dias de hoje
> se torna necessário a validação e o englobamento desses materiais para 
> facilitar e melhorar a experiencia do usuário.
> Nesse sentido, uma área que foi bastante afetada com essa enxurrada de informações e conteúdos
> foi a educação, principalmente as matérias do ensino médio, que possuem bastante oferta e demanda.
> Desse modo, os alunos que estão estudando esse tipo de conteúdo passam por uma experiencia dificultada,
> visto que a internet é um dos principais meios utilizados para estudo, seja relacionado na proucura de exercícios, videoaulas, resumos ou para tirar
> dúvidas, e com esse enormidade de conteúdo disperso e sem validação, eles passam por uma pesquisa prolongada, gastando mais tempo.
> Nesse contexto, torna-se necessário a criação de uma plataforma que auxilie os alunos encontrarem materiais online de qualidade e de forma agrupada, 
> facilitando a sua navegação.
## Problema

> Como dito anteriormente, os conteúdos e materiais se encontram dispersos pela internet e com baixa verificação de qualidade, o que dificulta a pesquisa
> realizada pelos estudantes e interessados. Nosso projeto busca auxiliar esses usuários a encontrarem conteúdos de qualidade e reunidos.

> Nesse momento você deve apresentar o problema que a sua aplicação deve
> resolver. No entanto, não é a hora de comentar sobre a aplicação.
> Descreva também o contexto em que essa aplicação será usada, se
> houver: empresa, tecnologias, etc. Novamente, descreva apenas o que de
> fato existir, pois ainda não é a hora de apresentar requisitos
> detalhados ou projetos.
>
> Nesse momento, o grupo pode optar por fazer uso
> de ferramentas como Design Thinking, que permite um olhar de ponta a
> ponta para o problema.
>
> **Links Úteis**:
> - [Objetivos, Problema de pesquisa e Justificativa](https://medium.com/@versioparole/objetivos-problema-de-pesquisa-e-justificativa-c98c8233b9c3)
> - [Matriz Certezas, Suposições e Dúvidas](https://medium.com/educa%C3%A7%C3%A3o-fora-da-caixa/matriz-certezas-suposi%C3%A7%C3%B5es-e-d%C3%BAvidas-fa2263633655)
> - [Brainstorming](https://www.euax.com.br/2018/09/brainstorming/)

## Objetivos

> O objetivo geral deste trabalho é a criação de uma plataforma que junte e disponibilize, de maneira facilitada e de acesso universal, conteúdos e materiais acerca de
> determinado assunto, que esteja relacionado com matérias do ensino médio, ajudando estudantes e pessoas interessadas sobre o assunto.
> Como objetivos específicos, podemos ressaltar:
  > . Fornecer funcionalidades que ressaltem os melhores conteúdos sobre o assunto
  > . Disponibilizar uma aba com o resumo, vídeos e exercícios sobre o assunto.

> Aqui você deve descrever os objetivos do trabalho indicando que o
> objetivo geral é desenvolver um software para solucionar o problema
> apresentado acima. Apresente também alguns (pelo menos 2) objetivos
> específicos dependendo de onde você vai querer concentrar a sua
> prática investigativa, ou como você vai aprofundar no seu trabalho.
> 
> **Links Úteis**:
> - [Objetivo geral e objetivo específico: como fazer e quais verbos utilizar](https://blog.mettzer.com/diferenca-entre-objetivo-geral-e-objetivo-especifico/)

## Justificativa

> A internet se tornou essencial para o auxílio de estudantes, tendo seu crescimento com a pandemia e o EAD, obrigando professores e estudantes se conectarem
> por meio da rede. Sob essa lógica, alunos passaram a recorrer cada vez mais plataformas online para retirar dúvidas e aprofundar seu conhecimento, logo nós iremos
> ajudar-los à localizarem de maneira mais fácil e acessível os conteúdos acerca de determinado assunto. Além do mais, falta uma plataforma que reuna de uma forma
> qualificada os materiais, obrigando os usuários a se deslocarem entre páginas. 

> Descreva a importância ou a motivação para trabalhar com esta aplicação
> que você escolheu. Indique as razões pelas quais você escolheu seus
> objetivos específicos ou as razões para aprofundar em certos aspectos
> do software.
> 
> O grupo de trabalho pode fazer uso de questionários, entrevistas e
> dados estatísticos, que podem ser apresentados, com o objetivo de
> esclarecer detalhes do problema que será abordado pelo grupo.
>
> **Links Úteis**:
> - [Como montar a justificativa](https://guiadamonografia.com.br/como-montar-justificativa-do-tcc/)

## Público-Alvo

> O nosso principal público-alvo são alunos do Ensino médio, os pré-vestibulandos e pessoas interessadas que queiram aprender conteúdos dados nas escolas.
> O nosso público deve ter acesso a internet, mas não necessita ter um conhecimento vasto sobre como navegar, pois nossa plataforma será bastante simples e
> auto-explicativa.

> Descreva quem serão as pessoas que usarão a sua aplicação indicando os
> diferentes perfis. O objetivo aqui não é definir quem serão os
> clientes ou quais serão os papéis dos usuários na aplicação. A ideia
> é, dentro do possível, conhecer um pouco mais sobre o perfil dos
> usuários: conhecimentos prévios, relação com a tecnologia, relações
> hierárquicas, etc.
>
> Adicione informações sobre o público-alvo por meio de uma descrição
> textual, ou diagramas de personas, mapa de stakeholders, ou como o
> grupo achar mais conveniente.
> 
> **Links Úteis**:
> - [Público-alvo: o que é, tipos, como definir seu público e exemplos](https://klickpages.com.br/blog/publico-alvo-o-que-e/)
> - [Qual a diferença entre público-alvo e persona?](https://rockcontent.com/blog/diferenca-publico-alvo-e-persona/)
 
# Especificações do Projeto

A seguir estão sendo apresentados as nossas personas, histórias de valor e os requisitos funcionais e não funcionais. Utilizamos para a criação e discussão das personas: 
DOCS(para discussão das suas características e peculiariedades)
LINKS DO RELATÓRIO TÉCNICO E CANVAS(para a criação das personas em geral)
SITES DE PESQUISA(para termos uma base de como seriam nossos requisitos)

> Apresente uma visão geral do que será abordado nesta parte do
> documento, enumerando as técnicas e/ou ferramentas utilizadas para
> realizar a especificações do projeto

## Personas, Empatia e Proposta de Valor

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Janaina | Quer saber quais conteúdos ela precisa mais de estudar          | Organizar o que mais precisa de estudar e a ordem             |
|Janaina | Seleção e filtração de exercícios de acordo com o que está estudando e já estudou                 | Conseguir fazer exercícios sem ter de se preocupar em selecionar obtê-los |
|Janaina | Fácil acesso para a explicação de um conteúdo sobre o exercício na qual ela errou               | Menos dificuldade e esforço para a revisão |
|Lucas | Menos dificuldade pesquisando algum conteúdo específico que teve dúvida em aula                 | Revisar com maior facilidade apenas a parte que não entendeu |
|Lucas | Aprender tanto no celular quanto no computador                 | Ocupar o tempo livre em casa e na loja estudando |
|Gabriel | Abrir no celular facilmente uma lista exercícios possíveis de fazer mentalmente                | Reforçar o seu aprendizado quando estiver no carro à caminho ou voltando do cursinho e da academia |
|Gabriel | Ver estatística de acertos e tempo de demora para a execução dos exercícios feitos por mês                | Ver seu progresso e como está melhorando em algumas matérias |

![](images/Persona1)
![](images/PERSONA2)
![](images/PERSONA3)




> Relacione as personas identificadas no seu projeto, os respectivos mapas de empatia e 
> mapas da proposta de valor. Lembre-se que você deve ser enumerar e descrever precisamente 
> e de forma personalizada todos os principais envolvidos com a solução almeja. 
> 
> Para tanto, baseie-se tanto nos documentos disponibilizados na disciplina
> e/ou nos seguintes links:
>
> **Links Úteis**:
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Como fazer um mapa de empatia - Vídeo](https://www.youtube.com/watch?v=JlKHGpVoA2Y)
> - [Canvas da Proposta de Valor](https://analistamodelosdenegocios.com.br/canvas-da-proposta-de-valor/)
> 
> 
> **Exemplo de Persona**
> 
> ![Exemplo de Persona](images/persona.png)
> 
> Fonte: [Como criar uma persona para o seu negócio](https://raissaviegas.com.br/como-criar-uma-persona/)
>
> **Exemplo de Proposta de Valor**
> ![Exemplo da Proposta de Valor](images/proposta_valor.png)


## Histórias de Usuários

> Apresente aqui as histórias de usuário que são relevantes para o
> projeto de sua solução. As Histórias de Usuário consistem em uma
> ferramenta poderosa para a compreensão e elicitação dos requisitos
> funcionais e não funcionais da sua aplicação. Se possível, agrupe as
> histórias de usuário por contexto, para facilitar consultas
> recorrentes à essa parte do documento.
>
> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário pesquise temas específicos diretamente da página principal. | ALTA | 
|RF-002| Permitir que o usuário filtre os exercícios de cada tema por ano, prova e dificuldade.  | MÉDIA |
|RF-003| Recomendar, na aba de cada disciplina, os temas mais pesquisados pelos usuários.| BAIXA | 
|RF-004| Permitir que o usuário acesse alguns vídeos diretamente da página "temas". | MÉDIA |
|RF-005| Permitir que o usuário tenha acesso aos resumo na página de conteúdo. | ALTA |
|RF-006| Permitir que o usuário faça login e tenha sua conta pessoal. | ALTA |
|RF-007| Permitir que o usuário com sua conta pessoal salve conteúdos de interesse. | MÉDIA |
|RF-008| Permitir que o usuário receba notícias da plataforma através do email cadastrado na newsletter. | ALTA |
|RF-009| Permitir que o usuário possa filtrar na aba de videos, da forma desejada . | BAIXA |
|RF-010| Permitir que o usuário acesse as redes sociais do STUDIFY, por meio dos links fixados no rodapé. | ALTA |
|RF-011| O site deve permitir que usuários possam comentar em nos videos e exercicios sobre os temas. | BAIXA |
|RF-010| O site deve se adequar ao formato mobile. | ALTA |







### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| Atualizar mensalmente a base de dados dos conteúdos | MÉDIA | 
|RNF-002| Melhorar a interface para aplicativo móvel | ALTA | 
|RNF-003| Processar pedidos de novos conteúdos semanalmente | MÉDIA | 
|RNF-004| Proteger os dados pessoais de cada usuário |  ALTA | 

> Com base nas Histórias de Usuário, enumere os requisitos da sua
> solução. Classifique esses requisitos em dois grupos:
>
> - [Requisitos Funcionais (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
>   correspondem a uma funcionalidade que deve estar presente na
>   plataforma (ex: cadastro de usuário).
>
> - [Requisitos Não Funcionais (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
>   correspondem a uma característica técnica, seja de usabilidade,
>   desempenho, confiabilidade, segurança ou outro (ex: suporte a
>   dispositivos iOS e Android).
>
> Lembre-se que cada requisito deve corresponder à uma e somente uma
> característica alvo da sua solução. Além disso, certifique-se de que
> todos os aspectos capturados nas Histórias de Usuário foram cobertos.
> 
> **Links Úteis**:
> 
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


> Enumere as restrições à sua solução. Lembre-se de que as restrições
> geralmente limitam a solução candidata.
> 
> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)


# Projeto de Interface

-TELA PRINCIPAL(menu): Atende os requisitos em relação as compartilhamento de redes socias, recebimento de notícias a partir da inscrição no "Newleetter", segurança e salvamento dos dados de cada usuário.

-TELA "DICIPLINAS": Atende os requisitos em relação a procura de conteúdos mais relevantes e mais vistos



> Apresente as principais interfaces da solução. Discuta como 
> foram elaboradas de forma a atender os requisitos funcionais, não
> funcionais e histórias de usuário abordados nas [Especificações do
> Projeto](#especificações-do-projeto).

## User Flow

> O diagrama apresentado mostra o fluxo de Interação do usuário pelas telas do sistema. 
> As telas do fluxo do usuário são detalhadas na seção de wireframes que se segue.
> 
> ![Nosso user flow](images/flowmap.png)

> Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor
> mapear todo fluxo de telas do site ou app. Essa técnica funciona
> para alinhar os caminhos e as possíveis ações que o usuário pode
> fazer junto com os membros de sua equipe.
>
> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)
>
> **Exemplo**:
> 
> ![Exemplo de UserFlow](images/userflow.jpg)


## Wireframes

Tela - Página Inicial
<br>A tela da página inicial mostra os conteúdos e disciplinas em destaque na plataforma.
Além disso, por meio do cabeçalho, o usuário tem a possibilidade de criar conta, fazer login na plataforma, acessar a seção de vídeos e a seção de exercícios. A parte de conteúdos traz três opções ao usuário: 
-  Barra de pesquisa utilizada para a busca de temas ou disciplinas especificas
-  Carrossel de disciplinas que leva o usuário a página de cada uma delas
-  Opções dos temas mais pesquisados no site
<br>![Página Inicial](images/homepage.png) <br>
<br>
<br>
Tela – Login
<br>A tela de Login é uma janela modal (surge sobre outras janelas) quando o usuário pressiona o botão “Login” no cabeçalho. Nesta tela, é possível que o usuário acesse sua conta na plataforma. Na sequência, a tela é fechada voltando para o ambiente anterior.<br>
![Página Inicial](images/login.png)
<br>
<br>
Tela – Criar conta
<br>A tela de Criação de Conta é uma janela modal (surge sobre outras janelas) quando o usuário pressiona o botão “Crie sua conta grátis” no cabeçalho. Nesta tela, é possível que o usuário crie sua conta na plataforma. Na sequência, a tela é fechada voltando para o ambiente anterior.<br>
![Página Criar conta](images/createacc.png) <br>
<br>
<br>
Tela – Disciplinas
<br>A tela de disciplinas mostra os conteúdos específicos de uma determinada matéria. 
A parte de conteúdo da tela apresenta o nome e uma foto da disciplina em questão, uma lista de temas disponíveis dentro da matéria e uma sessão que apresenta os temas mais vistos. Esta página pode ser acessada por meio da Página principal ou por meio do cabeçalho, a partir de outras telas.<br>
![Disciplinas](images/discipline.png) <br>
<br>
<br>
Tela – Temas
<br>A tela de Temas mostra um conteúdo especifico de uma determinada disciplina.
A parte de conteúdo da tela apresenta o nome do tema, uma explicação teórica e algumas opções de vídeos sobre o mesmo. Esta página pode ser acessada por meio da Página de Disciplinas, ou por meio de pesquisas na barra de pesquisa da Página Principal.<br>
![Temas](images/theme_content.png) <br>
<br>
<br>
Tela – Vídeos
<br>A tela de Vídeos apresenta vídeos de diversos temas. Os vídeos podem ser filtrados por temas e disciplinas por meio da barra de pesquisa da página.
A parte de conteúdo da tela apresenta uma barra de pesquisa para especificar a busca e opções de vídeos para serem assistidos, possuindo cada um, uma breve descrição do conteúdo a ser exibido. Esta página pode ser acessada por meio da Página Principal, no cabeçalho, e por dentro da Página de Temas.<br>
![Videos](images/videos.png) <br>
<br>
<br>
Tela – Exibição de Vídeo
<br>A tela de exibição de vídeos apresenta um vídeo, sua descrição e a opção de mais vídeos sobre o mesmo tema.
A parte de conteúdo da tela apresenta um vídeo, a descrição do mesmo, outras opções de vídeos do mesmo tema ou de temas parecidos e uma barra de pesquisa para a busca de vídeos de outros assuntos.<br>
![Exibição de vídeos](images/viewvideo.png) <br>
<br>
<br>
Tela – Exercícios
<br>A tela de Vídeos apresenta alguns exercícios de um determinado tema ou disciplina.
A parte de conteúdo da tela apresenta, além dos exercícios, os gabaritos de cada um, que podem ser acessados ao clicar no botão “ver resposta”. Esta página pode ser acessada pela Página Principal, por meio do cabeçalho.<br>
![Exercício](images/exercise.png) <br>
<br>
<br>


> Wireframes são protótipos das telas da aplicação usados em design de interface para sugerir a
> estrutura de um site web e seu relacionamentos entre suas
> páginas. Um wireframe web é uma ilustração semelhante ao
> layout de elementos fundamentais na interface.
> 
> **Links Úteis**:
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> 
> **Exemplo**:
> 
> ![Exemplo de Wireframe](images/wireframe-example.png)


# Metodologia

Começamos a contrução do projeto de uma forma mais coletiva, não formamos subgrupos no primeiro momento, mas conseguimos desenvolver muito bem o trabalho  mesmo não sendo da forma mais otimizada. Depois, começamos a dividir as tarefas por escolha dos temas do relatório técnico(Ex: wireframe, personas, apresentação, etc), assim o projeto foi se aperfeiçoando. 
Durante todo o progresso tentamos sempre colocar como referência a pesquisa que fizemos pelo forms, que apresentava a opinião real de pessoas que sofrem com a problemática. Dessa forma, nós conseguimos adaptar nossa ideia para a solução de maneira menos desconexa com a realidade.

> Nesta parte do documento, você deve apresentar a metodologia 
> adotada pelo grupo, descrevendo o processo de trabalho baseado nas metodologias ágeis, 
> a divisão de papéis e tarefas, as ferramentas empregadas e como foi realizada a
> gestão de configuração do projeto via GitHub.
>
> Coloque detalhes sobre o processo de Design Thinking e a implementação do Framework Scrum seguido
> pelo grupo. O grupo poderá fazer uso de ferramentas on-line para acompanhar
> o andamento do projeto, a execução das tarefas e o status de desenvolvimento
> da solução.
> 
> **Links Úteis**:
> - [Tutorial Trello](https://trello.com/b/8AygzjUA/tutorial-trello)
> - [Gestão ágil de projetos com o Trello](https://www.youtube.com/watch?v=1o9BOMAKBRE)
> - [Gerência de projetos - Trello com Scrum](https://www.youtube.com/watch?v=DHLA8X_ujwo)
> - [Tutorial Slack](https://slack.com/intl/en-br/)

## Divisão de Papéis

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente a divisão de papéis e tarefas entre os membros do grupo.
>
> **Links Úteis**:
> - [11 Passos Essenciais para Implantar Scrum no seu Projeto](https://mindmaster.com.br/scrum-11-passos/)
> - [Scrum em 9 minutos](https://www.youtube.com/watch?v=XfvQWnRgxG0)


## Ferramentas

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinking  | Miro/Google Docs |  https://miro.com/app/board/uXjVMU6iLHA=/  --/--  https://docs.google.com/document/d/1ZU70-QrEEN2EgrgSHwWD-5lSUGG2r8eTpkAz8TjTwDQ/edit?usp=sharing | 
|Repositório de código | GitHub |  https://github.com/ICEI-PUC-Minas-PMGCC-TI/ti-1-pmg-cc-m-20231-tiaw-questoes-sobre-educacao-1/edit/master/docs/relatorio/Relatorio%20Tecnico%20-%20TEMPLATE.md  | 
|Listagem de tarefas | Trello |  https://trello.com/invite/b/FdkY24Xh/ATTI4fda10ebf9968bd628a0bb8329754679A355C309/sprint-i | 
| Construção do Wireframe | Marvel App | https://marvelapp.com/prototype/881c0cj |


As ferramentas empregadas no projeto são:

> - Editor de código
> - Ferramentas de comunicação
> - Ferramentas de organização
> - Ferramentas de pesquisa 



Usamos o editor de códigos para criar nossas estruturas de wireframe. Utilizamos as ferramentas de comunicação para interagimos uns com os outros em tempo real para a realização sincronizada das tarefas, além de disseminar as nossas perguntas qualitativas para várias pessoas. As ferramentas de organização foram usadas para ajudar o grupo na divisão das tarefas e na dinamização do trabalho. E por fim, utilizamos as ferramentas de pesquisa para aprofundarmos nos dados que precisamos e para nos dar um suporte para contruírmos uma solução coerente.






| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/XXXXXXX | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)
