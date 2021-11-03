import SimpleNode from '../nodeClasses/SimpleNode';
import ILinkedList from '../interfaces/lists/ILinkedList';

export default class SimpleLinkedList implements ILinkedList {
  NodeList: SimpleNode[] | null;

  constructor(...NodeList: SimpleNode[] | null){
    this.NodeList = NodeList || null;
  }





  add(...nodes: SimpleNode[]): SimpleLinkedList {

    if(this.NodeList.length > 0) this.NodeList[this.NodeList.length - 1].pointer = nodes[0];
    nodes.forEach((node:SimpleNode, idx: number) =>{
      if(idx == nodes.length -1) node.pointer = null;
      else node.pointer = nodes[idx+1];
      this.NodeList.push(node);
    })
    return this;
  }

  insertAt(node: SimpleNode, to: number): SimpleLinkedList {
    if(this.NodeList.length > 0){
      if(to <= 0){
        node.pointer = this.NodeList[0];
        this.NodeList.unshift(node);
      }
      else if(to >= this.NodeList.length - 1){
        this.NodeList[this.NodeList.length - 1].pointer = node;
        this.NodeList.push(node);
      }
      else{
        const tmpArr: SimpleNode[] = this.NodeList.splice(to, this.NodeList.length - 1)
        this.NodeList.push(node);
        this.NodeList.push(...tmpArr);
      }
    }
    else this.NodeList.push(node);


    return this;
  }

  removeAt(from: number): SimpleLinkedList {
    if(from <= 0) this.NodeList.splice(0, 1);
    else if(from >= this.NodeList.length - 1){
      this.NodeList.splice(this.NodeList.length - 1 , 1);
      this.NodeList[this.NodeList.length - 1].pointer = null;
    }
    else{
      this.NodeList.splice(from , 1);
      this.NodeList[from - 1].pointer = this.NodeList[from] ? this.NodeList[from - 1].pointer = this.NodeList[from] : this.NodeList[from - 1].pointer = null;
    }
    return this;
  }

  print(): void {
    let msg = '';
    this.NodeList.forEach((node:SimpleNode, idx: number)=>{
      msg += `${idx != this.NodeList.length - 1 ? `${node.value} -> `: `${node.value} -> ${node.pointer}`}`;
    })
    console.log(msg);
  }

  printNoFormat(): void {
    this.NodeList.forEach((node)=>{
      console.log(node)
    })
  }

}
