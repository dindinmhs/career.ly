'use client'
import { StepIndicator } from "@/components/cvmaker/step-indicator";
import { FaArrowRight } from "react-icons/fa";

const Step2Page = () => {
    return (
        <section className="md:h-screen pt-10">
            <StepIndicator step={2}/>
            <div className="mt-16">
                <h3 className="text-center text-4xl text-[#3582C5] font-bold">Hubungkan ke profilmu</h3>
                <div className="max-w-3xl rounded-2xl mx-auto overflow-hidden mt-8">
                    <button className="flex w-full justify-between items-center p-8 bg-[#E7F1F7] font-medium text-lg">
                        <span>Facebook</span>
                        <FaArrowRight/>
                    </button>
                    <button className="flex w-full justify-between items-center p-8 bg-[#E7F1F7] border-y-2 border-[#7C9EB2] font-medium text-lg">
                        <span>Google</span>
                        <FaArrowRight/>
                    </button>
                    <button className="flex w-full justify-between items-center p-8 bg-[#E7F1F7] font-medium text-lg">
                        <span>Linkedin</span>
                        <FaArrowRight/>
                    </button>
                </div>
                <div className="flex">
                    <button className="bg-[#3785C6] px-4 py-2 rounded-2xl text-xl font-semibold text-white mx-auto mt-10">
                        Selanjutnya
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Step2Page;