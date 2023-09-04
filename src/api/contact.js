export const getContactList = async () => {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    return data;
}
export const getContactDetails = async (id) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await resp.json()
    return data;
}

export const getProfilePic = async (text) => {
    const resp = await fetch(`https://placehold.co/600x400/orange/white?text=${text}`)
    
    return resp
}