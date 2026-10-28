import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Index() {
  const router = useRouter();
  const handleClickBtn = () => {
    // slda;lsdaklsdjakldhjkabhseak
    // slda;lsdaklsdjakldhjkabhseak
    // slda;lsdaklsdjakldhjkabhseak
    // slda;lsdaklsdjakldhjkabhseak
    router.push("products/3");
  };

  return (
    <div>
      <div>products page</div>
      <div className="flex flex-col gap-5">
        <Link href="products/1">product 1</Link>
        <Link
          href={{
            pathname: "products/2",
            query: { id: 2 },
          }}
        >
          product 2
        </Link>
        <button onClick={handleClickBtn}>product 3</button>
      </div>
    </div>
  );
}

export default Index;
