import React from "react";

const ServiceHero = ({ title, subtitle, category, image }) => {
  return (
    <section
      style={{
        position: "relative",
        height: "50vh",
        minHeight: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "100px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(96, 32, 44, 0.75)",
          zIndex: 2,
        }}
      />
      <div
        className="container"
        style={{
          position: "relative",
          zIndex: 3,
          textAlign: "center",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#B5844F",
            color: "#fff",
            padding: "8px 20px",
            fontSize: "12px",
            fontWeight: "600",
            letterSpacing: "2px",
            textTransform: "uppercase",
            borderRadius: "4px",
            marginBottom: "20px",
          }}
        >
          {category}
        </span>
        <h1
          style={{
            color: "#F0ECE1",
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "15px",
            lineHeight: "1.2",
          }}
          className="playfont"
        >
          {title}
        </h1>
        <p
          style={{
            color: "#F0ECE1",
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto",
            opacity: 0.9,
            lineHeight: "1.6",
          }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
