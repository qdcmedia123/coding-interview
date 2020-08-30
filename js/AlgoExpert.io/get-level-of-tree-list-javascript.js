//https://stackoverflow.com/questions/45486745/get-level-of-tree-list-javascript
function getNestedChildren(arr, parent, level) {
    var out = []
    for (var i in arr) {  
            if (arr[i].headerId == parent) {
                arr[i].level = level;

                var children = getNestedChildren(arr, arr[i].workID, level + 1)

                if (children.length) {
                    arr[i].children = children
                }
                out.push(arr[i])
            }
    }
    return out
}