import React from "react";
export default function Home() {

    const mainStyle = {
        backgroundColor:"#58BC82",
        textAlign: "center",
        padding: "50px",
        borderRadius: "8px"
      };
    
      const h1Style = {
        color: "darkblue",
        fontSize: "2.5rem"
      };



  return (
    <>
      <main style={mainStyle}>
        <h1 style={h1Style}> Welcome to Home </h1>
      </main>
    </>
  );
}
