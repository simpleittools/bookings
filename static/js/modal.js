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
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
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

    return {
        toast,
        success,
        error,
    }
}