"use client";

import { useState, useRef } from "react";
import "./styles.css";

export default function ImageUpload({ onUpload }) {
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
                if (onUpload) {
                    onUpload(file);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div className="imageUpload">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
            />
            <button 
                className="uploadButton"
                onClick={handleClick}
            >
                {preview ? (
                    <img 
                        src={preview} 
                        alt="Preview" 
                        className="previewImage"
                    />
                ) : (
                    <>
                        <img src="/upload.svg" alt="Upload" />
                        <span>Upload Image</span>
                    </>
                )}
            </button>
        </div>
    );
} 