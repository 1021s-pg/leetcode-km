/*
*   Map over two binary trees and return an ascending array of the values
*   Leetcode medium
*/

var getAllElements = function(root1, root2) {
    const map = [];
    
    function mapTree(root) {
        if (root) {
            map.push(root.val);
            if(root.left) mapTree(root.left);
            if(root.right) mapTree(root.right);
        }
    }
    
    mapTree(root1);
    mapTree(root2);
    map.sort((a,b) => a-b);
    
    return map;
};