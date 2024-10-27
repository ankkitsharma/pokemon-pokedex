"use client";

import _Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    console.log("Value ", value);

    const params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.push(`${pathname}?${params.toString()}`);
    console.log("Params ", params.toString());
  };
  return (
    <Stack spacing={2} direction={"row"} justifyContent={"center"}>
      <_Pagination
        count={totalPages}
        page={currentPage}
        onChange={handleChange}
      />
    </Stack>
  );
}
