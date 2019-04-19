const str = "This 'is' aren't string";
const regexp = /^'|(\s)'|'(\s)|'$/g;
console.log(str.replace(regexp, '$1"$2'));
