import ISimpleCircularLinkedList from '../interfaces/lists/ISimpleCircularLinkedList';
import DoubleLinkedList from './DoubleLinkedList';
import SimpleCircularNode from '../nodeClasses/SimpleCircularNode';

export default class SimpleCircularLinkedList extends DoubleLinkedList implements ISimpleCircularLinkedList{
  override NodeList: SimpleCircularNode[] | null;
  override previous: SimpleCircularNode;

  constructor(...SimpleCircularNodeList: SimpleCircularNode[]){
    super(...SimpleCircularNodeList);
    this.previous = null;
    this.NodeList[this.NodeList.length - 1].pointer = this.NodeList[0];
  }

  override add(...nodes: SimpleCircularNode[]): SimpleCircularLinkedList{
    nodes.forEach((node:SimpleCircularNode, idx: number)=>{
      this.NodeList[this.NodeList.length - 1].pointer = node;
      node.previous = this.NodeList[this.NodeList.length - 1];
      this.NodeList.push(node);
      if(idx == nodes.length - 1) node.pointer = this.NodeList[0];
    })
    return this;
  }

  override removeAt(from: number): SimpleCircularLinkedList {
    if(from >= this.NodeList.length - 1){
      this.NodeList.pop();
      this.NodeList[this.NodeList.length - 1].pointer = this.NodeList[0];
    }
    else if(from <= 0){
      this.NodeList.shift();
      this.NodeList[0].previous = null;
      this.NodeList[this.NodeList.length - 1].pointer = this.NodeList[0];
    }
    else{
      const tmpArr = this.NodeList.splice(0, from);
      tmpArr.pop();
      tmpArr[tmpArr.length - 1].pointer = this.NodeList[0];
      this.NodeList[0].previous = tmpArr[tmpArr.length - 1];

      this.NodeList.unshift(...tmpArr);
    }
    return this;
  }

  override insertAt(node: SimpleCircularNode, to:number): SimpleCircularLinkedList{
    if(to >= this.NodeList.length - 1) this.add(node);
    else if(to <= 0){
      this.NodeList[0].previous = node;
      node.pointer = this.NodeList[0];
      this.NodeList.unshift(node);
    }
    else{
      const tmpArr = this.NodeList.splice(0, to);
      tmpArr[tmpArr.length - 1].pointer = node;
      node.previous = tmpArr[tmpArr.length - 1];
      node.pointer = this.NodeList[0];
      this.NodeList[0].previous = node;
      this.NodeList.unshift(node);
      this.NodeList.unshift(...tmpArr);

    }
    return this;
  }
}
