document.getElementById("check-availability-button").addEventListener("click",() => {

    let html =
        `
            <form id="check-availability-form" action="" method="post" novalidate class="need-validation">
                <div class="form-row">
                    <div class="col">
                        <div class="form-row" id="reservation-dates-modal">
                            <div class="col">
                                <input type="text" disabled required class="form-control" name="start" id="start" placeholder="Arrival"> 
                            </div>
                            <div class="col">
                                <input type="text" disabled required class="form-control" name="end" id="end" placeholder="Departure"> 
                            </div>
                        </div>
                    </div>
                </div>
            </form>
    `
    attention.custom({
        msg: html,
        title: "Choose your dates"
    });
})