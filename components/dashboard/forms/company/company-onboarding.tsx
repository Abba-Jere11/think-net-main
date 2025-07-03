"use client";

import { createSchool } from "@/actions/school";
import FormFooter from "@/components/FormInputs/FormFooter";
import FormHeader from "@/components/FormInputs/FormHeader";
import TextInput from "@/components/FormInputs/TextInput";


import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

type SchoolFormProps = {
  editingId?: string | undefined;
  initialData?: any | undefined | null;
};

export type SchoolProps = {
  name: string;

}

export default function SchoolForm({
  editingId,
  initialData,
}: SchoolFormProps) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SchoolProps>({
    defaultValues: {
      name: initialData?.name || "",
     
    },
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function saveSchool(data: SchoolProps) {
    try {
      setLoading(true);
      
      console.log(data);
      const res = await createSchool(data);
      console.log(res);
      setLoading(false);    
      toast.success("School created successfully!");
      reset();
      router.push("/schools");
    } catch (error) {
      toast.error("Failed to create school!");
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <form className="" onSubmit={handleSubmit(saveSchool)}>
      <FormHeader
        href="/schools"
        parent=""
        title="Schools"
        editingId={editingId}
        loading={loading}
      />

      <div className="grid grid-cols-12 gap-6 py-8 p-5">
        <div className="lg:col-span-12 col-span-full space-y-3">
          <div className="grid gap-6">
            {/* School Information */}
            <div className="grid md:grid-cols-1 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="School Name"
                name="name"
                
              />
            </div>

           
          </div>
        </div>
      </div>
      
      <FormFooter
        href="/schools"
        editingId={editingId}
        loading={loading}
        title="School"
        parent=""
      />
    </form>
  );
}