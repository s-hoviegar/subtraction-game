import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <div
      style={{
        gridGap: "2px",
        minHeight: "100vh",
        minWidth: 0 /* needed for Firefox */,
        margin: 0,
        display: "grid",
        gridTemplateRows: "auto 1fr auto",
        backgroundColor: "#121212",
        color: "aliceblue",
      }}
    >
      <Navigation />
      <main
        style={{
          overflow: "hidden",
          minWidth: 0 /* needed for Firefox */,
          textAlign: "center",
          display: "inline-block",
          backgroundColor: "#121212",
          color: "aliceblue",
        }}
      >
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
