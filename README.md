# tarefa

Gerenciador de tarefas com landing pública, autenticação Google, tarefas privadas ou públicas e um backmock Express para desenvolvimento.

## Desenvolvimento local

```bash
npm install
npm run dev:all
```

Abra `http://localhost:3000`. O Next.js encaminha `/api/*` para o backmock Express em `http://localhost:9000`. Se essa porta já estiver em uso, defina `BFF_PORT=9001` e `BFF_TARGET_URL=http://localhost:9001` no ambiente antes de iniciar os servidores. As tarefas do mock ficam em memória e voltam aos dados iniciais quando o servidor reinicia.

Durante `next dev`, as páginas de trabalho e APIs ficam liberadas para desenvolvimento local. O botão Google em `/login` e `/signup` cria uma sessão local de demonstração; nenhuma credencial Google é necessária nesse modo.

## Rotas

- `/`: landing page
- `/login` e `/signup`: entrada/cadastro com Google
- `/tasks`: gerenciar tarefas
- `/public`: mural com tarefas compartilhadas
- `/terms` e `/privacy`: informações legais
- `/api/tasks`: listar e criar tarefas; exige sessão fora do modo de desenvolvimento
- `/api/tasks/:id`: editar ou remover tarefa; exige sessão fora do modo de desenvolvimento
- `/api/tasks/public`: lista apenas tarefas públicas

## Google OAuth em homologação e produção

Cadastre um cliente OAuth do tipo aplicação web no Google Cloud Console e configure a URL de callback autorizada para `https://SEU_DOMINIO/api/auth/callback`. Copie `.env.example` para `.env.local` no desenvolvimento ou configure as mesmas variáveis no ambiente de hospedagem:

- `GOOGLE_CLIENT_ID`: ID do cliente OAuth
- `GOOGLE_CLIENT_SECRET`: segredo do cliente OAuth
- `GOOGLE_REDIRECT_URI`: URL HTTPS autorizada, terminando em `/api/auth/callback`
- `SESSION_SECRET`: segredo aleatório longo para assinar sessões
- `NEXT_PUBLIC_BFF_URL`: `/api` para usar o rewrite local existente
- `BFF_TARGET_URL`: endereço interno do BFF usado pelo rewrite do Next.js

Em builds de homologação e produção, as rotas `/tasks` e `/api/tasks` exigem um cookie de sessão assinado emitido somente após o callback validar o usuário no Google. `/api/tasks/public` e `/public` continuam públicos. Não use o segredo de demonstração local em ambientes publicados.

## Verificação

```bash
npm run lint
npm run build
```
