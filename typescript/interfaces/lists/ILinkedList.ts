import INode from '../nodes/INode';


export default interface ILinkedList {

  NodeList: INode[] | null,

  add(...nodes: INode[]): ILinkedList,
  insertAt(node: INode, from: number): ILinkedList,
  removeAt(from: number): ILinkedList,
  printNoFormat(): void,
  print():void;
}


