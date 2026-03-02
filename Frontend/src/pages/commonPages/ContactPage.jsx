import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

const ContactPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, email, company, subject, message);
    };

    return (
        <>
            <section className="w-full relative bg-linear-to-l from-slate-900 to-blue-900 overflow-hidden px-4 sm:px-6 lg:px-8">
                {/* Background blurs */}
                <div className="absolute size-[600px] right-[-60px] top-0 opacity-95 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute size-[500px] left-0 top-[4px] bg-blue-500/20 rounded-full blur-3xl" />

                <div className="relative max-w-[1280px] mx-auto px-6 lg:px-12 pt-8">
                    <Navbar />
                </div>

                <div className="relative max-w-[1280px] mx-auto flex flex-col items-center pt-10 pb-16">
                    {/* Badge */}
                    <div className="w-44 h-12 bg-white/10 rounded-full outline-[1.30px] outline-solid outline-white/20 flex items-center justify-center">
                        <span className="text-white/95 text-sm font-medium uppercase leading-5 tracking-wide">Get In Touch</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-[79.20px] mt-4">
                        Contact Us
                    </h1>

                    {/* Underline */}
                    <div className="w-24 h-2 bg-linear-to-b from-slate-900 to-blue-900 rounded-full mt-3" />

                    {/* Description */}
                    <p className="max-w-[715px] text-center text-white/90 text-lg sm:text-xl font-normal leading-10 mt-6 px-4">
                        Have questions? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>
            </section>

            <section className="w-full relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
                {/* Background blurs */}
                <div className="absolute size-[600px] left-[640px] top-0 bg-cyan-900/5 rounded-full blur-3xl" />
                <div className="absolute size-96 left-0 bottom-0 bg-blue-400/5 rounded-full blur-3xl" />

                <div className="relative max-w-[1084px] mx-auto flex flex-col lg:flex-row gap-10 lg:gap-[106px]">
                    {/* Form card */}
                    <div className="w-full max-w-[499px] bg-white rounded-[20.50px] shadow-[0px_6.83px_8.54px_-5.13px_rgba(0,0,0,0.10),0px_17.09px_21.36px_-4.27px_rgba(0,0,0,0.10)] outline-[1.11px] outline-solid outline-gray-100 px-11 py-5 flex flex-col gap-1.5">
                        <h2 className="text-slate-900 text-3xl font-semibold leading-9">Send us a message</h2>
                        <p className="text-gray-600 text-sm font-normal leading-6">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>

                        <form className="flex flex-col gap-5 mt-2" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-900 text-xs font-medium leading-4">Full Name</label>
                                <input type="text" placeholder="Enter your full name" value={username} onChange={(e) => setUsername(e.target.value)} required className="h-11 px-3.5 py-2.5 rounded-[10.25px] outline-[1.11px] outline-solid outline-gray-200 text-sm placeholder:text-slate-900/50" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-900 text-xs font-medium leading-4">Email Address</label>
                                <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11 px-3.5 py-2.5 rounded-[10.25px] outline-[1.11px] outline-solid outline-gray-200 text-sm placeholder:text-slate-900/50" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-900 text-xs font-medium leading-4">Company Name</label>
                                <input type="text" placeholder="Enter your company name" value={company} onChange={(e) => setCompany(e.target.value)} required className="h-11 px-3.5 py-2.5 rounded-[10.25px] outline-[1.11px] outline-solid outline-gray-200 text-sm placeholder:text-slate-900/50" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-900 text-xs font-medium leading-4">Subject</label>
                                <select value={subject} onChange={(e) => setSubject(e.target.value)} required className="h-10 px-3.5 rounded-[10.25px] outline-[1.11px] outline-solid outline-gray-200 text-sm text-slate-900/50 bg-white">
                                    <option value="">Select a subject</option>
                                    <option value="general">General Inquiry</option>
                                    <option value="support">Support</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-900 text-xs font-medium leading-4">Message</label>
                                <textarea placeholder="Tell us how we can help..." value={message} onChange={(e) => setMessage(e.target.value)} rows={5} required className="px-3.5 py-2.5 rounded-[10.25px] outline-[1.11px] outline-solid outline-gray-200 text-sm placeholder:text-slate-900/50 leading-5 resize-none" />
                            </div>
                            <button type="submit" className="h-12 bg-linear-to-b from-slate-900 to-blue-900 rounded-xl shadow-[0px_21.36px_42.72px_-10.25px_rgba(0,0,0,0.25)] flex items-center justify-center hover:opacity-90 transition">
                                <span className="text-white text-sm font-medium leading-5">Send Message</span>
                            </button>
                        </form>
                    </div>

                    {/* Right column */}
                    <div className="w-full max-w-[480px] flex flex-col gap-7">
                        {/* Get in Touch card */}
                        <div className="relative bg-linear-to-l from-slate-900 to-blue-900 rounded-[19.69px] shadow-[0px_20.51px_41.01px_-9.84px_rgba(0,0,0,0.25)] overflow-hidden p-8">
                            <div className="absolute size-60 right-0 top-0 bg-blue-400/20 rounded-full blur-[52.49px]" />
                            <div className="absolute size-40 left-0 bottom-0 bg-blue-500/20 rounded-full blur-[52.49px]" />
                            <div className="relative flex flex-col gap-5">
                                <h3 className="text-white text-xl font-semibold leading-6">Get in Touch</h3>
                                <div className="flex flex-col gap-5">
                                    <div className="flex items-start gap-3.5">
                                        <div className="size-10 shrink-0 bg-white/10 rounded-[9.84px] flex justify-center items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.45898 6.55882L8.92769 10.8713C9.19714 11.0511 9.51381 11.147 9.83773 11.147C10.1617 11.147 10.4783 11.0511 10.7478 10.8713L17.2165 6.55882M4.09871 15.5773H15.5768C16.0116 15.5773 16.4287 15.4045 16.7362 15.097C17.0437 14.7895 17.2165 14.3724 17.2165 13.9376V5.73896C17.2165 5.30408 17.0437 4.88701 16.7362 4.57951C16.4287 4.272 16.0116 4.09924 15.5768 4.09924H4.09871C3.66382 4.09924 3.24675 4.272 2.93925 4.57951C2.63174 4.88701 2.45898 5.30408 2.45898 5.73896V13.9376C2.45898 14.3724 2.63174 14.7895 2.93925 15.097C3.24675 15.4045 3.66382 15.5773 4.09871 15.5773Z" stroke="white" strokeWidth="1.63972" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[3.27px]">
                                            <span className="text-white/70 text-xs font-medium leading-4">Email</span>
                                            <a href="mailto:hello@nomad.com" className="text-white text-sm font-normal underline leading-5">hello@nomad.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3.5">
                                        <div className="size-10 shrink-0 bg-white/10 rounded-[9.84px] flex justify-center items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.45898 4.09919C2.45898 3.66431 2.63174 3.24724 2.93925 2.93974C3.24675 2.63223 3.66382 2.45947 4.09871 2.45947H6.78785C6.95985 2.4596 7.12745 2.51383 7.26694 2.61447C7.40642 2.71511 7.51072 2.85707 7.56508 3.02026L8.79323 6.70389C8.85546 6.8911 8.8481 7.09446 8.7725 7.27668C8.6969 7.4589 8.55813 7.60775 8.38166 7.69592L6.53123 8.62237C7.43826 10.6298 9.04612 12.2377 11.0536 13.1447L11.98 11.2943C12.0682 11.1178 12.217 10.979 12.3993 10.9034C12.5815 10.8279 12.7849 10.8205 12.9721 10.8827L16.6557 12.1109C16.819 12.1653 16.9611 12.2697 17.0617 12.4093C17.1624 12.549 17.2165 12.7168 17.2165 12.8889V15.5772C17.2165 16.0121 17.0437 16.4292 16.7362 16.7367C16.4287 17.0442 16.0116 17.217 15.5768 17.217H14.7569C7.96517 17.217 2.45898 11.7108 2.45898 4.91905V4.09919Z" stroke="white" strokeWidth="1.63972" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[3.27px]">
                                            <span className="text-white/70 text-xs font-medium leading-4">Phone</span>
                                            <a href="tel:+15550000000" className="text-white text-sm font-normal underline leading-5">+1 (555) 000-0000</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3.5">
                                        <div className="size-10 shrink-0 bg-white/10 rounded-[9.84px] flex justify-center items-center">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.4752 13.6566L10.9965 17.1352C10.8444 17.2875 10.6637 17.4083 10.4649 17.4907C10.266 17.5732 10.0529 17.6156 9.83762 17.6156C9.62236 17.6156 9.40922 17.5732 9.21038 17.4907C9.01153 17.4083 8.83088 17.2875 8.67874 17.1352L5.19926 13.6566C4.28201 12.7393 3.65737 11.5706 3.40433 10.2983C3.15128 9.02601 3.28118 7.70725 3.77762 6.50879C4.27406 5.31033 5.11473 4.28599 6.19332 3.56531C7.27192 2.84462 8.54 2.45996 9.83721 2.45996C11.1344 2.45996 12.4025 2.84462 13.4811 3.56531C14.5597 4.28599 15.4004 5.31033 15.8968 6.50879C16.3932 7.70725 16.5231 9.02601 16.2701 10.2983C16.017 11.5706 15.3924 12.7393 14.4752 13.6566Z" stroke="white" strokeWidth="1.63972" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M12.2971 9.01854C12.2971 9.67086 12.038 10.2965 11.5767 10.7577C11.1154 11.219 10.4898 11.4781 9.83751 11.4781C9.18519 11.4781 8.55959 11.219 8.09832 10.7577C7.63706 10.2965 7.37793 9.67086 7.37793 9.01854C7.37793 8.36622 7.63706 7.74062 8.09832 7.27935C8.55959 6.81809 9.18519 6.55896 9.83751 6.55896C10.4898 6.55896 11.1154 6.81809 11.5767 7.27935C12.038 7.74062 12.2971 8.36622 12.2971 9.01854Z" stroke="white" strokeWidth="1.63972" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col gap-[3.27px]">
                                            <span className="text-white/70 text-xs font-medium leading-4">Office</span>
                                            <span className="text-white text-sm font-normal leading-5">123 Sample St, Sydney NSW 2000 AU</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Hours card */}
                        <div className="bg-white rounded-[19.69px] shadow-[0px_3.28px_4.92px_-3.28px_rgba(0,0,0,0.10),0px_8.20px_12.30px_-2.46px_rgba(0,0,0,0.10)] outline-[1.06px] outline-solid outline-gray-100 px-7 pt-7 pb-px flex flex-col gap-3.5">
                            <div className="flex items-center gap-2.5">
                                <div className="size-8 bg-linear-to-b from-slate-900 to-blue-900 rounded-lg flex justify-center items-center">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.19369 5.46306V8.19454L10.2423 10.2432M14.3395 8.19454C14.3395 9.00163 14.1806 9.80081 13.8717 10.5465C13.5628 11.2921 13.1101 11.9696 12.5395 12.5403C11.9688 13.111 11.2912 13.5637 10.5456 13.8726C9.79995 14.1814 9.00077 14.3404 8.19369 14.3404C7.38661 14.3404 6.58743 14.1814 5.84178 13.8726C5.09613 13.5637 4.41862 13.111 3.84793 12.5403C3.27723 11.9696 2.82453 11.2921 2.51568 10.5465C2.20682 9.80081 2.04785 9.00163 2.04785 8.19454C2.04785 6.56457 2.69536 5.00135 3.84793 3.84878C5.00049 2.69621 6.56371 2.04871 8.19369 2.04871C9.82367 2.04871 11.3869 2.69621 12.5395 3.84878C13.692 5.00135 14.3395 6.56457 14.3395 8.19454Z" stroke="white" strokeWidth="1.36574" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                                <span className="text-slate-900 text-base font-semibold leading-6">Support Hours</span>
                            </div>
                            <div className="flex flex-col gap-2.5 pb-6">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs font-normal leading-4">Monday - Friday</span>
                                    <span className="text-slate-900 text-xs font-medium leading-4">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs font-normal leading-4">Saturday</span>
                                    <span className="text-slate-900 text-xs font-medium leading-4">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-600 text-xs font-normal leading-4">Sunday</span>
                                    <span className="text-slate-900 text-xs font-medium leading-4">Closed</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links card */}
                        <div className="bg-white rounded-[19.69px] shadow-[0px_3.28px_4.92px_-3.28px_rgba(0,0,0,0.10),0px_8.20px_12.30px_-2.46px_rgba(0,0,0,0.10)] outline-[1.06px] outline-solid outline-gray-100 px-7 pt-7 pb-px flex flex-col gap-3.5">
                            <h3 className="text-slate-900 text-base font-semibold leading-6">Quick Links</h3>
                            <div className="flex flex-col gap-2.5 pb-6">
                                {["Frequently Asked Questions", "How It Works", "For Companies", "For Recruiters"].map((link) => (
                                    <a key={link} href="#" className="flex items-center gap-1.5 group">
                                        <svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 2.4575C0 1.10026 1.10026 0 2.4575 0C3.81475 0 4.91501 1.10026 4.91501 2.4575C4.91501 3.81475 3.81475 4.91501 2.4575 4.91501C1.10026 4.91501 0 3.81475 0 2.4575Z" fill="#25406A"/>
                                        </svg>
                                        <span className="text-gray-600 text-xs font-normal leading-4 group-hover:underline">{link}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
