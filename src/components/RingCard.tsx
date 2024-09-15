import { useState } from "react";
import { Ring } from "../interfaces/ring";
import { Bearer } from "../interfaces/bearer";

export default function RingCard({ ring }: { ring: Ring }) {
  const [name, setName] = useState("");
  const [power, setPower] = useState("");
  const [bearer, setBearer] = useState("");
  const [forgedBy, setForgedBy] = useState("");

  const [bearerName, setBearerName] = useState("");
  const [bearerRace, setBearerRace] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <label>Ring Name</label>
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />

        <label>Power</label>
        <input
          type="text"
          value={power}
          onChange={(e) => setPower(e.target.value)}
        />

        <label>Bearer</label>
        <input
          value={bearer}
          type="text"
          onChange={(e) => setBearer(e.target.value)}
        />

        <label>Forged By</label>
        <input
          value={forgedBy}
          type="text"
          onChange={(e) => setForgedBy(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
