import IDoubleNode from '../interfaces/nodes/IDoubleNode';
import SimpleNode from './SimpleNode';

export default class DoubleNode extends SimpleNode implements IDoubleNode{
  previous?: DoubleNode | null;

  constructor(value: number, ...pointers:DoubleNode[]){
    super(value, ...pointers);
    this.previous = null;
  }
}
