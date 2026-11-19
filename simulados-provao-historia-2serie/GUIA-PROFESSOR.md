# História — Provão Paulista — 2ª série

O aplicativo reúne as questões de História do PDF enviado em três avaliações por ano. Cada avaliação contém a aplicação principal seguida da aplicação extra, com identificação do ano, aplicação e número original em cada questão.

| Avaliação | Aplicação principal | Aplicação extra | Total |
| --- | --- | --- | --- |
| 1 — 2023 | Questões 28 a 34 | Questões 28 a 34 | 14 |
| 2 — 2024 | Questões 19 a 26 | Questões 19 a 26 | 16 |
| 3 — 2025 | Questões 19 a 26 | Questões 19 a 26 | 16 |

São 46 questões, com cinco alternativas e uma resposta correta por item. O conteúdo foi extraído de `Provao_Paulista_Historia_2serie_2023-2025.pdf`. Foram normalizados espaços, quebras de linha e caracteres de hifenização da extração. Os enunciados e as alternativas seguem o PDF. As 14 fontes visuais foram renderizadas diretamente das páginas para preservar orientação, legendas e textos sobrepostos, incluindo os balões das charges. O botão de ampliação permite examinar os detalhes. A resolução dos elementos rasterizados continua limitada pelo original fornecido.

## Funcionamento

O aluno informa nome e turma e escolhe qualquer uma das três avaliações. Nenhuma opção vem selecionada. Depois da entrega, recebe a nota de 0 a 10, explicações das questões erradas e a opção de refazer somente esses itens. Na mesma tela pode escolher outra avaliação, mantendo sua identificação.

Cada item tem o mesmo peso. A nota da revisão considera apenas as questões refeitas. A nota acumulada considera os acertos mantidos desde o início daquele percurso. Cada entrega recebe identificador próprio e vínculo com a tentativa anterior. Uma nova avaliação completa inicia outro percurso. Tentativas inacabadas podem ser retomadas no mesmo navegador usando o mesmo nome e turma.

O painel do professor utiliza a mesma senha configurada no aplicativo do 6º ano. Escolha o ano para ver as entregas, com nome, turma, nota, nota acumulada, horário e ocorrências. A senha é verificada pelo navegador, como no aplicativo de referência. A proteção de acesso aos dados depende das regras do Firebase. Não há autenticação Firebase adicional nesta versão.

Durante a prova, mudanças de aba e perda de foco são registradas. Cópia, menu de contexto e alguns atalhos são bloqueados. Esses registros apoiam o acompanhamento e não comprovam cola. A página não controla outros aparelhos ou recursos externos do sistema operacional.

## Integração e testes

As coleções são `avaliacoes_provao_historia2serie_2026/simulado1`, `simulado2` e `simulado3`, no projeto Firebase `atividades-douglas-default-rtdb`. As três coleções tiveram gravação e consulta verificadas com registros temporários removidos ao final.

Os testes de navegador percorreram as 46 questões, verificaram o carregamento das 14 imagens, a recuperação de tentativas, uma falha de envio seguida de nova tentativa, duas revisões sucessivas por avaliação e a apresentação das nove entregas no painel. Foram conferidas também as telas de seleção e leitura no tamanho de celular. Esses testes de fluxo usaram respostas de banco simuladas; a verificação real do Firebase foi realizada separadamente.

## Gabaritos conferidos

As respostas abaixo correspondem à versão 1 dos cadernos. Os links apontam aos gabaritos publicados, incluindo uma cópia do documento da Vunesp para a aplicação extra de 2023.

| Ano e aplicação | Números originais | Respostas |
| --- | --- | --- |
| 2023 principal | 28 a 34 | D · B · E · C · A · E · B |
| 2023 extra | 28 a 34 | C · A · D · E · C · B · D |
| 2024 principal | 19 a 26 | D · B · E · A · D · C · E · A |
| 2024 extra | 19 a 26 | E · A · C · E · B · D · A · D |
| 2025 principal | 19 a 26 | C · E · B · D · C · A · E · D |
| 2025 extra | 19 a 26 | D · C · D · B · E · A · D · B |

- [2023 — aplicação principal, Vunesp](https://documento.vunesp.com.br/documento/stream/NTYyMDg2Mw%3D%3D)
- [2023 — aplicação extra, cópia do gabarito da Vunesp](https://quimicaparaovestibular.com.br/wa_files/Prov_C3_A3o_20Paulista_202023_202a_20Aplic_20Mat_20CH_202a_20s_C3_A9rie_20Gab.pdf)
- [2024 — aplicação principal](https://stcdndev.blob.core.windows.net/lib/SEED2405/2%C2%BA%20Ano%20EM%20-%20Prova%20Principal/2%C2%BA%20Ano%20EM%20-%20Prova%20Principal_251_Gabarito_1.pdf)
- [2024 — aplicação extra](https://stcdndev.blob.core.windows.net/lib/SEED2405/2%C2%BA%20Ano%20EM%20-%20Prova%20Extra/2%C2%BA%20Ano%20EM%20-%20Prova%20Extra_261_Gabarito_1.pdf)
- [2025 — aplicação principal](https://stcdndev.blob.core.windows.net/lib/SEED2503/ProvasGabaritos/2%C2%BA%20Ano%20EM%20-%20Prova%20Principal_251_Gabarito_1.pdf)
- [2025 — aplicação extra](https://stcdndev.blob.core.windows.net/lib/SEED2503/ProvasGabaritosExtra/2%C2%BA%20Ano%20EM%20-%20Prova%20Extra_261_Gabarito_1.pdf)

## Publicação

Envie a pasta inteira `simulados-provao-historia-2serie`, localizada em `PUBLICAR-GITHUB`, para a raiz do repositório `douglas-gamificacao/simulados`, usando **Add file → Upload files**. Salve na branch `main` como nos aplicativos anteriores. Use a pasta descompactada.

Depois que o GitHub Pages concluir a publicação, o endereço esperado será https://douglas-gamificacao.github.io/simulados/simulados-provao-historia-2serie/.

O envio ao repositório e a publicação ainda estão pendentes. O painel do professor fica no mesmo endereço do aplicativo.
