import { render } from "./render"

export const editUsers = () => {

    const form = document.querySelector('form')
    const nameInput = form.querySelector('#form-name')
    const emailInput = form.querySelector('#form-email')
    const childrenInput = form.querySelector('#form-children')

    document.getElementById('table-body').addEventListener('click', (e) => {

        if (e.target.closest('.btn-edit')) {
            const tr = e.target.closest('tr');
            const id = tr.dataset.key;


            userService.getUser(id).then((user) => {
                console.log(user);
                nameInput.value = user.name;
                emailInput.value = user.email;
                childrenInput.checked = user.children;

                form.dataset.method = id

            })

        }

    })

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (form.dataset.method) {

            const user = {
                name: nameInput.value,
                email: emailInput.value,
                children: childrenInput.checked,
                permissions: false
            }

            userService.editUser(form.dataset.method, user).then(() => {
                userService.getUsers().then(users => {
                    render(users)
                    form.reset()
                })
            })
        }

    })

}