// export {}

export namespace TextTools {
     export function grossbuchstaben(text: string): string {
        return text.toUpperCase();
     }
     export function rueckwaerts(text: string): string {
        return text.split('').reverse().join('');
    }
}
