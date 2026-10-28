import Link from "next/link";
import React from "react";

function Index() {
  return (
    <div>
      <div>hello world</div>
      <div className="flex flex-col gap-5">
        <Link href="products/">products page</Link>
        <Link href="about/">about page</Link>
        <Link href="houses/">houses page</Link>
      </div>
    </div>
  );
}

export default Index;
