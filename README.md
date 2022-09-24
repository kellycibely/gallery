# Gallery

Projeto de galeria de fotos dinâmicas com Grid Css

Utiliza [Angular CLI](https://github.com/angular/angular-cli) versão 14.0.0.

<img src="/src/assets/img/application.png" alt="gallery"/>

## Principais tecnologias

- **Angular**
- **MediaObserver**
- **IntersectionObserver**
- **Grid**
- **Angular-fontawesome**

Aplicação utiliza bibliotecas como **IntersectionObserver** para gerenciar o carregamento lazyload das imagens da galeria de fotos e **MediaObserver** utilizada para acompanhamento das alterações do Viewport em dipositivos distintos e aplicação das regras para responsividade correta das telas. 

## Estrutura do projeto

- **Core**: Diretório responsável por armazenar arquivos indisponsável para o sistema (ex: services...).
- **Pages**: Diretório responsável por armazenar a camada com exibição ou sejas os componentes responsáveis pelas telas.
- **Shared**: Diretório responsável por armazenar arquivos compartilhaveis ex(models e componentes...).

Projeto foi desenvolvido com uma arquitetura e organização de diretórios escalável e de fácil manutenção. Também utiliza de lazyload para gerenciamento das rotas dos modulos da aplicação.

## SETUP

- Clone o projeto

  $ git clone <url>


- Instale NPM packages

  $ npm install


- execute o projeto 

  $ ng serve
## Executando o projeto

após execute `ng serve` para rodar o servidor de desenvolvimento. Navegue para `http://localhost:4200/` para ver o grid de fotos.

**DEMO**: https://gallery-31ui.vercel.app/

