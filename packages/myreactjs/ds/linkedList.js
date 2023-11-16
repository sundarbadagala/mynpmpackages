class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }
    isEmpty(){
        return this.size === 0
    }
    getSize(){
        return this.size
    }
    prepend(el){
        const node = new Node(el)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }
    append(el){
        const node = new Node(el)
        if(this.isEmpty()){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }
    insert(el, index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(el)
        }else{
            const node = new Node(el)
            let prev = this.head
            for(let i=0; i <  index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }
    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removeNode
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i=0; i< index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        return removeNode.value
    }
    removeValue(el){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value === el){
            this.head = this.head.next
            this.size--
            return el
        }else{
            let prev = this.head
            while(prev.next && prev.next.value !== el){
                prev = prev.next
            }
            if(prev.next){
                let removeNode = prev.next
                prev.next = removeNode.next
                this.size--
                return el
            }
            return null
        }
    }
    removeFromFront(){
        if(this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.size--
        return value
    }
    removeFromEnd(){
        if(this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if(this.size === 1){
            this.head = null
            this.tail = null
        }else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.size--
        return value
    }
    search(el){
        if(this.isEmpty()){
            return -1
        }
        let curr = this.head
        for(let i=0; i< this.getSize(); i++){
            if(curr.value === el){
                return i
            }
            curr = curr.next
        }
        return -1
    }
    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if(this.isEmpty()){
            console.log('empty')
        }else{
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value} `
                curr = curr.next 
            }
            console.log(listValues)
        }
    }
}

export default LinkedList;
