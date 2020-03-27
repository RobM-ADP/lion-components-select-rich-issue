import '@lion/select-rich/lion-select-rich.js';
import '@lion/select-rich/lion-options.js';
import '@lion/select-rich/lion-option.js';



    const ops = document.querySelector('lion-options');
    ['a', 'b', 'c'].forEach((val) => {
        const op = document.createElement('lion-option');
        op.choiceValue = val;
        op.innerText = val;
        ops.appendChild(op);
    })
