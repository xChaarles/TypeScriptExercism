 const colorAry = [
        'black',
        'brown',
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'violet',
        'grey',
        'white',
    ];

export type color = typeof colorAry[number]

const ohms = [
    [1000000000, 'giga'],
    [1000000, 'mega'],
    [1000, 'kilo'],
]

export function decodedResistorValue([band1, band2, band3]: color[]): string {
    let num = ((colorAry.indexOf(band1)*10) + colorAry.indexOf(band2)) * (10 ** colorAry.indexOf(band3))

    const [divisor, prefix] = ohms.find(([divisor]) => num >= divisor) ?? [1, ""]
    return `${num / divisor} ${prefix}ohms`
}
