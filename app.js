function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('#matches table a[href="#booking"]');
    const bookingSection = document.querySelector('#booking');

    bookButtons.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            bookingSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            showToast('Ready to book! Please fill out the form below.');
        });
    });
    
    const bookingForm = document.querySelector('#booking form');
    if(bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Ticket confirmed successfully!');
            bookingForm.reset();
        });
    }
});
