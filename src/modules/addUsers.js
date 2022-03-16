import { render } from "./render"

export const addUsers = () => {
    const form = document.querySelector('form')
    const nameInput = form.querySelector('#form-name')
    const emailInput = form.querySelector('#form-email')
    const childrenInput = form.querySelector('#form-children')

    console.log('user');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        console.log('user');
        if (!form.dataset.method) {

            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }
            console.log(user);

            userService.addUser(user).then(() => {
                userService.getUsers().then(users => {
                    console.log(user);
                    render(users)
                    form.reset()
                })
            })

        }

    })



}