import ILinkedList from './ILinkedList';
import IDoubleNode from '../nodes/IDoubleNode';

export default interface IDoubleLinkedList extends ILinkedList{
  addPrevious(...nodes: IDoubleNode[]): IDoubleLinkedList;
}
