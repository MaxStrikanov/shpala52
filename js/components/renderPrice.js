export const renderPrice = () => {
    let dataList = [];
    const url = "bd/price-list.xlsx";
    const oReq = new XMLHttpRequest();
    const query = String(document.location.href);

    oReq.open("GET", url, true);
    oReq.responseType = "arraybuffer";
    oReq.onload = function(e) {
        
        const arraybuffer = oReq.response;
        const data = new Uint8Array(arraybuffer);
        const arr = new Array();

        for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
        
        const bstr = arr.join("");
        const workbook = XLSX.read(bstr, {type: "binary" });
        const first_sheet_name = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[first_sheet_name];
        
        dataList = XLSX.utils.sheet_to_json(worksheet, { raw: true });

        console.log(dataList[0]['Наименование продукции'].slice(0, 5))


        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }


        // document.querySelector('.result-block span').textContent = numberWithSpaces(totalCost);

        dataList.forEach((elem, i) => {

            const card =  document.querySelector('.goods-items');

                card.insertAdjacentHTML('beforeend', `
                <div class="goods-item"
                    data-aos="zoom-out-right"
					data-aos-offset="200"
					data-aos-delay="50"
					data-aos-duration="600"
					data-aos-easing="ease-in-out"
                >
                        <div class="goods-item-img">
							<img src="${dataList[i]['Наименование продукции'].slice(0, 5) === 'Шпала'? 'img/--30.png' : 'img/__29.png'} " alt="">
                            </div>
                            <div class="goods-item-name">${dataList[i]['Наименование продукции']}</div>
						<div class="good-item-price">${numberWithSpaces(dataList[i]['Цена'])}</div>
                        <div class="good-item-price">${dataList[i]['Единицы']}</div>
                        </div>
                    `
                )
        })

}
oReq.send();
}
