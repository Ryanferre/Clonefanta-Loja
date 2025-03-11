require 'rubygems'
require 'webrick';
require 'json';
require 'rack/cors';
require 'webrick/httputils'

#servidor rodando na porta 4567
server = WEBrick::HTTPServer.new(Port: 4567)

#array de objetos
Produtos= [
    {
     ID: 1,
     Valor: '$370.00',
     Nome: 'Goodyear',
     pathFile: '../../imagens/r1.png'
    },
    {
     ID: 2,
     Valor: '$530.00',
     Nome: 'Goodyear',
     pathFile: '../../imagens/r2.png'
    },
    {
     ID: 3,
     Valor: '$430.00',
     Nome: 'Lemans',
     pathFile: '../../imagens/r3.png'
    },
    {
     ID: 4,
     Valor: '$740.00',
     Nome: 'EarnShow',
     pathFile: '../../imagens/r4.png'
    }
]

# Permitir CORS para todas as origens
server.mount_proc '/' do |req, res|
    res['Access-Control-Allow-Origin'] = '*'
    res['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
    res['Access-Control-Allow-Headers'] = 'Content-Type'
  
    # Responder com 200 OK se for uma requisição OPTIONS (pré-voo CORS)
    if req.request_method == 'OPTIONS'
      res.status = 200
      next
    end
  end


#Rota para retornar todos os dados de uma so vez quando a pagina for carregada
server.mount_proc '/Produtos' do | req, res |
    res['Access-Control-Allow-Origin'] = '*'#Habilita o cors a essa rota

    res.content_type = 'application/json' #content_type esta definindo o tipo de resposta que no caso vai ser em json
    res.body = Produtos.to_json #tojson esta definindo o que vai ser impreso no corpo da mensagem
end

trap('INT') { server.shutdown }
server.start