import {ISimpleNode} from './interfaces/index'


export class SimpleNode implements ISimpleNode{
  value: number;
  pointer?: ISimpleNode;

  constructor(value: number, pointer?: ISimpleNode){
    this.value = value;
    this.pointer = pointer
  }

}
