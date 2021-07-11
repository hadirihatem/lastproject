import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const ProfileFrd = ({match}) => {
    const user = useSelector(state => state.user.users)
    const dispatch = useDispatch()
const newuser= user.find((userp)=>userp._id===match.params.id)



    return (
        <div>
           
           <h1>{newuser.firstname}</h1>
           
        </div>
    )
}

export default ProfileFrd
