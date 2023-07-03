let attention = prompt()
function notifyModal(title, text, icon, confirmationButton) {
    Swal.fire({
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmationButton
    })
}

function prompt() {
    let toast = (c) => {
        const {
            msg = "",
            icon="success",
            position = "top-end",
        } = c;
        const Toast = Swal.mixin({
            toast: true,
            title: msg,
            position: position,
            icon: icon,
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('start', Swal.stopTimer)
                toast.addEventListener('end', Swal.resumeTimer)
            }
        })

        Toast.fire({})
    }
    let success = (c) => {
        const {
            msg="",
            title = "",
            footer= "",
        } = c;
        Swal.fire({
            icon: 'success',
            title: title,
            text: msg,
            footer: footer
        })
    }

    let error = (c) => {
        const {
            msg="",
            title = "",
            footer= "",
        } = c;
        Swal.fire({
            icon: 'error',
            title: title,
            text: msg,
            footer: footer
        })
    }

    let custom = async (c)=> {
        const {
            msg = "",
            title = ""
        } = c;

        const { value: formValues } = await Swal.fire({
            title: title,
            html: msg,
            focusConfirm: false,
            showCancelButton: true,
            willOpen: () => {
                const elem = document.getElementById('reservation-dates-modal');
                const rp = new DateRangePicker(elem, {
                    format: 'yyyy-mm-dd',
                    showOnFocus: true,
                    // orientation: "top"
                })
            },
            preConfirm: () => {
                return [
                    document.getElementById('start').value,
                    document.getElementById('end').value
                ]
            },
            didOpen: () => {
                document.getElementById('start').removeAttribute('disabled')
                document.getElementById('end').removeAttribute('disabled')
            }
        })

        if (formValues) {
        Swal.fire(JSON.stringify(formValues))

        }
    }

    return {
        toast,
        success,
        error,
        custom
    }
}