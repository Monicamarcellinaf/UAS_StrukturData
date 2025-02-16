function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '[': ']',
        '{': '}',
    };

    for (let char of s) {
        if (char in map) {
            stack.push(char); // Tambahkan ke stack jika buka kurung
        } else {
            const top = stack.pop(); // Ambil elemen terakhir dari stack
            if (map[top] !== char) {
                return false; // Tidak valid jika pasangan tidak cocok
            }
        }
    }

    return stack.length === 0; // Valid jika stack kosong
}

console.log(isValid("()[]{}"));  // Output: true
console.log(isValid("(]"));      // Output: false
console.log(isValid("([{}])"));  // Output: true
console.log(isValid("({[}]"));   // Output: false
