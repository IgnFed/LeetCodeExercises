import INode from './INode';

export default interface ISimpleCircularNode extends INode{
  previous: ISimpleCircularNode;
}
