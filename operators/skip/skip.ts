import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

// Ignora um número fixo de emissões no início da observable. Por exemplo, skip(3) ignorará os três primeiros valores emitidos.

const myInterval$ = interval(1000).pipe(take(5));
// Emite: 0, 1, 2, 3, 4 -> Um número por segundo

myInterval$.pipe(skip(1)).subscribe(console.log)
// Saída: 1, 2, 3, 4