//Objective is to design a linked list class, which has 5 methods:
//get: get the value at the given index, given the linked list starts at 0th index
//addAtHead: add node at head of linked list
//addAtTail: add node at tail of linked list
//addAtIndex: add node at given index of linked list
//deleteAtIndex: delete node at given index of linked list


//O(1) solution for get, addAtHead
//O(n) solution for addAtTail, addAtIndex, deleteAtIndex

class Node {
    constructor(val, next = null) {
        this.val = val
        this.next = next
    }
}

class MyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    get(index) {
        if (index > 0 && index >= this.size) {
            return -1
        }
        
        let curr = this.head
        let count = 0
        while (count < index) {
            curr = curr.next
            count++
        }
        
        return curr.val
    }

    addAtHead(val) {
        this.head = new Node(val, this.head)
        this.size++
    }    

    addAtTail(val) {
        let curr = this.head 
    
        if (!this.head) {
            this.head = new Node(val)
        } else {
            while (curr.next) {
                curr = curr.next
            }
            curr.next = new Node(val)
        }
        
        this.size++
    }

    addAtIndex(index, val) {
        if (index > this.size) {
            return
        } else if (index == 0) {
            this.head = new Node(val, this.head)
            return
        }
        
        let curr = this.head
        let count = 0
        let prev = null
        while (count < index) {
            prev = curr
            curr = curr.next
            count++
        }
        
        let node = new Node(val)
        node.next = curr
        prev.next = node
        
        this.size++
    }

    deleteAtIndex(index) {
        if (index == 0) {
            let curr = this.head 
            this.head = curr.next 
            this.size--
            return 
        }
        if (index > 0 && index >= this.size) {
            return
        }
        
        let curr = this.head
        let count = 0
        let prev = null
        while (count < index) {
            prev = curr
            curr = curr.next
            count++
        }
        prev.next = curr.next
        
        this.size--
    }
}