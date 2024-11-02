import React , {useContext} from 'react'
import UserContext from '../context/UserContext'

const profile = () => {
    const {user} = useContext(UserContext)

    if(!user) return <div>PLease login</div>
   
    return <div>Welcome {user.username}</div>
}

export default profile