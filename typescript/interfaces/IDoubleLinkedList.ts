import ILinkedList from './ILinkedList';
export default interface IDoubleLinkedList extends ILinkedList {
	prev: IDoubleLinkedList | null;
	addOnePrev(prev?: number | IDoubleLinkedList, ctx?: IDoubleLinkedList): IDoubleLinkedList,
	addManyPrev(prev?: IDoubleLinkedList[]): IDoubleLinkedList,
}
