"use client";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { Return } from "@/app/Buttons/Return";
import { Edit } from "@/app/Buttons/Edit";
import { Setting } from "@/app/Buttons/Setting";
import styles from "./ProfileTopNav.module.css";

export function ProfileTopNav() {
    return (
        <div className={styles.topNav}>
            <Return />
            <div>
                <Edit />
                <Setting />
            </div>
        </div>
    );
}
