//------------Variables--------------
let count = 0


// -----------Selections------------
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn')


// ----------Adding function to each button------------
btns.forEach((btn)=>{
    //for each button, we want to a create event to happen when it is clicked
    btn.addEventListener('click', (event)=>{
        //just to make sure we see what happens when we click the button
        //console.log(event.currentTarget);
        //console.log(event.currentTarget.classList)

        // saving the div class to a variable
        const styles = event.currentTarget.classList;
        //if function to assess whether to decrease, reset, or increase the counter
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        value.textContent = count
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = '#222';
        }
    });
})