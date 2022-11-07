const users = []

// makin a function to add new users on the param. of id and room 
const addUser = (id , name , room)=>{
    
const numberOfUsersInRoom = users.filter(user => user.room === room).length
    if(numberOfUsersInRoom === 2)
    return{error: "Room Full"}
    // adding new user object 
    const newUser = { id, name, room }
    users.push(newUser)
    return{newUser}
}

// removing user 
const removeUser = id => {
    const removeIndex = users.findIndex(user => user.id === id)

    if(removeIndex!==-1)
        return users.splice(removeIndex, 1)[0]
}

// getting user from the id 

const getUser = id => {
    return users.find(user => user.id === id)
}

// get User inside the room 
const getUsersInRoom = room => {
    return users.filter(user => user.room === room)
}

module.exports = { addUser, removeUser, getUser, getUsersInRoom }