"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

import CustomCarousel from "@/components/frontend/custom-carousel";
import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import PasswordInput from "@/components/FormInputs/PasswordInput";
// import LogoLogin from "../logo-login";

import {Mail, Lock, LogIn} from "lucide-react";

export type RegisterInputProps = {
  fullName: string;
  email: string;
  password: string;
  phone: string;
};
export default function Login() {
  const [isLoading, ] = useState(false);
  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm<RegisterInputProps>();
  
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);
  }
  return (
    
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative">
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
          {/* <LogoLogin /> */}
        </div>
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6 mt-10 md:mt-0">
          
          <div className="grid gap-2 text-center mt-10 md:mt-0">
            <h1 className="text-3xl font-bold md:font-base sm:font-small">Log In</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              label="Email Address"
              register={register}
              name="email"
              type="email"
              errors={errors}
              placeholder="Eg. jere@gmail.com"
              icon={Mail}
            />
            
           
            <PasswordInput
            icon={Lock}
              label="Password"
              register={register}
              name="password"
              type="password"
              errors={errors}
              placeholder="******"
              forgotPasswordLink="/forgot-password"
            />

            <SubmitButton
            buttonIcon={LogIn}
              className='bg-primary'
              title="Sign in"
              loading={isLoading}
              loadingTitle="Signing in please wait..."
              
            />
            <div className="pt-14 border-t border-gray-200">
         © {new Date().getFullYear()} ThinkLab Group. All rights reserved.
        </div>
          </form>
          {/* <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div> */}
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
