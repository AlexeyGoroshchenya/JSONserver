import { render } from "./render"

export const sortUsers = () => {

    let isSort = false;

    document.getElementById('sort-is-children').style.cursor = 'pointer';
    document.getElementById('sort-is-name').style.cursor = 'pointer';
    document.getElementById('sort-is-id').style.cursor = 'pointer';
    document.getElementById('sort-is-permissions').style.cursor = 'pointer';
    document.getElementById('sort-is-email').style.cursor = 'pointer';


    document.querySelector('.table-dark').addEventListener('click', (e) => {

        if (e.target.id) {
            let itemName = e.target.id.slice(8)

            isSort = !isSort

            userService.sortUsers(
                {
                    name: itemName,
                    value: isSort ? 'asc' : 'desc'
                }
            ).then(users => {
                render(users)
            })

        }

    })


    /*
    sortIsChildren.addEventListener('click', () => {

        isSort = !isSort

        userService.sortUsers(
            {
                name: 'children',
                value: isSort ? 'asc' : 'desc'
            }
        ).then(users => {
            render(users)
        })

    })
    */

}