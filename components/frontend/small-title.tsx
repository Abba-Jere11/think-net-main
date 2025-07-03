import React from "react";
import { Badge } from "@/components/ui/badge";
import { Building2 } from "lucide-react"; // Adjust this import based on your icon library

type SmallTitleProps = {
  title: string;
};

export default function SmallTitle({ title }: SmallTitleProps) {
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm"
    >
      <Building2 className="w-4 h-4 text-red-500" />
      <span className="text-sm text-gray-700 font-medium">{title}</span>
    </Badge>
  );
}
