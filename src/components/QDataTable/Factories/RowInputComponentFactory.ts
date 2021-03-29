import { InputType } from '../Enums/InputTypeEnum';

import DtInput from '../Components/Inputs/DtInput.vue';

export function createRowInputComponent(type: InputType): any {
  if (!type) throw new Error('Missing type parameter.');

  console.log(type);

  switch (type) {
    case InputType.Input:
      return DtInput;
    default:
      throw new Error('Unknown element type.');
  }
}
