require 'webrick';
require 'json';
require 'rack/cors';

#servidor rodando na porta 4567
server = WEBrick::HTTPServer.new(Port: 4567)

#array de objetos
Produtos= [
    {
     ID: 1,
     Valor: '$370.00',
     Nome: 'Goodyear'
    },
    {
     ID: 2,
     Valor: '$530.00',
     Nome: 'Goodyear'
    },
    {
     ID: 3,
     Valor: '$430.00',
     Nome: 'Lemans'
    },
    {
     ID: 4,
     Valor: '$740.00',
     Nome: 'EarnShow'
    }
]

#Rota para retornar todos os dados de uma so vez quando a pagina for carregada
server.mount_proc '/Produtos' do | req, res |
    res.content_type = 'application/json' #content_type esta definindo o tipo de resposta que no caso vai ser em json
    res.body = Produtos.to_json #tojson esta definindo o que vai ser impreso no corpo da mensagem
end

trap('INT') { server.shutdown }
server.start