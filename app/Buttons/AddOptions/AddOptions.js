"use client";
import { useState } from "react";
import "./styles.css";

const AddOptions = ({ icon: Icon, value, color, bgColor }) => {
  return (
    <button
      className="add-options-button"
      style={{ backgroundColor: bgColor, color: color }}
    >
      <Icon className="add-options-icon" style={{ color: color }} />
      <span className="add-options-label">{value}</span>
    </button>
  );
};

export default AddOptions;
