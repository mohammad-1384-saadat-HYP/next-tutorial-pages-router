import { useRouter } from 'next/router';
import React from 'react'

function Details() {
 const router = useRouter();
  const {productId} = router.query;

  return (
    <div>
        <div>productId: {productId}</div>
        <div>details</div>
    </div>
  )
}

export default Details