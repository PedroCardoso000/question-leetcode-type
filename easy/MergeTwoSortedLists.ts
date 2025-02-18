/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/


// listas
let listone = [1, 2, 4];
let listtwo = [1, 3, 4];


function sortedList(list1: number[], list2: number[]): number[] {
    const result: any[] = [];
    for(let i = 0; i < list1.length; i++){
        result[i] == list1[i];
    }

    return result;
}

console.log(sortedList(listone, listtwo));


