import React from 'react'
import Pending from './Pending'
import FollowBtn from './FollowBtn'
function FollowStatus({status}) {
    if(status == 'none')
        return <FollowBtn/>
    else if(status == 'pending')
        return <Pending/>
    else return 
        
}

export default FollowStatus