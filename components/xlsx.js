const checkingСertificate = () => {
    let dataList = [];
    const url = "bd/tarifs.xlsx";
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

        console.log(dataList)

        function numberWithSpaces(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            }

        const totalCost = dataList.reduce((prev, item) => {
            return prev + item['Сумма']
        }, 0) 

        // document.querySelector('.result-block span').textContent = numberWithSpaces(totalCost);

        dataList.forEach((elem, i) => {

            const card =  document.querySelector('.swiper-wrapper');

                card.insertAdjacentHTML('beforeend', `
                        <div class="swiper-slide">
									<div class="tariff-item" >
										<h4>${dataList[i]['name']}</h4>
										<p>${dataList[i]['description']}</p>
										<div class="price-items-wrapper" >
											<div class="price-item">
												<span class="price">${dataList[i]['price']}</span>
												<span class="days">${dataList[i]['day']} </span>
											</div>
											<a href="" class="primary-btn">Подробнее <i class="fa fa-chevron-right"></i></a>
										</div>
									</div>
								</div>
					
                    `
                )
        })

}
oReq.send();
}

export default checkingСertificate;