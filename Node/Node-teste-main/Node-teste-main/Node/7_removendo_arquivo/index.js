const fs = require ('fs')

fs.unlink('index.html', function(err){
    if(err){
        console.log(err)
        return
    }
    console.log('Arquivo foi excluido!')
})