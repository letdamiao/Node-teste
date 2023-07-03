const http = require('http')
//console.log(http)
const PORT =5000

//const server = http.createServer((req, res)=>{
   // res.write('Olá, Mundo!')
    //res.end()})

    // const server = http.createServer((req, res)=> {
    // if(req.url === '/home'){
    //     res.writeHeader(200, {'Content-type':'text/plan'})
    //     res.write('Página home')
    //     res.end()
    // }else if (req.url === '/sobre'){
    //     res.writeHeader(200, {'Content-type':'text/plan'})
    //     res.write('Página sobre')
    //     res.end()
    // }else{
    //     res.writeHeader(404, {'Content-type':'text/plan'})
    //     res.write('Página não encontrada')
    //     res.end()
    // }
    // })

    //Retornando HTML
    const server = http.createServer((req, res)=>{
        if(req.url === '/home'){
            res.writeHeader(200, {'Content-type':'text/html'})
            res.write('meta charset=utf8')
            res.write('<h1>Página home</h1>')
            res.write('<p>Esta é a página spobre</p>')
            res.end()
        }else if(req.url === '/sobre'){
        res.writeHeader(200, {'Content-type':'text/html'})
        res.write('meta charset=utf8')
        res.write('<h1>Página sobre</h1>')
        res.write('<p>Esta é a página sobre</p>')
        res.end()
        }else if(req.url === '/contato'){
        res.writeHeader(200, {'Content-type':'text/html'})
        res.write('meta charset=utf8')
        res.write('<h1>Página contato</h1>')
        res.write('<p>Esta é a página de contato</p>')
        res.end()
        }else{
            res.writeHeader(404, {'Content-type':'text/html'})
            res.write('<h1>Página não encontrada</h1>')
            res.end()
        }
    })


server.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
})