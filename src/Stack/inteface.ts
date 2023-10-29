export interface IStackNode<T> {
    value: T;
    next: IStackNode<T> | null;
}

export class StackNode<T> implements IStackNode<T> {
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }

    next: IStackNode<T> | null;
    value: T;
}

export interface IStack<T> {
    size: number;
    top: IStackNode<T> | null;

    push(value: T): void;

    pop(): T | null;

    peek(): T | null;
}