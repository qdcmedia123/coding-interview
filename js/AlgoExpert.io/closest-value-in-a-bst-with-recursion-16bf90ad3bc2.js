//https://medium.com/journey-to-becoming-an-algoat/closest-value-in-a-bst-with-recursion-16bf90ad3bc2

function findClosestVal(tree, target, closest = Infinity) {
  if (tree === null) {
    return closest
  } 
  else {
    if (Math.abs(tree.val - target) < Math.abs(closest - target)) {
      closest = tree.val
    }
    if (target < tree.val) {
      return findClosestVal(tree.left, target, closest)
    } else {
      return findClosestVal(tree.right, target, closest)
  }
}