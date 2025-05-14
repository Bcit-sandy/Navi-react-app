"use client";

import { useState } from "react";
import "./styles.css";

export function TakePhotoButton() {
    const [isCapturing, setIsCapturing] = useState(false);

    const handleCapture = async () => {
        setIsCapturing(true);
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const videoElement = document.createElement('video');
            videoElement.srcObject = stream;
            await videoElement.play();

            const canvas = document.createElement('canvas');
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(videoElement, 0, 0);

            const imageData = canvas.toDataURL('image/jpeg');
            
            // Stop all tracks
            stream.getTracks().forEach(track => track.stop());
            
            // Here you would typically handle the captured image
            console.log('Photo captured:', imageData);
        } catch (error) {
            console.error('Error capturing photo:', error);
        } finally {
            setIsCapturing(false);
        }
    };

    return (
        <button 
            className={`takePhotoButton ${isCapturing ? 'capturing' : ''}`}
            onClick={handleCapture}
            disabled={isCapturing}
        >
            {isCapturing ? 'Capturing...' : 'Take Photo'}
        </button>
    );
}