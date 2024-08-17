"use client";

import { useEffect } from "react";
import ErrorUI from "@/app/components/ErrorUI";

 
const ErrorPage = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <>
      <ErrorUI />
    </>
  );
};

export default ErrorPage;
