import {LinkedList, DoubleLinkedList} from "./linked-list";


console.log("\nLISTA ENLAZADA SIMPLE\n")

const newLinkedList: LinkedList = new LinkedList(7);
const newLinkedList1: LinkedList = new LinkedList(3);
const newLinkedList2: LinkedList = new LinkedList(6);
const newLinkedList3: LinkedList = new LinkedList(8);

let LinkedListArray = [newLinkedList1, newLinkedList2, newLinkedList3];
newLinkedList.addMany(LinkedListArray);
newLinkedList.displayAll();


console.log("\n\nLISTA DOBLEMENTE ENLAZADA\n");

const newDoubleLinkedList: DoubleLinkedList = new DoubleLinkedList(1);
const newDoubleLinkedList1: DoubleLinkedList = new DoubleLinkedList(2);
const newDoubleLinkedList2: DoubleLinkedList = new DoubleLinkedList(4);
const newDoubleLinkedList3: DoubleLinkedList = new DoubleLinkedList(5);

const DoubleLinkedListArray = [newDoubleLinkedList1, newDoubleLinkedList2, newDoubleLinkedList3];
newDoubleLinkedList.addMany(DoubleLinkedListArray);
newDoubleLinkedList.addManyPrev(DoubleLinkedListArray);


newDoubleLinkedList.displayAll()
