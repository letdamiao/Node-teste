
const path = require('path')
//const custumPath = '/relatorios/leticia/relatoriosmanal.pdf'
console.log(path.dirname(custumPath))
console.log(path.basename(custumPath))
console.log(path.dirname(custumPath))
console.log(path.extname(custumPath))

console.log(path.resolve('teste.txt'))
//formatar caminhos (path)

const midFoder = 'relatorios'
const fileName = 'aquivo.txt'
const finalPath = path.join('/', 'arquivos', midFolder, fileName)
console.log(finalPath)