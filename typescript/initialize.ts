import {LinkedList} from './linkedListClasses';
import {SimpleNode} from './nodeClasses';


function initialize(LinkedList): SimpleNode[]{
  let newArr: SimpleNode[] = []
  for(let i = 1 ; i <= 10 ; i++)
    newArr.push(new SimpleNode(i));
  return newArr;
}



const newLinkedList = new LinkedList();

//initialize(newLinkedList)


//newLinkedList.add(...initialize(newLinkedList));
newLinkedList.add(new SimpleNode(1), new SimpleNode(2), new SimpleNode(3));



newLinkedList.print()
