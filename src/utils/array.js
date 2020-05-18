export function removeItem(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
