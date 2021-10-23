import { ILinkedList } from './interfaces/index';

export class LinkedList implements ILinkedList {
	val: number;
	next: LinkedList | null;

	constructor(val: number = 0, next: LinkedList | null = null) {
		this.val = val;
		this.next = next;
	}

	addOne(next?: number | LinkedList, ctx: LinkedList = this): LinkedList {
		if (typeof next === 'number') ctx.next = new LinkedList(3);
		else if (next instanceof LinkedList) ctx.next = next;
		return this;
	}


	addMany(next?: LinkedList[]): LinkedList {
		let current: LinkedList = this;
		next.forEach((el, idx) => {
			if(current){
				current.next = el;
				current = el
			}
		})
		return this;
	}

	displayAll(): void {
		let current: LinkedList | number | null = this;
		while (current) {
			
			console.log("Current: ", current);
			current = current.next;
			
		}
	}
}

