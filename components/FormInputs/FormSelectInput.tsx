"use client";
import AddNewButton from "@/components/FormInputs/AddNewButton";
import React from "react";

export type SelectOptionProps = {
  label: string;
  value: string;
};

type FormSelectInputProps = {
  options: SelectOptionProps[];
  label: string;
  value?: string;
  onChange?: (value: string) => void;
  href?: string;
  labelShown?: boolean;
  toolTipText?: string;
  placeholder?: string;
  className?: string;
  isSearchable?:boolean;
};

export default function FormSelectInput({
  options,
  label,
  value,
  onChange,
  href,
  toolTipText,
  labelShown = true,
  placeholder,
  className = "",
  isSearchable=true,
}: FormSelectInputProps) {
  return (
    <div className="">
      {labelShown && (
        <h2 className="pb-2 block text-sm font-medium leading-6 text-gray-900">
          Select {label}
        </h2>
      )}
      <div className="flex items-center space-x-2">
        <select
          
          value={value || ""}
          onChange={(e) => onChange?.(e.target.value)}
          className={`flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 bg-white ${className}`}
        >
          <option value="">{placeholder || `Select ${label}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        
        {href && toolTipText && (
          <AddNewButton toolTipText={toolTipText} href={href} />
        )}
      </div>
    </div>
  );
}