
/*
Given a linked list return the value of Kth Node from the last

Example:

Input 1:
1->2->3->4->5
K = 2

Output: 4

Explanation: 4 is the value of 2nd node from the end

Input 2:

11->22->31->46->58
K = 4
Output: 22

Explanation: 22 is the value of 4th node from the end
*/

function kLastNode(ll,k){
    
    let length =1;
    let node=ll;
    while(node.next!==null){
        length++;
       node = node.next;
    }
    length=length-k;
    node=ll;
    
    while(length!==0){ 
      node = node.next;
      length--;
    }
    
    return node.val;
}


let ll = {
val:1,
next:{
        val:2,
        next:{
            val:3,
            next:{
                val:4,
                next:{
                    val:5,
                    next:null
                }
            }
        }
   }
},k=2;
let result = kLastNode(ll,k);
console.log(result);

