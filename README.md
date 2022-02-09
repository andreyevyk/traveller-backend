# UML Diagrama
![Class Diagram](http://www.plantuml.com/plantuml/png/ZPBFIWD13CRlynHpLA4lq5EbHIY2UEcvf3DX6vW_Iv9HHFhkQhUI7P35s_1Bo3VVbsn4WRNbv4824Ryb9PHFvockVMiKdI-GSUr5cShWV4G9JADIBGQbdOvTeRHyGdPUpz-F0fIiDp22OZo2hlqE5Dt5tRHV4uJ_QY_CytTFp_S-a7uSALhVH45ng3olcFvsAYxxfx0eVhdDUeoCqiy9ECuIKqRK5njjx1gTHLYGXlEfyhdMcPi4IjgYjQLQXevCXiUVJAzk3uVzphp-iUSHMMhPvy5K9jJ_CjISiQW1U8D4qErzOSa7GLxA5tDtBIE8l5UEo_SpNOvVhMwv_uA7bIsrWrVtReCbjfo-0000)
Lembrar de adicionar create_at places
Criar one to many migration de categories
# Cadastrar Cidade

**RF**
* Deve ser possível uma cidade
* Após cadastrar a cidade deve ser encaminhado para cadastro de local

**RNF**
* Não pode cadastrar uma cidade com nome repetido
* Deve ser feito o upload de uma imagem
* Deverá estar logado para realizar o cadastro

# Listar Cidades

**RF**
* Deve ser possível listar as cidades
* No momento do hover na cidade deve aparecer opção de exclusão ou * * edição da cidade
* Deve ser possivel cadastrar uma nova cidade no menu superior
* Deve ser listado a quantidade de locais no card da cidade
* Ao clicar na cidade deverá enviar para a tela de consulta da cidade
* Não estar logado para Listar

**RNF**

# Consultar Cidade

**RF**
* Deve ser possível listar a cidade escolhida enteriormente
* Deve ser exibido o resumo de quantidade de locais por categoria
* O 5 locais mais bem avalidos devem ter uma área de destaque sendo o de maior relevância com uma área maior.
* Os locais devem ser exibidos por categoria, possuindo uma aba com todos. 
* Os locais devem ser exibidos com avaliação

**RNF**

# Editar Cidades

**RF**
* Deve ser possível editar as cidades
* Ao acessar a tela deve ser carregado os dados adicionado anteriormente
* Deverá estar logado

**RNF**

# Excluir Cidades

**RF**
* Deve ser possível excluir as cidades
* Um Modal de confirmação deve ser aberto
* Deverá estar logado

**RNF**
* Deve ser listado a quantidade de locais que serão excluidas caso selecione sim

# Cadastrar Local

**RF**
* Deve ser possível um local
* Não deve possuir mesmo nome de outro local
* Pode ser acessado tanto após cadastrar cidade ou no menu superior da cidade
* Deve ser feito a seleção do local no mapa
* Caso selecionado o tipo *Comida e bebida*, deve ser aberto menu de opções de horarios e dias de atendimento
* Caso selecionado o tipo *Eventos Organizacionais*, deve ser aberto menu de próximo acontecimento
* Deverá estar logado

**RNF**
* O local pode ser de três tipos *Comida e bebida, Pontos turistícos e Eventos Organizacionais*
* Caso selecionado o tipo *Comida e bebida*, deve ser listado os dias da semana, opções de aberto e fechado e horario de aberutura e fechamento para cada dia da semana.

# Consultar Local

**RF**
* Deve ser possível consultar um local
* Um Modal de confirmação deve ser aberto
* Deverá estar logado

**RNF**
* Deve ser demonstrado no mapa o local marcado anteriormente

# Listar Locais

**RF**
* Deve ser possível listar os locais
* Deve ser possível listar os carros pela categoria *Comida e bebida*
* Deve ser possível listar os carros pela categoria *Pontos turistícos*
* Deve ser possível listar os carros pela categoria *Eventos Organizacionais*

# Editar Local

**RF**
* Deve ser possível editar a local
* Ao acessar a tela deve ser carregado os dados adicionado anteriormente
* Deverá estar logado

**RNF**

# Excluir Local

**RF**
* Deve ser possível excluir o local
* Um Modal de confirmação deve ser aberto
* Deverá estar logado

**RNF**

# Listagem de categorias

**RF**
* Deve ser possível listar as categorias
* Pode clicar na lupa para consultar com detalhes a categoria
* Deverá estar logado

**RNF**

# Consultar Categoria

**RF**
* Deve ser possivel consultar a categoria com todos os detalhes
* Deverá estar logado

**RNF**


<!-- Listagem de depoimentos -->