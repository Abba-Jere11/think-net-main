"use client"
import type React from "react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import TextInput from "../FormInputs/TextInput"
import SelectInput from "../FormInputs/SelectInput"
import SubmitButton from "../FormInputs/SubmitButton"
import { Send } from "lucide-react"
import TextArea from "../FormInputs/TextAreaInput"
import SmallTitle from "./small-title"
import LogoLogin from "../logo-login"
import toast from "react-hot-toast"
import { createContact } from "@/actions/admin"

export type ContactProps = {
  name: string;
  email: string;
  phone: string;
  department: string;
  level: string;
  priority: string;
  request: string;
  subject: string;
  desc:string;
  employeeId:string;
}

const ContactUs: React.FC = () => {
  const [loading,setLoading ] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactProps>()

  async function onSubmit(data: ContactProps) {
    console.log(data);
    try {
      setLoading(true);
      
      console.log(data);
      const res = await createContact(data);
      console.log(res);
      setLoading(false);    
        toast.success("Message Sent Successfully!");
    } catch (error) {
      // toast.error("Updated couldnt!");
      setLoading(false);
      console.log(error);
    }
  }

  // Dropdown options
  const departmentOptions = [
    { value: "hr", label: "Corporate Services" },
    { value: "it", label: "Information Technology" },
    { value: "finance", label: "Finance" },
    { value: "marketing", label: "Communications" },
    { value: "operations", label: "Operations" },
    { value: "sales", label: "Technical" },
    { value: "legal", label: "Legal" },
    { value: "admin", label: "Business Development" },
  ]

  const employeeLevelOptions = [
    { value: "management", label: "Management" },
    { value: "staff", label: "Staff" },
    { value: "corper", label: "Corper" },
    { value: "intern", label: "Intern" },
  ]

  const priorityLevelOptions = [
    { value: "low", label: "Low" },
    { value: "urgent", label: "Urgent" },
    { value: "critical", label: "Critical" },
  ]

  const requestCategoryOptions = [
    { value: "technical", label: "Technical Support" },
    { value: "hr", label: "HR Request" },
    { value: "equipment", label: "Equipment Request" },
    { value: "access", label: "Access Request" },
    { value: "training", label: "Training Request" },
    { value: "policy", label: "Policy Inquiry" },
    { value: "complaint", label: "Complaint" },
    { value: "suggestion", label: "Suggestion" },
    { value: "other", label: "Other" },
  ]

  const subjectCategoryOptions = [
    { value: "account", label: "Account Issues" },
    { value: "password", label: "Password Reset" },
    { value: "software", label: "Software Issues" },
    { value: "hardware", label: "Hardware Issues" },
    { value: "network", label: "Network Issues" },
    { value: "email", label: "Email Issues" },
    { value: "payroll", label: "Payroll Issues" },
    { value: "benefits", label: "Benefits Inquiry" },
    { value: "leave", label: "Leave Request" },
    { value: "performance", label: "Performance Review" },
    { value: "workspace", label: "Workspace Issues" },
    { value: "other", label: "Other" },
  ]

  return (
    <section className="bg-gray-100 py-16 px-4">
      <LogoLogin />
      <div className="max-w-4xl max-w-6xl mx-auto text-center space-y-8">
        {/* Welcome Badge */}
        <SmallTitle title="Welcome To Think-Net" />

        {/* Main Headline */}
        <h1 className="text-2xl md:text-xl lg:text-4xl font-bold text-gray-700 mb-6 leading-tight">
          All Department Resources
          <br />
          Seamlessly Connected In One Place
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-xl text-center font-semibold mb-4">Send us a message</h3>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput label="Full Name" register={register} name="name" errors={errors} placeholder="Jere Muhammad" />
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput
                label="Email Address"
                register={register}
                name="email"
                type="email"
                errors={errors}
                placeholder="Eg. jere@gmail.com"
              />
              <TextInput
                label="Phone Number"
                register={register}
                name="phone"
                errors={errors}
                placeholder="Eg. +234 123 456 7890"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <TextInput label="Employee ID" register={register} name="employeeId" errors={errors} placeholder="11/22/33" />
              <SelectInput
                label="Department"
                register={register}
                name="department"
                errors={errors}
                options={departmentOptions}
                placeholder="Select your department"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                label="Employee Level"
                register={register}
                name="level"
                errors={errors}
                options={employeeLevelOptions}
                placeholder="Select your level"
              />
              <SelectInput
                label="Request Category"
                register={register}
                name="request"
                errors={errors}
                options={requestCategoryOptions}
                placeholder="Select request category"
                
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <SelectInput
                label="Priority Level"
                register={register}
                name="priority"
                errors={errors}
                options={priorityLevelOptions}
                placeholder="Select priority level"
              />
              <SelectInput
                label="Subject Of Request"
                register={register}
                name="subject"
                errors={errors}
                options={subjectCategoryOptions}
                placeholder="Select subject category"
              />
            </div>
            <TextArea label="Description" register={register} name="desc" errors={errors} />

            <SubmitButton
              buttonIcon={Send}
              className="bg-primary"
              title="Submit"
              loading={loading}
              loadingTitle="Submitting, please wait..."
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactUs
