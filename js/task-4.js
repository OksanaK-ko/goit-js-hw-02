function formatString(string, maxLength = 40) {
  // Write code under this line
  let sentence = string.split('');
  if (sentence.length > maxLength) {
    sentence = sentence.slice(0, maxLength);
    string = sentence.join('') + '...';
  }
  return string;
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// 'Curabitur ligula sapien, tincidunt non.'

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// 'Vestibulum facilisis, purus nec pulvinar...'

console.log(
  formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
);
// 'Vestibulum facilisis, purus ne...'
