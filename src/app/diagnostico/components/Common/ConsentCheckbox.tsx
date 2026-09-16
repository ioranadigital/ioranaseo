"use client";
import { FC } from "react";

interface ConsentCheckboxProps {
  id: string;
}

const ConsentCheckbox: FC<ConsentCheckboxProps> = ({ id }) => {
  return (
    <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <input
        type="checkbox"
        id={id}
        required
        style={{
          width: "18px",
          height: "18px",
          marginTop: "2px",
          cursor: "pointer",
          flexShrink: 0,
        }}
      />
      <label
        htmlFor={id}
        style={{
          fontSize: "12px",
          color: "#666",
          lineHeight: "1.6",
          cursor: "pointer",
          margin: 0,
        }}
      >
        Autorizo a contactarme comercialmente por email, teléfono y/o via
        Whatsapp sobre los servicios y productos relativos al marketing
        digital y directorios. Ver información sobre protección de datos
      </label>
    </div>
  );
};

export default ConsentCheckbox;
