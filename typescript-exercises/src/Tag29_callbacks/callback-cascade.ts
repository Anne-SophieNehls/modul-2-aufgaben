export function calculateSumAndMore( 
    a: number, b: number, callback1: (result1: number) => number, callback2: (result2: number) => number) {
        const addition = a + b
        console.log(addition)

        const result1 = callback1(addition)
        console.log(result1)
        const result2 = callback2(result1)
        return result2
    }

export function dobble (number: number): number{
    return number * 2
}

export function binary (number: number): number{
    return Number(number.toString(2))
}