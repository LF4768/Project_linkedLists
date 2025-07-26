

class Node{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

export default class LinkedList{
    constructor(){
        this.head = null
    }
    append(value) {
        let node = new Node(value)
        if(!this.head) {
            this.head = node
            return
        }
        let current = this.head
        while(current.next) {
            current = current.next
        }
        current.next = node
    }
    prepend(value) {
        let node = new Node(value)
        node.next = this.head
        this.head = node
    }
    size() {
        if(this.head == null) {
            return 0
        }
        let count = 1
        let currentNode = this.head
        while(currentNode.next) {
            count++
            currentNode = currentNode.next
        }
        return count
    }
    front() {
        if(this.head != null) {
            return this.head
        } else {
            return null
        }
    }
    tail()  {
        if(this.head == null) {
            return null
        } else {
            let currentNode = this.head
            while(currentNode.next) {
                currentNode = currentNode.next
            }
            return currentNode
        }
    }
    at(index) {
        let currentNode = this.head 
        while(index > 0) {
            if(currentNode.next == null) {
                return false
            }
            currentNode = currentNode.next
            index--
        }
        return currentNode
    }
    pop() {
        if(this.head == null) {
            return "no node to delete"
        }
        let prevNode = this.head
        if(prevNode.next == null) {
            this.head = null
            return "node removed"
            
        }
        let removalNode = prevNode.next
        while(removalNode.next) {
            removalNode = removalNode.next
            prevNode = prevNode.next
        }
        prevNode.next = null
        return "node removed"
    }

    contains(value) {
        if(this.head == null) {
            return false
        }
        let node = this.head
        while(node.next) {
            if(value == node.value){
                return true
            }
            node = node.next
        }
        return false
    }
    find(value) {
        if(this.head == null) {
            return null
        }
        let currentNode = this.head
        let index = 0
        while(currentNode.next) {
            if(value == currentNode.value) {
                return index
            }
            currentNode = currentNode.next
            index++
        }
        return null
    }
    toString() {
        let str = ""
        if(this.head == null) {
            str = "head -> null"
            return str
        } 
        let currentNode = this.head
        while(currentNode) {
            str += ` ( ${currentNode.value} ) -> `
            currentNode = currentNode.next
        }
        str += " null"
        return str
    }
    insertAt(value, index) {
        if(index == 0) {
            this.prepend(value)
            return 
        }
        let prevNode = this.at(index - 1)
        let newNode = new Node(value)
        newNode.next = prevNode.next
        prevNode.next = newNode
    }
    removeAt(index) {
        if(index == 0) {
            this.head = this.head.next
            return
        }
        if(this.at(index) == false) {
            return "doesnt exist"
        }
        let prevNode = this.at(index - 1)
        if(prevNode == false) {
            return "index doesnt exist"
        }
        prevNode.next = prevNode.next.next
    }

}

// let list = new LinkedList()
// list.append("Hello")
// list.append("World")
// list.prepend("No")
// // console.log(list.size())
// // console.log(list)
// // console.log(list.front())
// // console.log(list.tail())
// // console.log(list.at(1))
// // console.log(list)
// // console.log(list.pop())
// // console.log(list)
// // console.log(list.contains("Hello"))
// // console.log(list.pop())
// // console.log(list.pop())
// // console.log(list.pop())
// // console.log(list.find("Hello"))
// // console.log(list.at(1))
// list.insertAt("Large", 2)
// // console.log(list.toString())
// console.log(list.removeAt(1))
// console.log(list.removeAt(1))
// console.log(list.removeAt(2))
// console.log(list.toString())


