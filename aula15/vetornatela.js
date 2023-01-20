let num = [8, 7, 4, 2, 9]
console.log(num)

/*
for (let pos=0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
//Simplificando ainda mais o cod acima
/*
for (let pos in valores){
    console.log (`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let pos = num.indexOf(9)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor está na posição ${pos}`)
}
