import SimpleLinkedList from './SimpleLinkedList';
import DoubleNode from '../nodeClasses/DoubleNode';
import IDoubleLinkedList from '../interfaces/lists/IDoubleLinkedList';

export default class DoubleLinkedList extends SimpleLinkedList implements IDoubleLinkedList{
  override NodeList: DoubleNode[] | null;

  constructor(...DoubleNodeList: DoubleNode[] | null){
    super(...DoubleNodeList);
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
    nodes.forEach((node: DoubleNode)=>{
        node.pointer = this.NodeList[0];
        this.NodeList[0].previous = node;
        this.NodeList.unshift(node);
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

  override insertAt(node: DoubleNode, to: number): DoubleLinkedList{
    if(to <= 0) this.addPrevious(node);
    else if(to >= this.NodeList.length - 1) this.add(node);

    else{
      const tmpArr: DoubleNode[] = this.NodeList.splice(0, to);
      node.previous = tmpArr[tmpArr.length - 1];
      node.pointer = this.NodeList[0];
      tmpArr[tmpArr.length - 1].pointer = node;
      this.NodeList[0].previous = node;

      this.NodeList.unshift(node);
      this.NodeList.unshift(...tmpArr);
    }
    return this;
  }

  override removeAt(from: number): DoubleLinkedList{

    if(from >= this.NodeList.length - 1) {
      this.NodeList.pop();
      this.NodeList[this.NodeList.length - 1].pointer = null;
    }
    else if(from <= 0) {
      this.NodeList.shift();
      this.NodeList[0].previous = null;
    }
    else{
      const tmpArr: DoubleNode[] = this.NodeList.splice(0, from);
      tmpArr.pop();
      tmpArr[tmpArr.length - 1].pointer = this.NodeList[0];
      this.NodeList[0].previous = tmpArr[tmpArr.length - 1];

      this.NodeList.unshift(...tmpArr);
    }

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
