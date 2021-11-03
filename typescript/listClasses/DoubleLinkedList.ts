import SimpleLinkedList from './SimpleLinkedList';
import DoubleNode from '../nodeClasses/DoubleNode';
import IDoubleLinkedList from '../interfaces/lists/IDoubleLinkedList';

export default class DoubleLinkedList extends SimpleLinkedList implements IDoubleLinkedList{
  override NodeList: DoubleNode[] | null;
  previous: DoubleNode | null;

  constructor(...DoubleNodeList: DoubleNode[] | null){
    super(...DoubleNodeList);
    this.previous = null;
    this.setPointers();
  }

  setPointers():void{
    let current: DoubleNode = this.NodeList[0];

    this.NodeList.forEach((node, idx)=>{
      if(idx > 0){
        current.pointer = node;
        node.previous = current;
        current = node;
      }
    })
}

  addPrevious(...nodes: DoubleNode[]): DoubleLinkedList{
    nodes.forEach((node, idx)=>{
      if(idx > 0){
        node.pointer = this.NodeList[0];
        this.NodeList[0].previous = node;
        this.NodeList.unshift(node);
      }
    })
    return this;
  }

  override add(...nodes: DoubleNode[]):DoubleLinkedList{
    nodes.forEach((node,idx)=>{
      if(idx < nodes.length){
        node.previous = this.NodeList[this.NodeList.length-1];
        this.NodeList[this.NodeList.length-1].pointer = node;
        this.NodeList.push(node);
      }
    })
    return this;
  }

  override print(): void{
    let msg = ``;
    this.NodeList.forEach((node, idx)=>{
      msg += `${idx > 0 ? '  ': ''}${node.previous ? node.previous.value : node.previous} ${idx > 0 ? '  <-- ' : ' <-- '} ${node.value} ${idx > 0 ? ' --> ': ' --> '}  ${node.pointer ? node.pointer.value : node.pointer}\n`

    })

    console.log(msg);
  }
}
