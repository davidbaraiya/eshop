import React from "react";
import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
  return (
    <>
      <Skeleton variant="rounded" width={"100%"} height={180} />
      <Skeleton variant="text" sx={{ fontSize: "20px" }} />
      <Skeleton variant="text" width={"60%"} sx={{ fontSize: "20px" }} />
      <div className="d-flex justify-content-between align-items-center gap-5 mt-4">
        <Skeleton variant="rounded" width={150} height={40} />
        <Skeleton variant="rounded" width={150} height={40} />
      </div>
    </>
  );
};

export default ProductSkeleton;
