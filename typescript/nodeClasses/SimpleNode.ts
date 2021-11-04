import INode from '../interfaces/nodes/INode';


export default class SimpleNode implements INode{
  value: number;
  pointer?: SimpleNode | null;

  constructor(value: number, pointer?: SimpleNode | null){
    this.value = value;
    this.pointer = pointer || null
  }
}
