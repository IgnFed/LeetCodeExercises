import { LinkedList } from "./linked-list";

const newLinkedList: LinkedList = new LinkedList(7);
const newLinkedList1: LinkedList = new LinkedList(3);
const newLinkedList2: LinkedList = new LinkedList(6);
const newLinkedList3: LinkedList = new LinkedList(8);

const LinkedListArray = [newLinkedList1,newLinkedList2,newLinkedList3];
newLinkedList.addMany(LinkedListArray);
newLinkedList.displayAll()

