import { useRouter } from "next/router";
import React from "react";

const Params = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  return (
    <div>
      <div>{params[0]}</div>
      <div>houses page</div>
    </div>
  );
};

export default Params;
