import { interval } from 'rxjs';
import { skip, take } from 'rxjs/operators';

// Mantém o controle da emissão até que uma segunda observable emita seu primeiro valor. A partir daí, ele começará a emitir os valores da observable original.

const myInterval$ = interval(1000).pipe(take(5));

myInterval$.pipe(skip(1)).subscribe(console.log)
// Saída: 1, 2, 3, 4, 5 