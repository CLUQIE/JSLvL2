const str = "'This is aren't text'"
console.log(str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2'));
