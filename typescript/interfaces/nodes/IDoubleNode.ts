import INode from './INode';

export default interface IDoubleNode extends INode{
  previous?: IDoubleNode | null;
}
