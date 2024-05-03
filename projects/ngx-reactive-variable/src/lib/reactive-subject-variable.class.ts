import { Observable, Subject } from 'rxjs';

class ReactiveSubjectVariable<T> {
  private _value$: Subject<T>;
  private _value?: T;

  get value$(): Observable<T> {
    return this._value$.asObservable();
  }

  get value(): T | undefined {
    return this._value;
  }

  set value(value: T | undefined) {
    this._value = value;
    this._value$.next(value!);
  }

  constructor(defaultValue?: T) {
    this._value = defaultValue;
    this._value$ = new Subject<T>();
  }
}

export { ReactiveSubjectVariable };
