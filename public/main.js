const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/myHeroForm', {
        method: 'put',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Incineroar'
        })
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then(response => {
        console.log(response)
        window.location.reload(true)
    })
})

const deleteButton = document.querySelector('#delete-ganon')

deleteButton.addEventListener('click', _ => {
    fetch('/myHeroForm', {
        method: 'delete',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'Ganon'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(data => {
        window.location.reload()
    })
})

const messageDiv = document.querySelector('#message')

