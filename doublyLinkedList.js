var LinkedList = function() {
    var list = {};
    list.head = null;
    list.tail = null;
  
    list.addToTail = function(value) {
       const node = Node(value); //create the node
  
       if(!list.head) {//if the head doesn't exist, set new node
          list.head = node;
          list.tail = node;
       } else {
          list.tail.next = node; // set the old tail's next to the new node
          node.previous = list.tail; // add the connection to the previous node
          list.tail = node; // reset the tail
       }
  
  
    };
  
    list.addToHead = function(value) {
  
      const node = Node(value); // make new list item
      if(list.head) {
          list.head.previous = node; // make connection from old head to new item
          node.next = list.head; // make connection from new head to old head    
      } else {
          list.tail = node;
      }
      
      list.head = node; // set new head
  
    };
  
    list.removeHead = function() {
  
       const oldHead = list.head;
       const newHead = list.head.next;
       newHead.previous = null;
       list.head = newHead;
       return oldHead.value;
    };
  
    list.removeTail = function() {
        const oldTail = list.tail;
        const newTail = list.tail.previous;
        newTail.next = null;
        list.tail = newTail;
        return oldTail.value;
    }
  
    list.contains = function(target) {
  
       if(list.head) {
  
          if(list.head.value === target) return true;
  
          let temp = list.head;
          while( temp.next != null) {
             temp = temp.next;
             if(temp.value === target) return true;
          }
       }
  
       return false;
    };
  
    return list;
  };
  
  var Node = function(value) {
    var node = {};
  
    node.value = value;
    node.next = null;
    node.previous = null;
  
    return node;
  };