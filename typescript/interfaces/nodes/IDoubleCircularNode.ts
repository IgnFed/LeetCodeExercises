import ISimpleCircularNode from './ISimpleCircularNode';

export default interface IDoubleCircularNode extends ISimpleCircularNode {
  previous: IDoubleCircularNode;
}
