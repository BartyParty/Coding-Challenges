function findNeedle(haystack){
    const needlePosition = haystack.findIndex(elem => elem === 'needle')
    return `found the needle at position ${needlePosition}`
}