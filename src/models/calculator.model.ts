
import { ActionKeys } from '../enums/action-keys.enum';
import { NumericKeys } from '../enums/numeric-keys.enum';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';

export class StandardCalculatorModel extends AbstractCalculatorModelFactory {

  //private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  public pressActionKey(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        // eslint-disable-next-line no-eval
        this._buffer = (<number> eval(this._buffer)).toString();
        break;
      default:
        throw new Error('Invalid Action');
    }
  }

  public display(): string {
    return this._buffer;
  }
}

export abstract class AbstractCalculatorModelFactory implements ICalculatorModel {

  private _buffer: string = '';

  pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  pressOperatorKey(key: OperatorKeys): void {
    this._buffer += key;
  }

  pressActionKey(key: ActionKeys): void {
    switch (key) {
      case ActionKeys.CLEAR:
        this._buffer = '';
        break;
      case ActionKeys.DOT:
        this._buffer += '.';
        break;
      case ActionKeys.EQUALS:
        // eslint-disable-next-line no-eval
        this._buffer = (<number> eval(this._buffer)).toString();
        break;
      default:
        throw new Error('Invalid Action');
    }
  }

  abstract display(): string;
}

// For creating a `StandardCalculatorModel`
export class StandardCalculatorModelFactory extends AbstractCalculatorModelFactory {

  public constructor() {
    super();
  }
  
  display(): string {
    return this._buffer;
  }

}

export class RoundingCalculatorModel extends AbstractCalculatorModel 
                                      implements ICalculatorModel {

  pressNumericKey(key: NumericKeys): void {
    throw new Error('Method not implemented.');
  }

  pressOperatorKey(key: OperatorKeys): void {
    throw new Error('Method not implemented.');
  }

  pressActionKey(key: ActionKeys): void {
    throw new Error('Method not implemented.');
  }

  display(): string {
    return parseFloat(this.buffer).toFixed(this.nrDecimals);
  }

}

export class RoundCalculatorModelFactory extends AbstractCalculatorModelFactory {

  private nrDecimals: number;

  public constructor(nrDecimals: number) {
    super();
    this.nrDecimals = nrDecimals;
  }

  pressNumericKey(key: NumericKeys): void {
    throw new Error('Method not implemented.');
  }

  pressOperatorKey(key: OperatorKeys): void {
    throw new Error('Method not implemented.');
  }

  pressActionKey(key: ActionKeys): void {
    throw new Error('Method not implemented.');
  }

  display(): string {
    return parseFloat(this.buffer).toFixed(this.nrDecimals);
  }

}
