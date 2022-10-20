import React from "react";
import Nav from "./Nav";

export default function NoPage() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://nerdweb.com.br/uploads/1578511646-cropit-.jpg)",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        height: "100vh",
        backgroundSize:"100%"
      }}
    >
    Procurando Algum destes links?<Nav/>
    </div>
  );
}
