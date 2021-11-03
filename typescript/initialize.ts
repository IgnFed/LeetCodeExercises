import SimpleLinkedList from './listClasses/SimpleLinkedList';
import SimpleNode from './nodeClasses/SimpleNode';

import DoubleLinkedList from './listClasses/DoubleLinkedList';
import DoubleNode from './nodeClasses/DoubleNode';

import Util from './Utils';

const Console = new Util();


Console.blue( "\n"+"##".repeat(10) +" SIMPLE LINKED LIST " + "##".repeat(10)+"\n");

function initSimpleNode():SimpleNode[]{
  let arr:SimpleNode[] = [];
  for(let i =1; i<=10; i++){
    arr.push(new SimpleNode(i));
  }
  return arr;

}

const newSimpleLinkedList = new SimpleLinkedList(...initSimpleNode());
newSimpleLinkedList.insertAt(new SimpleNode(23), 2)
newSimpleLinkedList.removeAt(2);
newSimpleLinkedList.print();


Console.green( "\n"+"##".repeat(10) +" DOUBLE LINKED LIST " + "##".repeat(10)+"\n");
function initDoubleNode(multiply:number = 1): DoubleNode[]{
  let arr: DoubleNode[] = [];
   for(let i =1; i<=10; i++){
    arr.push(new DoubleNode(i*multiply));
  }
  return arr;
}


const newDoubleLinkedList = new DoubleLinkedList(...initDoubleNode(2));
newDoubleLinkedList.addPrevious(...initDoubleNode(2));
newDoubleLinkedList.print();

