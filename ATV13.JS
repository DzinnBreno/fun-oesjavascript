function contarPares(n) {
    let contador = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }

    return contador;
}

console.log(contarPares(10));