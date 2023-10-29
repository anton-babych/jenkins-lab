import {IStack, IStackNode, StackNode} from "./inteface";
import {INVALID_STRING_VALUE_ERROR} from "./constants";

export class Stack<T> implements IStack<T> {
    size: number;
    top: IStackNode<T> | null;

    constructor() {
        this.size = 0;
        this.top = null;
    }

    push(value: T): void{
        if(typeof value === 'undefined') return;

        if(typeof value === "string"){
            const stringValue: string = value as string;
            const length = stringValue.length;

            if((length < 5 || length > 15)){
                throw new Error(INVALID_STRING_VALUE_ERROR);
            }
        }

        const node = new StackNode(value);

        if (this.size === 0) {
            this.top = node;
        } else {
            const currentTop = this.top;
            this.top = node;
            this.top.next = currentTop;
        }

        this.size++;
    }

    pop(): T | null {
        if (this.size === 0) return null

        const nodeToBeRemoved = this.top as IStackNode<T>;
        this.top = nodeToBeRemoved.next;
        this.size--;
        nodeToBeRemoved.next = null;

        return nodeToBeRemoved.value;
    }

    peek(): T | null {
        return this.top?.value ?? null;
    }
}
