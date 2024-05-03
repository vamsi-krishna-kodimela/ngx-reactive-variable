import { ReactiveBehavioralVariable } from './reactive-behavioral-varibale.class';
import { ReactiveSignalVariable } from './reactive-signal-variable.class';
import { ReactiveSubjectVariable } from './reactive-subject-variable.class';

function ReactiveVariable<T>(
  defaultValue: T,
  type: REACTIVE_VARIABLE_TYPE = REACTIVE_VARIABLE_TYPE.SIGNAL
) {
  switch (type) {
    case REACTIVE_VARIABLE_TYPE.BEHAVIORAL:
      return new ReactiveBehavioralVariable<T>(defaultValue);
    case REACTIVE_VARIABLE_TYPE.SUBJECT:
      return new ReactiveSubjectVariable<T>(defaultValue);
    default:
      return new ReactiveSignalVariable<T>(defaultValue);
  }
}
enum REACTIVE_VARIABLE_TYPE {
  BEHAVIORAL = 'BEHAVIORAL',
  SUBJECT = 'SUBJECT',
  SIGNAL = 'SIGNAL',
}

export { ReactiveVariable, REACTIVE_VARIABLE_TYPE };
