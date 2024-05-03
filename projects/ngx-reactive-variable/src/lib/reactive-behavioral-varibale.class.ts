import { BehaviorSubject, Observable } from 'rxjs';

class ReactiveBehavioralVariable<T> {
  private _value$: BehaviorSubject<T>;
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

  constructor(defaultValue: T) {
    this._value = defaultValue;
    this._value$ = new BehaviorSubject<T>(defaultValue as T);
  }
}

export { ReactiveBehavioralVariable };
