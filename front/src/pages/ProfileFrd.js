import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersList } from '../action/useraction'
import Profile from './Profile'

const ProfileFrd = ({match}) => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsersList(match.params.id))
        
     }, [])



    return (
        <div>
           <Profile profileId={match.params.id}/> 
           <h1>{user.firstname}</h1>
        </div>
    )
}

export default ProfileFrd
