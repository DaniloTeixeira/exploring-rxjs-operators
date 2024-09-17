import { interval } from 'rxjs';
import { skipLast, take } from 'rxjs/operators';

//  Ignora um número fixo de valores no final da sequência de emissões. Por exemplo, skipLast(2) descartará os dois últimos valores emitidos pela observable.

const myInterval$ = interval(1000).pipe(take(5));
// Emite: 0, 1, 2, 3, 4 -> Um número por segundo

myInterval$.pipe(skipLast(3)).subscribe(console.log);
// Saída: 0, 1