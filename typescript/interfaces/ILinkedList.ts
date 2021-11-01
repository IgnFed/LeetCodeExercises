import ISimpleNode from './ISimpleNode'

export default interface ILinkedList {
  add(node: ISimpleNode): ILinkedList,
  addMany(nodes: ISimpleNode[]): ILinkedList,
  insertAt(node: ISimpleNode, from: number): ILinkedList,
  removeAt(from: number): ILinkedList,
  printNoFormat(): void,
  print():void;
}


