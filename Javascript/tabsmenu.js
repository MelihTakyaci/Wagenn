const option = document.querySelectorAll('.optionmenu');
const tab = document.querySelectorAll('.Tab')

option.forEach((value , key) => {
    value.addEventListener("click", () => {
        option.forEach((item) => {
            item.classList.remove('active');
        });
        value.classList.add('active');
        tab.forEach((tab , number) => {
            if(key == number){
                // tab.style.transition = 'opacity 3s ease 0s'
                // tab.style.opacity = '1'
                tab.classList.add('active');
            }else{
                tab.classList.remove('active')
            }
        })
    });
});
