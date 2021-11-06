import IDoubleCircularLinkedList from '../interfaces/lists/IDoubleCircularLinkedList';
import SimpleCircularLinkedList from './SimpleCircularLinkedList';
import DoubleCircularNode from '../nodeClasses/DoubleCircularNode';

export default class DoubleCircularLinkedList extends SimpleCircularLinkedList implements IDoubleCircularLinkedList {
  override NodeList: DoubleCircularNode[];

  constructor(...DoubleCircularNodeList: DoubleCircularNode[] | null){
    super(...DoubleCircularNodeList);
    this.NodeList[0].previous = this.NodeList[this.NodeList.length - 1];
  }

  override add(...nodes: DoubleCircularNode[]): DoubleCircularLinkedList {
    nodes.forEach((node: DoubleCircularNode, idx: number)=>{
      if(idx == nodes.length - 1){
        node.pointer = this.NodeList[0];
        this.NodeList[0].previous = node;
      }
      node.previous = this.NodeList[this.NodeList.length - 1];
      this.NodeList[this.NodeList.length - 1].pointer = node;
      this.NodeList.push(node);
    })
    return this;
  }

  override addPrevious(...nodes: DoubleCircularNode[]): DoubleCircularLinkedList{

    nodes.forEach((node: DoubleCircularNode, idx:number)=>{
      if(idx == nodes.length - 1){
        node.previous = this.NodeList[this.NodeList.length - 1];
        this.NodeList[this.NodeList.length - 1].pointer = node;
      }
      node.pointer = this.NodeList[0];
      this.NodeList[0].previous = node;
      this.NodeList.unshift(node);
    })
    return this;
  }

  override insertAt(node: DoubleCircularNode, to: number): DoubleCircularLinkedList{
    if(to >= this.NodeList.length - 1) this.add(node);
    else if(to <= 0) this.addPrevious(node);
    else{
      const tmpArr: DoubleCircularNode[] = this.NodeList.splice(0, to);
      tmpArr[tmpArr.length - 1].pointer = node;
      node.previous = tmpArr[tmpArr.length - 1];
      node.pointer = this.NodeList[0];
      this.NodeList[0].previous = node;

      this.NodeList.unshift(node);
      this.NodeList.unshift(...tmpArr);
    }
    return this;
  }

  override removeAt(from: number): DoubleCircularLinkedList{
    if(from <= 0){
      this.NodeList.shift();
      this.NodeList[this.NodeList.length - 1].pointer = this.NodeList[0];
      this.NodeList[0].previous = this.NodeList[this.NodeList.length - 1];
    }
    else if(from >= this.NodeList.length - 1){
      this.NodeList.pop();
      this.NodeList[0].previous = this.NodeList[this.NodeList.length - 1];
      this.NodeList[this.NodeList.length - 1].pointer = this.NodeList[0];
    }
    else{
      const tmpArr: DoubleCircularNode[] = this.NodeList.splice(0, from);
      tmpArr.pop();
      tmpArr[tmpArr.length - 1].pointer = this.NodeList[0];
      this.NodeList[0].previous = tmpArr[tmpArr.length - 1]

      this.NodeList.unshift(...tmpArr);
    }
    return this;
  }

}
