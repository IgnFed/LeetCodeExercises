export default interface ILinkedList {
	val: number,
	next: ILinkedList | null,
	addOne(next?: number | ILinkedList, ctx?: ILinkedList): ILinkedList,
	addMany(next?: ILinkedList[]): ILinkedList,
	displayAll(): void

}


