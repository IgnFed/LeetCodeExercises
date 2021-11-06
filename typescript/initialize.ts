import SimpleLinkedList from './listClasses/SimpleLinkedList';
import SimpleNode from './nodeClasses/SimpleNode';

import DoubleLinkedList from './listClasses/DoubleLinkedList';
import DoubleNode from './nodeClasses/DoubleNode';

import SimpleCircularLinkedList from './listClasses/SimpleCircularLinkedList';
import SimpleCircularNode from './nodeClasses/SimpleCircularNode';

import DoubleCircularLinkedList from './listClasses/DoubleCircularLinkedList';
import DoubleCircularNode from './nodeClasses/DoubleCircularNode';

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
newDoubleLinkedList.print();


Console.red( "\n"+"##".repeat(10) +" SIMPLE CIRCULAR LINKED LIST " + "##".repeat(10)+"\n");
function initSimpleCircularNode(multiply:number = 1): SimpleCircularNode[]{
  let arr: SimpleCircularNode[] = [];
   for(let i =1; i<=10; i++){
    arr.push(new SimpleCircularNode(i*multiply));
  }
  return arr;
}


const newSimpleCircularList = new SimpleCircularLinkedList(...initSimpleCircularNode(2));
newSimpleCircularList.print();



Console.yellow( "\n"+"##".repeat(10) +" DOUBLE CIRCULAR LINKED LIST " + "##".repeat(10)+"\n");
function initDoubleCircularNode(multiply:number = 1): DoubleCircularNode[]{
  let arr: DoubleCircularNode[] = [];
   for(let i =1; i<=10; i++){
    arr.push(new DoubleCircularNode(i*multiply));
  }
  return arr;
}


const newDoubleCircularList = new DoubleCircularLinkedList(...initDoubleCircularNode(2));
newDoubleCircularList.print();




