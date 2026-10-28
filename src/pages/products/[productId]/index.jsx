import { useRouter } from 'next/router';
import React from 'react'

function ProductId() {
 const router = useRouter();
  const {productId} = router.query;

  return (
    <div>productId: {productId}</div>
  )
}

export default ProductId