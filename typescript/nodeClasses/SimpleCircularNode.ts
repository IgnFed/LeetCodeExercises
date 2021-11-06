import ISimpleCircularNode from '../interfaces/nodes/ISimpleCircularNode';
import DoubleNode from './DoubleNode';

export default class SimpleCircularNode extends DoubleNode implements ISimpleCircularNode{
  override previous: SimpleCircularNode;
}

