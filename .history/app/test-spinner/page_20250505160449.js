"use client";
import Spinner from "../components/Spinner/Spinner";

export default function TestSpinnerPage() {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Spinner Component Test</h1>
            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Sizes</h2>
                    <div className="flex items-center gap-4">
                        <Spinner size="small" />
                        <Spinner size="medium" />
                        <Spinner size="large" />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">Colors</h2>
                    <div className="flex items-center gap-4">
                        <Spinner color="primary" />
                        <Spinner color="success" />
                        <Spinner color="warning" />
                        <Spinner color="error" />
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="text-lg font-semibold">With Text</h2>
                    <div className="flex items-center gap-2">
                        <Spinner size="small" />
                        <span>Loading...</span>
                    </div>
                </div>
            </div>
        </div>
    );
} 