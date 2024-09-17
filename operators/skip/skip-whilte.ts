import { interval } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';

// Ignora valores enquanto uma condição for verdadeira. Assim que a condição falha pela primeira vez, ele começará a emitir os valores subsequentes normalmente.

const lessThanTwo = ((n: number): boolean => n < 2);

const myInterval$ = interval(1000).pipe(take(5));
// Emite: 0, 1, 2, 3, 4 -> Um número por segundo

myInterval$.pipe(skipWhile(v => (lessThanTwo(v)))).subscribe(console.log);
// Saída: 2, 3, 4
