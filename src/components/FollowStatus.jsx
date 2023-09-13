import React from 'react'
import Pending from './Pending'
import FollowBtn from './FollowBtn'
import Unfollow from './Unfollow'
function FollowStatus({userId,status}) {
    if(status == 'none')
        return <FollowBtn/>
    else if(status == 'pending')
        return <Pending/>
    else if(status === 'following')
        return <Unfollow userId = {userId}/>
    else return 
        
}

export default FollowStatus