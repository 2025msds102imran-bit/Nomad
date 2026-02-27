import React from 'react';
import Navbar from '../../components/Navbar';
import { AboutSection } from '../../components/landing';

const AboutPage = () => {
    return (
        <>
            <section className="w-full bg-linear-to-b from-[#0F172A] to-[#334F90] pt-8 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <Navbar />
                </div>
                <div className="max-w-7xl mx-auto flex flex-col items-center mt-16">
                    <div className="text-center max-w-3xl flex flex-col items-center gap-4">
                        <div className="inline-block text-[#FFFFFFF2] px-6 py-2 rounded-full bg-[#FFFFFF1A] border border-[#FFFFFF33] text-sm uppercase tracking-wider">
                            Story
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                            About Us
                        </h2>
                        <div className="w-16 h-[3px] rounded-full bg-white/40" />
                        <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                            We're here to help you navigate the marketplace with clarity and control. Whether you're a company or a recruiter, reach out to our team and we'll get back to you as soon as possible.
                        </p>
                    </div>
                </div>
            </section>

            <AboutSection full />
        </>
    );
};

export default AboutPage;
