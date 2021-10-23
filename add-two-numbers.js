function addTwoNumbers(l1, l2) {
  let sum = 0;
  let current = new ListNode(0);
  let result = current;

  while (l1 || l2) {
    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    current.next = new ListNode(sum % 10);
    current = current.next;

    sum = sum > 9 ? 1 : 0;
  }

  if (sum) {
    current.next = new ListNode(sum);
  }
  return result.next;
}


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function arrToListNode(arr) {
  let idx = 0;
  let current = new ListNode(0);
  let nodeList = current;
  while (idx < arr.length) {
    current.val = arr[idx];
    current.next = new ListNode(arr[idx + 1])
    current = current.next;
    idx++;
  }
  return nodeList;
}


function strToInt(arr) {
  let result = '';
  for (let i = 0; i < arr.length; i++)
    result += arr[i];

  return parseInt(result);
}

let l1 = [9, 9, 9, 9, 9, 9, 9], l2 = [9, 9, 9, 9]
l1 = arrToListNode(l1), l2 = arrToListNode(l2);


console.log(l1);
