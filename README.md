# gostack-rocketseat-backend

### Techs/libs: Express, Typescript, Date-fns,


# Recuperação de senha

**Requisitos Funcionais - quais funcionalidades existirão para a recuperação de senha**
  - o usuário deve poder recuperar sua senha informando o seu e-mail;
  - o usuário deve receber um e-mail com instruções de recuperação de senha;
  - o usuário deve poder resetar sua senha;

**Requisitos Não Funcionais - o envio de mail tem que ser feito usando o node-mailer - libs, BD**
  - utilizar o Mailtrap para testar envios em ambiente de desenvolvimento;
  - utilizar o Amazon SES - simple email service - para envios em produção;
  - o envio de e-mails deve acontecer em segundo plano - background job;

**Regras de Negócios**
  - o link enviado por e-mail deve expirar em 2h;
  - o usuário deve informar a senha nova ao resetar a senha;

# Atualização do perfil

**Requisitos Funcionais**
  - o usuário deve poder atualizar nome, e-mail e senha;

**Regras de Negócios**
  - o usuário não pode alterar seu email para um email já utilizado;
  - para atualizar sua senha, o usuário deve informar a senha antiga;
  - para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do prestador

**Requisitos Funcionais**
  - o usuário deve poder listar seus agendamentos de um dia específico;
  - o prestador deve receber uma notificação sempre que houver um novo agendamento;
  - o prestador deve poder visualizar as notificações não lidas;

**Requisitos Não Funcionais**
  - os agendamentos do prestador no dia devem ser armazenados em cache;
  - as notificações do prestador devem ser armazenadas no mongo db;
  - as notificações do prestador devem ser enviadas em tempo-real utilizando o socket.io;

**Regras de Negócios**
  - as notificações devem ter um status de lida ou não lida para o prestador controlar;
  
# Agendamento de serviços

**Requisitos Funcionais**
  - o usuário deve poder listar todos prestadores de serviço cadastrados;
  - o usuário deve poder listar os dias de um mês com pelo enos um horário disponível de um prestador;
  - o usuário deve poder listar horários disponíveis em um dia específico de um prestador;
  - o usuário deve poder realizar um novo agendamento com um prestador;

**Requisitos Não Funcionais**
  - a listagem de prestadores deve ser armazenada em cache;

**Regras de Negócios**
  - cada agendamento deve durar 1h exatamente;
  - os agendamentos deve estar disponíveis entre 8h e 18h - primeiro às 8, último às 17;
  - o usuário não pode agendar horário já ocupado;
  - o usuário não pode agendar horário que já passou;
  - o usuário só pode agendar serviços com prestadores;
