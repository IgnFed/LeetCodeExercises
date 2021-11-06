import IDoubleCircularNode from '../interfaces/nodes/IDoubleCircularNode';
import SimpleCircularNode from './SimpleCircularNode';

export default class DoubleCircularNode extends SimpleCircularNode implements IDoubleCircularNode {
  override previous: DoubleCircularNode;
}
