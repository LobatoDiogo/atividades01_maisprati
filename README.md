<h1 align="center" style="font-weight: bold;">Lista de Exercícios 01 💻</h1>

<p align="center">
    <b>Projeto do curso de Desenvolvimento Full-Stack da MaisPraTi e Codifica.</b>
</p>

<h2>💻 Tecnologias</h2>

- JavaScript
- NodeJS
- Prompt-Sync

<h2>🚀 Primeiros Passos</h2>
<p align="center">
  Nesta lista de exercícios podemos desenvolver operações fundamentais, estruturas de controle condicional e de repetição em JavaScript.  
</p>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Nestes exercícios, verificamos a capacidade de:

- Utilizar estruturas de repetição;

- Criar algoritmos e renderizar as informações contidas no terminal; 

- Criar interações com usuários, através do prompt-sync;

- Análise e resolução de problemas.

</details>

<details>
  <summary><strong>‼️ Antes de começar</strong></summary><br />

  1. Clone o repositório

  - Use o comando:
    - `https://github.com/LobatoDiogo/atividades01_maisprati.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd atividades01_maisprati`

  2. Instale as dependências

    - `npm install`.

  3.  Iniciando os códigos

  - Entre na pasta exercicios:
      
      - `cd exercicios`.  
  
  - Utilize o comando abaixo, para verificação de cada exercício:
      
      - `node ~nomeDoArquivo.js`
  
  - Exemplo: 
      
      - `node exercicio01.js`.
</details>

<h2>📝 Lista de Exercícios Desenvolvidos</h2>

<b>1.</b> 
Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.

<b>2.</b> 
Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.

<b>3.</b> 
Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
   - Some 25 ao primeiro inteiro;
   - Triplique o valor do segundo inteiro;
   - Modifique o valor do terceiro inteiro para 12% do valor original;
   - Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
  dos primeiros três inteiros.

<b>4.</b> 
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).

<b>5.</b> 
Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0

<b>6.</b> 
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
  - Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
  - Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
  - Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
  - Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

<b>7.</b> As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.

<b>8.</b> Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.

<b>9.</b> Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo:

  <details>
<table>
  <thead>
    <tr>
      <th>Código</th>
      <th>Região</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Sul</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Norte</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Leste</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Oeste</td>
    </tr>
    <tr>
      <td>5 ou 6</td>
      <td>Nordeste</td>
    </tr>
    <tr>
      <td>7, 8 ou 9</td>
      <td>Sudeste</td>
    </tr>
    <tr>
      <td>10 até 20</td>
      <td>Centro-Oeste</td>
    </tr>
    <tr>
      <td>25 até 50</td>
      <td>Nordeste</td>
    </tr>
    <tr>
      <td>Fora dos intervalos</td>
      <td>Produto importado</td>
    </tr>
  </tbody>
</table>
</details>

<b> 10.</b> 
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

<b> 11.</b> 
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.

<b> 12.</b> 
Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.

<b> 13.</b>
Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma: <br>
    1 x N = N <br>
    2 x N = 2N <br>
    3 x N = 3N

<h3 align="center"> 
  <b>Utilizar somente while do exercício 14 ao 16</b>
</h3>

<b> 14.</b>
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.

<b> 15.</b>
Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.

<b> 16.</b>
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
