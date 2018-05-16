let convert = function (input) {
    switch (input) {
        case 1643:
            return 'BLA'
        case 1644:
            return 'BRE'
        default:
            console.error('invalide kostenplaats ' . input)
            return null
    }
}

export default convert