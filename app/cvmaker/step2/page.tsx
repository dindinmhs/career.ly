'use client'
import { StepIndicator } from "@/components/cvmaker/step-indicator";
import { FaArrowRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Step2Page = () => {
    const router = useRouter();

    const handleNavigateToStep3 = () => {
        router.push('/cvmaker/step3');
    };

    return (
        <section className="md:h-screen pt-10">
            <StepIndicator step={2}/>
            <div className="mt-16">
                <h3 className="text-center text-4xl text-[#3582C5] font-bold">Hubungkan ke profilmu</h3>
                <div className="max-w-3xl rounded-2xl mx-auto overflow-hidden mt-8">
                    <button 
                        className="flex w-full justify-between items-center p-8 bg-[#E7F1F7]">
                        <span>Facebook</span>
                        <FaArrowRight 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleNavigateToStep3();
                            }}
                        />
                    </button>
                    <button 
                        className="flex w-full justify-between items-center p-8 bg-[#E7F1F7]">
                        <span>Facebook</span>
                        <FaArrowRight 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleNavigateToStep3();
                            }}
                        />
                    </button>
                    <button 
                        className="flex w-full justify-between items-center p-8 bg-[#E7F1F7]">
                        <span>Facebook</span>
                        <FaArrowRight 
                            onClick={(e) => {
                                e.stopPropagation(); 
                                handleNavigateToStep3();
                            }}
                        />
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Step2Page;