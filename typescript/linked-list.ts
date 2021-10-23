import {ILinkedList, IDoubleLinkedList} from './interfaces/index.js';


export class LinkedList implements ILinkedList {
	val: number;
	next: LinkedList | null;

	constructor(val: number = 0, next: LinkedList | null = null) {
		this.val = val;
		this.next = next;
	}

	addOne(next?: number | LinkedList): LinkedList {
		if (typeof next === 'number') this.next = new LinkedList(3);
		else if (next instanceof LinkedList) this.next = next;
		return this;
	}


	addMany(next?: LinkedList[]): LinkedList {
		let current: LinkedList = this;
		next.forEach(el => {
			if (current) {
				current.next = el;
				current = el
			}
		})
		return this;
	}

	displayAll(): void {
		let current: LinkedList | number | null = this;
		let msg: string = ``;
		while (current) {
			msg += current.next ? `${current.val} ->` : `${current.val} -> null`
			current = current.next;

		}
		console.log(msg);
	}
}

export class DoubleLinkedList extends LinkedList implements IDoubleLinkedList {

	prev: DoubleLinkedList | null;
	val: number;
	next: DoubleLinkedList | null;

	constructor(val: number = 0, next: DoubleLinkedList | null = null, prev: DoubleLinkedList | null = null) {
		super(val, next);
		this.prev = prev;
	}

	addOnePrev(prev?: DoubleLinkedList | number): DoubleLinkedList {
		if (typeof prev === 'number') this.prev = new DoubleLinkedList(prev);
		else this.prev = prev;
		return this;
	}

	addManyPrev(prev?: DoubleLinkedList[]): DoubleLinkedList {
		let current: DoubleLinkedList | null = this;
		let ant: DoubleLinkedList | null = current;
		prev.forEach((el, idx) => {
			if (idx !== 0) {
				if (current.next) {
					current.prev = ant;
					ant = current;
					current = el;
				}
			}
			if (idx === 0) current = el;

			if (idx === prev.length - 1) current.prev = ant;

		})

		return this;
	}

	displayAll(): void {
		let current: DoubleLinkedList | number | null = this;
		let msg = ``;

		while (current) {
			msg += `${current.prev?.val ? current.prev?.val : current.prev} <- ${current.val} -> ${current.next?.val ? current.next?.val : current.next}\n`;
			current = current.next;
		}
		console.log(msg);
	}

}
