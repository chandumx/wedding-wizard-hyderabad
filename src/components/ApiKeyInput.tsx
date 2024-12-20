import { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";

export const ApiKeyInput = () => {
  const [apiKey, setApiKey] = useState(localStorage.getItem('GOOGLE_PLACES_API_KEY') || '');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the input if no API key is stored
    setIsVisible(!localStorage.getItem('GOOGLE_PLACES_API_KEY'));
  }, []);

  const handleSaveKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('GOOGLE_PLACES_API_KEY', apiKey.trim());
      toast.success("API key saved successfully");
      setIsVisible(false);
    } else {
      toast.error("Please enter a valid API key");
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg border border-red-200 mb-8">
      <Alert variant="destructive" className="mb-4">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>API Key Required</AlertTitle>
        <AlertDescription>
          Please enter your Google Places API key to view local business listings.
        </AlertDescription>
      </Alert>
      
      <div className="space-y-4">
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
        <p className="text-sm text-gray-500">
          Your API key will be stored securely in your browser's local storage.
        </p>
      </div>
    </div>
  );
};