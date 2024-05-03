/**
 * ReactiveVariable class
 * A class that can be used to create a reactive variable.
 * @param isBehavioral : A boolean value that determines whether the variable is behavioral subject or not.
 * @param defaultValue : Default value to set to the subject
 *
 * Usage:
 * 1. Import the ReactiveVariable class in the component where you want to use it.
 * 2. Create a new instance of the class.
 * 3. Use the value property to get the current value of the variable.
 * 4. Use the value property to set the value of the variable.
 * 5. Use the value$ property to get the observable of the variable.
 *
 */

import { BehaviorSubject, Observable, Subject } from 'rxjs';

class ReactiveVariable<T> {
  private _value$: BehaviorSubject<T> | Subject<T>;
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

  constructor(isBehavioral: boolean = false, defaultValue?: T) {
    if (isBehavioral) {
      this._value = defaultValue;
      this._value$ = new BehaviorSubject<T>(defaultValue as T);
    } else {
      this._value$ = new Subject<T>();
    }
  }
}

export { ReactiveVariable };
