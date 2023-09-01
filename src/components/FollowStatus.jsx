import React from 'react'
import Pending from './Pending'
import Unfollow from './Unfollow'
import FollowBtn from './FollowBtn'
function FollowStatus({status}) {
    if(status == 'notFollowing')
        return <FollowBtn/>
    else if(status == 'pending')
        return <Pending/>
    else if(status == 'following')
        return <Unfollow/>
    else return
        
}

export default FollowStatus