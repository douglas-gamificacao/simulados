# Simulados de História — 8º ano

O aplicativo utiliza as 40 questões do arquivo `Simulado_Historia_8ano_SARESP.pdf`, na ordem do documento, distribuídas em quatro provas de dez questões.

| Prova | Questões originais | Quantidade |
| --- | --- | --- |
| 1 | 01 a 10 | 10 |
| 2 | 11 a 20 | 10 |
| 3 | 21 a 30 | 10 |
| 4 | 31 a 40 | 10 |

O material se apresenta como simulado no formato SARESP. O aplicativo utiliza o gabarito da página 12 desse material, sem atribuir ao simulado caráter de prova oficial. As questões foram transcritas com seus textos de apoio e alternativas. O PDF utiliza fontes textuais, que são apresentadas na própria tela de cada questão. As explicações após a entrega foram elaboradas para orientar a revisão.

## Acesso e tentativas

O aluno informa nome e turma e escolhe uma das quatro provas, sem senha. As opções aparecem junto da identificação e nenhuma vem selecionada automaticamente. Ao terminar, o aluno recebe a nota e pode escolher outra prova ou refazer somente as erradas.

Cada questão vale um ponto na prova completa. A nota é de 0 a 10. Na revisão, a nota da tentativa considera apenas as questões refeitas, enquanto a nota acumulada preserva os acertos anteriores daquele percurso. Cada revisão gera um registro novo, vinculado à tentativa anterior e ao percurso inicial. Iniciar novamente uma prova completa cria um novo percurso.

Tentativas inacabadas de provas diferentes ficam guardadas no mesmo navegador. Selecionar uma prova com o mesmo nome e turma retoma as respostas daquele aluno. Uma falha de envio preserva o progresso e permite nova tentativa de envio com o mesmo identificador, evitando entregas duplicadas.

## Painel do professor

O painel usa a mesma senha configurada no aplicativo do 6º ano. Escolha a prova para consultar aluno, turma, nota, nota acumulada, data e horário, respostas e ocorrências de cada tentativa.

A senha é conferida no navegador, conforme o aplicativo de referência. A proteção de acesso aos registros depende das regras do Firebase. Esta versão não acrescenta autenticação Firebase.

Trocas de aba e perda de foco são registradas durante a avaliação. Cópia, menu de contexto e alguns atalhos ficam bloqueados. Esses registros não comprovam cola e não controlam outros aparelhos ou recursos do sistema operacional.

## Gabarito do material

| Prova | Respostas na ordem |
| --- | --- |
| 1 | B · C · A · D · C · A · B · D · A · B |
| 2 | C · D · A · C · B · D · A · C · B · A |
| 3 | D · B · C · A · D · B · C · D · A · B |
| 4 | C · D · A · B · C · D · A · D · B · C |

## Firebase e verificação

Os registros ficam em `avaliacoes_historia8_saresp40_2026/simulado1` até `avaliacoes_historia8_saresp40_2026/simulado4`, no projeto `atividades-douglas-default-rtdb`. Foram confirmadas gravação e leitura nas quatro coleções com registros temporários, removidos ao final.

O fluxo no navegador foi testado com as 40 questões, duas revisões sucessivas por prova, doze registros de tentativa, recuperação após recarregar a página, falha de envio seguida de nova tentativa e exibição no painel do professor. Esses testes de interface usaram um banco simulado. O teste real de integração foi realizado separadamente. A seleção das provas e a leitura das questões foram conferidas também em largura de celular.

## Publicação

No repositório `douglas-gamificacao/simulados`, abra a raiz e use **Add file → Upload files**. Arraste a pasta completa `simulados-saresp-historia-8ano`, que está dentro de `PUBLICAR-GITHUB`, e salve na branch `main`. Use a pasta descompactada.

Após a publicação pelo GitHub Pages, o endereço esperado será https://douglas-gamificacao.github.io/simulados/simulados-saresp-historia-8ano/.

O envio dos arquivos ao GitHub ainda está pendente. O painel do professor fica no mesmo endereço do aplicativo.

Esta pasta tem nome e coleção próprios para preservar o aplicativo anterior `simulados-historia-8ano`, que reúne outro conjunto de avaliações.
