const Node = require('./node');

class LinkedList {
    constructor() {
    	this.length = 0;
    	this._head = null;
    	this._tail = null;
    }

    append(data) {
    	var node = new Node(data);
    	if(this.length){
    		this._tail.next = node;
        	node.prev = this._tail;
        	this._tail = node;
    	}
    	 else {
        this._head = node;
        this._tail = node;
    }
 
    this.length++;
     
    return this;

    }

    head() {
    	return this._head.data;
    }

    tail() {
    	return this._tail.data;
    }

    at(index) {
    	var current = this._head;
    	var count = 0;
    	while(count<index){
    		current = current.next;
    		count++;
    	}

    	return current.data;
    }

    insertAt(index, data) {
    	var current = this._head;
    	var count = 0;
    	while(count<index){
    		current = current.next;
    		count++;
    	}
    	current.next = current;
    	current.data = data;
    	return this;
    	
    }

    isEmpty() {
    	if (this._head === null){
    		return true;
    	}
    		else{
    			return false;
    		}
    	}
    

    clear() {
 		this._head.data = null;
 		this._tail.data = null;
 		this.length = 0;
 		return this;
 		
    }


    deleteAt(index) {
    	var current = this._head;
    	var count = 0;
    	if(this._head === this._tail){
    		this._head === null;
    		this._tail === null;
    		return this;
    	}
    	while(count<index){
    		current = current.next;
    		count++;
    	}
    	var delcurrent = current.prev;
    	delcurrent.next = current.next;
    	return this;
    	
    }

    reverse() {
    	if(this._head === this._tail){
    		return this;
    	}
    	var current = this._head;
    	var last = this._tail
    	var temp;
    	var n;
    	if (this.length % 2 ==0){
    		n = (this.length/2);
    	}
    	else{
    		n = ((this.length-1)/2)
    	}
    	for(var i=0; i<n; i++){
    		temp = current.data;
    		current.data = last.data;
    		last.data = temp;
    		current = current.next;
    		last = last.prev;


    	}
    	
    	return this;
    }

    indexOf(data) {
    	var currentNode = this._head; 
var count = 0; 
for(var i = 0; i < this.length; i++){ 
if (currentNode.data === data) return i; 
currentNode=currentNode.next; 
} 
return (-1); 
    }
}

module.exports = LinkedList;
