import { Button } from "@interfaceos/react";

export default function Home() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>InterfaceOS Button</h1>
      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <Button variant="primary">Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
      </div>
    </div>
  );
}
