import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";

export const ApiKeyInput = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('GOOGLE_PLACES_API_KEY') || '');

  const handleSaveKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('GOOGLE_PLACES_API_KEY', apiKey.trim());
      toast.success("API key saved successfully");
    } else {
      toast.error("Please enter a valid API key");
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Google Places API Configuration</h3>
      <div className="flex gap-2">
        <Input
          type="password"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Google Places API key"
          className="flex-1"
        />
        <Button onClick={handleSaveKey}>Save Key</Button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Your API key will be stored securely in your browser's local storage.
      </p>
    </div>
  );
};