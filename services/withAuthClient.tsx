import { parseCookies } from "nookies";
import { ElementType, useEffect } from "react";
import Router from "next/router";

export function WithAuth(WrapperComponent: ElementType) {
  const Wrapper = (props: any) => {
    useEffect(() => {
      const { ["auth"]: auth } = parseCookies(null);
      if (!auth) {
        Router.push("/login");
      }
    }, []);

    return <WrapperComponent {...props} />;
  };

  return Wrapper;
}
