import INode from './INode';

export default interface ISimpleCircularNode extends INode{
  pointer: ISimpleCircularNode;
}
