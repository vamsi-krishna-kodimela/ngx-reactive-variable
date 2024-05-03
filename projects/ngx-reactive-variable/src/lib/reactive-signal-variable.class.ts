import { WritableSignal, computed, Signal, signal } from '@angular/core';

class ReactiveSignalVariable<T> {
  private _value$: WritableSignal<T>;

  get value$(): Signal<T> {
    return computed(() => this._value$());
  }

  get value(): T {
    return this.value$();
  }

  set value(value: T) {
    this._value$.set(value);
  }

  constructor(defaultValue: T) {
    this._value$ = signal<T>(defaultValue);
  }
}

export { ReactiveSignalVariable };
