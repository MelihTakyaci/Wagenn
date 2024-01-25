var currentBrand = "DiamondDiesel"
function changeBrand(a){
    currentBrand = a;
    console.log(a);
    fetchData();
}
function fetchData(){
fetch('https://www.vagenn.com/Javascript/api/data.json')
    .then(response => response.json())
    .then(data => {
        // Iterate through the data and create HTML elements
        const engineListContainer = document.getElementById('listservice');
        const rows = document.querySelectorAll('.row');
        rows.forEach(function (element) {
            element.parentNode.removeChild(element);
        });
        data.forEach(engine => {
            const engineItem = document.createElement('div');
            if(engine.brand === currentBrand){
            engineItem.innerHTML = `
                <div class="row">
                    <div class="i-col">${engine.brand}</div>
                    <div class="i-col">
                        <div class="row-p">
                            <p class="mobileHeader">StandBy kva / kw</p>
                            <div class="p-col">${engine.standbykva}</div>
                            <div class="p-col">${engine.standbykw}</div>
                        </div>
                    </div>
                    <div class="i-col">
                        <div class="row-p">
                            <p class="mobileHeader">Prime kva / kw</p>
                            <div class="p-col">${engine.primekva}</div>
                            <div class="p-col">${engine.primekw}</div>
                        </div>
                    </div>
                    <div class="h-col">
                        <p class="mobileHeader">Hertz</p> 
                        ${engine.hz}
                    </div>
                </div>
            `;

            engineListContainer.appendChild(engineItem);
    }});
    })
    .catch(error => console.error('Error fetching data:', error));
}
fetchData();