"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const AddOptions = ({ icon, value, color, bgColor, className }) => {
  return (
    <button
      className={`${styles.addOptionsButton} ${className || ''}`}
      style={{ backgroundColor: bgColor, color: color }}
    >
      <img src={icon} alt="" className={styles.addOptionsIcon} style={{ color: color }} />
      <span className={styles.addOptionsLabel}>{value}</span>
    </button>
  );
};

export default AddOptions;
