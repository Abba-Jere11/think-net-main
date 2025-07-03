import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UploadButton } from "@/lib/uploadthing";
import { Plus, Upload, Image as ImageIcon, Trash2 } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type ImageInputProps = {
  title: string;
  imageUrl: string;
  setImageUrl: any;
  endpoint: any;
  className?: string;
};

export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
  className,
}: ImageInputProps) {
  const [isUploading, setIsUploading] = useState(false);
  const hasImage = imageUrl && imageUrl !== "/placeholder.svg";

  const handleRemoveImage = () => {
    setImageUrl("/placeholder.svg");
  };

  const handleUploadStart = () => {
    setIsUploading(true);
  };

  const handleUploadComplete = (res: any) => {
    console.log("Files: ", res);
    setImageUrl(res[0].url);
    setIsUploading(false);
  };

  const handleUploadError = (error: Error) => {
    alert(`ERROR! ${error.message}`);
    setIsUploading(false);
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <ImageIcon className="w-4 h-4" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {/* Image Preview */}
          <div className="relative">
            <Image
              alt={title}
              className={cn("h-40 w-full rounded-md object-cover", className)}
              height="500"
              src={imageUrl}
              width="500"
            />
            {!hasImage && !isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded-md">
                <div className="text-center">
                  <ImageIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">No image selected</p>
                </div>
              </div>
            )}
            
            {/* Loading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-50/90 rounded-md backdrop-blur-sm">
                <div className="text-center">
                  <div className="mb-3">
                    {/* Loading Bar */}
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-900 rounded-full animate-pulse" style={{
                        width: '30%',
                        animation: 'loading 2s ease-in-out infinite'
                      }} />
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Uploading...</p>
                </div>
              </div>
            )}
          </div>

          {/* Upload Button - Only show if no image and not uploading */}
          {!hasImage && !isUploading && (
            <UploadButton
              className="w-full ut-button:w-full ut-button:bg-primary ut-button:hover:bg-primary-700 ut-button:text-white ut-button:font-medium ut-button:py-2 ut-button:px-4 ut-button:rounded-md ut-button:transition-colors ut-allowed-content:hidden"
              endpoint={endpoint}
              content={{
                button({ ready }) {
                  if (ready) {
                    return (
                      <div className="flex items-center gap-2">
                        <Upload className="w-4 h-4" />
                        Upload Image
                      </div>
                    );
                  }
                  return "Getting ready...";
                },
                allowedContent: () => "", // Hide the allowed content text
              }}
              onBeforeUploadBegin={() => {
                handleUploadStart();
              }}
              onClientUploadComplete={handleUploadComplete}
              onUploadError={handleUploadError}
            />
          )}

          {/* Change/Remove buttons - Only show if image exists and not uploading */}
          {hasImage && !isUploading && (
            <div className="space-y-2">
              <UploadButton
                className="w-full ut-button:w-full ut-button:bg-primary ut-button:hover:bg-primary-700 ut-button:text-white ut-button:font-medium ut-button:py-2 ut-button:px-4 ut-button:rounded-md ut-button:transition-colors ut-allowed-content:hidden"
                endpoint={endpoint}
                content={{
                  button({ ready }) {
                    if (ready) {
                      return (
                        <div className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Change Image
                        </div>
                      );
                    }
                    return "Getting ready...";
                  },
                  allowedContent: () => "", // Hide the allowed content text
                }}
                onBeforeUploadBegin={() => {
                  handleUploadStart();
                }}
                onClientUploadComplete={handleUploadComplete}
                onUploadError={handleUploadError}
              />
              
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">or</span>
                </div>
              </div>
              
              <Button
                type="button"
                variant="outline"
                className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
                onClick={handleRemoveImage}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Remove Image
              </Button>
            </div>
          )}

          {/* Loading State Info */}
          {isUploading && (
            <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
              <p>📤 Uploading image...</p>
            </div>
          )}

          {/* Image Info */}
          {hasImage && !isUploading && (
            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              <p>✓ Image uploaded successfully</p>
            </div>
          )}
        </div>
      </CardContent>
      
      {/* CSS for loading animation */}
      <style jsx>{`
        @keyframes loading {
          0% { width: 20%; }
          50% { width: 70%; }
          100% { width: 20%; }
        }
      `}</style>
    </Card>
  );
}