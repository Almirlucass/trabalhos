export function media (nota) {
    media = 0
    for (let index = 0; index < nota.length; index++) {
        let media =+ nota[index];
    }
    if (media >= 6) {
        return "aprovado"
    } else {
        return "reprovado"
    }
}