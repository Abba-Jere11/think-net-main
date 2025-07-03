import type React from "react"
import type { UseFormRegister, FieldErrors } from "react-hook-form"
import { Plus } from "lucide-react"
import Link from "next/link"

interface SelectOption {
  value: string
  label: string
}

interface SelectInputProps {
  label: string
  name: string
  register: UseFormRegister<any>
  errors: FieldErrors
  options: SelectOption[]
  placeholder?: string
  className?: string
  showAddButton?: boolean
  addButtonHref?: string
  addButtonTooltip?: string
}

const SelectInput: React.FC<SelectInputProps> = ({
  label,
  name,
  register,
  errors,
  options,
  placeholder = "Select an option",
  className = "",
  showAddButton = false,
  addButtonHref = "#",
  addButtonTooltip = "Add new item",
}) => {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>
      <div className="flex items-center space-x-2">
        <select
          {...register(name, { required: `${label} is required` })}
          id={name}
          className={`flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary  ${className}`}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {showAddButton && (
          <Link
            href={addButtonHref}
            className="inline-flex items-center justify-center w-10 h-10 border border-gray-300 rounded-md shadow-sm bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
            title={addButtonTooltip}
          >
            <Plus className="w-5 h-5 text-gray-600" />
          </Link>
        )}
      </div>
      {errors[name] && <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>}
    </div>
  )
}

export default SelectInput
