let form=document.querySelector('form')
let submitButton=document.querySelector('button')
let input=document.querySelector('input')
let userList=document.querySelector('section')

let getUsers=async()=>{
    let container=document.createElement('aside')
    let name=document.createElement('p')
    let deleteButton=document.createElement('button')
    let editButton=document.createElement('button')
    let ButtonContainer=document.createElement('div')

    name.innerHTML=user.name
    deleteButton.innerHTML='Delete'
    editButton.innerHTML='Edit'

    // Adding events 
    deleteButton.addEventListener('click',()=>{
        deleteUser(user.id)
    })
}
