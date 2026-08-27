# Calculadora IMC e Peso Ideal

Uma aplicação front-end simples (HTML/CSS/JavaScript) para calcular o IMC (Índice de Massa Corporal) e estimar o peso ideal com base na altura e no sexo. Destinada a uso direto no navegador para obter uma verificação rápida de IMC e uma estimativa de peso ideal.

---

## Stack
- Linguagens: HTML, CSS, JavaScript (vanilla)
- Framework / runtime: aplicação estática (nenhum)
- Bibliotecas notáveis: nenhuma

## Estrutura do repositório
```
/                      raiz do projeto
  .vscode/             configurações do VS Code (opcional)
  Calculadora_IMC_e_Peso_Ideal-main/  cópia/versão alternativa do projeto (contém arquivos completos)
  index.html           arquivo HTML (versão — contém algumas pequenas inconsistências)
  style.css            estilos principais
  script.js            (arquivo vazio na raiz)
  README.md            (este arquivo)
```

Observação: existe uma pasta `Calculadora_IMC_e_Peso_Ideal-main/` contendo versões completas dos arquivos. Recomenda-se consolidar para uma única versão canônica (por exemplo, mover o conteúdo dessa pasta para a raiz e remover a pasta duplicada).

---

## Como executar
A maneira mais rápida:
1. Clone o repositório:
   ```bash
   git clone https://github.com/joao-dev-ds/Calculadora_IMC_e_Peso_Ideal.git
   cd Calculadora_IMC_e_Peso_Ideal
   ```
2. Abra `index.html` no navegador (duplo clique) ou sirva via servidor local (recomendado):
   ```bash
   python3 -m http.server 8000
   # então abra http://localhost:8000/
   ```

Não há build, variáveis de ambiente ou dependências.

---

## Uso
- Preencha "Peso" (kg) e "Altura" (m).
- Selecione o sexo (Feminino / Masculino).
- Clique em "Calcular" para obter:
  - IMC (com duas casas decimais)
  - Peso ideal estimado (em kg)
- Clique em "Limpar" para resetar os campos.

O projeto aceita tanto vírgula quanto ponto para decimal (ex.: `1,75` ou `1.75`).

---

## Explicação do código
- index.html: marcação do formulário e botões.
- style.css: estilos da interface (há duas versões — uma na raiz e outra em `Calculadora_IMC_e_Peso_Ideal-main/`).
- script.js: a versão funcional está em `Calculadora_IMC_e_Peso_Ideal-main/script.js` e contém as funções `calcular()` e `limpar()`.

Pontos importantes do cálculo (conforme `Calculadora_IMC_e_Peso_Ideal-main/script.js`):
- IMC = peso / (altura * altura)
- Peso ideal (estimado): usa altura em cm com fórmulas heurísticas diferentes para M e F:
  - Masculino: (altura_cm - 100) - ((altura_cm - 150) / 4)
  - Feminino:  (altura_cm - 100) - ((altura_cm - 150) / 2.5)

---

## Problemas observados e sugestões
1. Arquivos duplicados:
   - Existe `Calculadora_IMC_e_Peso_Ideal-main/` com uma cópia dos arquivos. Consolidar para a raiz para evitar confusão.
2. Inconsistências no HTML da raiz:
   - Na raiz `index.html` os botões usam `onclick="Calcular()"` (C maiúsculo) enquanto a função se chama `calcular()` — isso pode causar falha se o script correto não estiver carregado.
   - Radios de sexo na raiz têm `checked` em ambos os inputs — apenas um deve estar marcado por padrão.
3. Melhorias de UX/validação:
   - Usar `<input type="number" step="0.01">` para peso e altura melhora validação nativa.
   - Exibir mensagens de erro inline em vez de `alert()`.
4. Acessibilidade:
   - Adicionar `aria-live` para resultados e assegurar que labels estão vinculados corretamente.
5. Licença:
   - Não há arquivo LICENSE. Se desejar permitir uso/colaboração pública, adicionar uma licença (ex.: MIT) é recomendado.
6. CI/Testes:
   - Adicionar um workflow simples (GitHub Actions) para validar que `index.html` referencia `script.js` e `style.css` e executar checks de linting seria útil.

---

## Como contribuir
1. Crie uma branch:
   ```bash
   git checkout -b fix/cleanup
   ```
2. Faça alterações (ex.: consolidar arquivos, corrigir `onclick`, trocar inputs para `type="number"`, melhorar validação).
3. Commit e push:
   ```bash
   git add .
   git commit -m "docs: atualiza README e corrige inconsistências iniciais"
   git push origin fix/cleanup
   ```
4. Abra um Pull Request no GitHub explicando as alterações.

---

## Próximos passos que posso executar para você
- Consolidar os arquivos (mover a versão completa para a raiz e remover duplicatas).
- Corrigir `onclick`/nomes de função e radios com `checked` duplicado.
- Atualizar os inputs para `type="number"` e adicionar validação inline.
- Adicionar um arquivo LICENSE (ex.: MIT).

Diga qual dessas opções você quer que eu aplique e eu faço as mudanças e envio outro commit/PR.
