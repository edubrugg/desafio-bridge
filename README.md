# Laboratório Bridge - Processo Seletivo : Desafio Dev Web Full Stack

A aplicação permite que o usuário submeta um número para visualizar que é seu menor múltiplo duodigito.

Um número duodigito é aquele cujo seus algarismos têm no máximo 2 distintos números.
Por exemplo:
101
322
5577
11777

## Tecnologias utilizadas

### Frontend

O frontend da aplicação foi construído utilizado a biblioteca javascript React, e para estilização da página foi usado a biblioteca rbx, essa biblioteca disponibiliza componentes prontos para o uso.

### Backend (não concluído)

No backend existe apenas o algoritmo que calcula o número duodigito.
Esse algoritmo usa força bruta e um conceito da teoria de conjuntos para calcular o resultado com base no valor passado pelo usuário.

## Instruções

### Pré requisitos

Para rodar a aplicação é necessário ter instalado o NodeJS e o Python 3.

### Instalação da aplicação

Para rodar o fronted da aplicação será necessário acessar baixar os arquivos do repositório, acessar através do terminal a pasta frontend e executar o comando `npm install`

### Executar a aplicação

Após baixar todas as dependências da aplicação, você deve rodar, no terminal, o comando `npm start`

Para rodar o algoritmo que calcula o número duodigito, você deve navegar até a pasta backend e executar, no terminal, o comando `python3 duodigito.py`