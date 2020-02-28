/* Basic insertion into a Binary Search Tree
* Includes structure for TreeNodes
* Basic recursive traversal approach
*/

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var insertIntoBST = function(root, val) {
   if (val > root.val && root.right) {
       insertIntoBST(root.right, val);
   } else if(val < root.val && root.left) {
       insertIntoBST(root.left, val);
   } else if (val > root.val) {
       root.right = new TreeNode(val);
   } else {
       root.left = new TreeNode(val);
   }
   return root;
};