let convert = function (input) {
    switch (input) {
        case 4425:
            return 14
        case 4826:
            return 30
        default:
            console.error('Invalide betalingsvoorwaarde ' + input)
            return null
    }
}

export default convert