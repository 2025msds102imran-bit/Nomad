import React from 'react'

const RecruiterPricing = () => {
    return (
        <div>
            {pricingTab === "recruiter" && (
                <div className="w-full flex flex-col gap-6">
                    {/* Back Button */}
                    <button
                        onClick={() => setPricingTab("company")}
                        className="w-72 h-10 flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.09775 12.8186L3.375 8.0958L8.09775 3.37305" stroke="#6B7280" strokeWidth="1.34936" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.8205 8.0957H3.375" stroke="#6B7280" strokeWidth="1.34936" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="text-base font-medium">Back to Configuration</span>
                    </button>

                    {/* Warning Banner */}
                    <div className="w-full h-16 px-3.5 pt-3.5 bg-gradient-to-b from-amber-100 via-amber-200 to-amber-100 rounded-[10px] border-l-4 border-amber-500 flex items-start gap-3">
                        <div className="size-9 bg-white rounded-[10px] shadow flex justify-center items-center shrink-0">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1999_842)">
                                    <path d="M8.83288 16.4928C12.8978 16.4928 16.1931 13.1363 16.1931 8.99589C16.1931 4.85549 12.8978 1.49902 8.83288 1.49902C4.76794 1.49902 1.47266 4.85549 1.47266 8.99589C1.47266 13.1363 4.76794 16.4928 8.83288 16.4928Z" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.83203 5.99805V8.99741" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M8.83203 11.9961H8.83979" stroke="#F59E0B" strokeWidth="1.48565" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                            </svg>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                            <div className="text-amber-800 text-[10.40px] font-bold">⚠️ Critical: Global Configuration Changes</div>
                            <div className="text-amber-900 text-[10.40px] font-normal">All changes made here will take effect immediately across the entire platform and impact all users. Please review carefully before saving.</div>
                        </div>
                    </div>

                    {/* Trial Period Configuration */}
                    <div className="w-full bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col gap-3 p-5">
                        <div className="flex items-center gap-2.5">
                            <div className="size-10 bg-gradient-to-b from-indigo-500 to-indigo-600 rounded-xl shadow-md flex justify-center items-center">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.67969 1.41895V4.25844" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M11.3574 1.41895V4.25844" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.4888 2.83984H3.5506C2.7665 2.83984 2.13086 3.47549 2.13086 4.25959V14.1978C2.13086 14.9819 2.7665 15.6175 3.5506 15.6175H13.4888C14.2729 15.6175 14.9086 14.9819 14.9086 14.1978V4.25959C14.9086 3.47549 14.2729 2.83984 13.4888 2.83984Z" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.13086 7.09961H14.9086" stroke="white" strokeWidth="1.41975" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-slate-900 text-lg font-bold">Trial Period Configuration</div>
                                <div className="text-gray-500 text-xs">Control free trial access and duration</div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <div className="flex flex-col gap-2 min-w-[200px]">
                                <label className="text-slate-900 text-xs font-semibold">Trial Duration</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="number"
                                        value={trialDuration}
                                        onChange={(e) => setTrialDuration(Number(e.target.value) || 0)}
                                        className="w-24 h-11 px-3.5 py-2.5 bg-white rounded-lg border border-gray-200 text-neutral-950 text-xs font-medium"
                                    />
                                    <span className="text-gray-500 text-xs font-medium">days</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 min-w-[280px]">
                                <label className="text-slate-900 text-xs font-semibold">Active Configuration</label>
                                <div className="px-4 py-3 bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg border border-blue-500">
                                    <div className="flex items-center gap-2">
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" className="text-blue-600 shrink-0">
                                            <path d="M9.36669 7.80078L10.2835 12.9602" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.26363 8.4716C9.26888 8.4716 10.8944 6.84602 10.8944 4.84078C10.8944 2.83553 9.26888 1.20996 7.26363 1.20996C5.25839 1.20996 3.63281 2.83553 3.63281 4.84078C3.63281 6.84602 5.25839 8.4716 7.26363 8.4716Z" stroke="currentColor" strokeWidth="1.21" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span className="text-blue-800 text-xs font-bold">{trialDuration} Days Free Trial</span>
                                    </div>
                                    <div className="text-blue-500 text-xs mt-0.5">Applied to all new signups</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Control */}
                    <div className="w-full px-5 pt-5 pb-1 bg-white rounded-xl border border-gray-200 flex flex-col gap-3">
                        <div className="flex items-center gap-2.5">
                            <div className="size-10 bg-gradient-to-b from-emerald-500 to-emerald-600 rounded-xl shadow-md flex justify-center items-center">
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.45018 12.5191C7.37948 12.245 7.23663 11.9949 7.0365 11.7948C6.83637 11.5947 6.58627 11.4518 6.31221 11.3811L1.45385 10.1283C1.37097 10.1048 1.29801 10.0549 1.24607 9.98612C1.19412 9.91738 1.16602 9.83356 1.16602 9.7474C1.16602 9.66124 1.19412 9.57743 1.24607 9.50869C1.29801 9.43994 1.37097 9.39002 1.45385 9.36649L6.31221 8.1129C6.58617 8.04227 6.83621 7.89954 7.03633 7.69956C7.23646 7.49957 7.37936 7.24963 7.45018 6.97572L8.70298 2.11737C8.72627 2.03415 8.77614 1.96084 8.84499 1.90862C8.91383 1.85639 8.99787 1.82812 9.08428 1.82812C9.1707 1.82812 9.25474 1.85639 9.32358 1.90862C9.39243 1.96084 9.4423 2.03415 9.46559 2.11737L10.7176 6.97572C10.7883 7.24978 10.9311 7.49989 11.1313 7.70002C11.3314 7.90015 11.5815 8.043 11.8556 8.1137L16.7139 9.3657C16.7975 9.38875 16.8711 9.43856 16.9237 9.50751C16.9762 9.57646 17.0046 9.66074 17.0046 9.7474C17.0046 9.83407 16.9762 9.91834 16.9237 9.98729C16.8711 10.0562 16.7975 10.1061 16.7139 10.1291L11.8556 11.3811C11.5815 11.4518 11.3314 11.5947 11.1313 11.7948C10.9311 11.9949 10.7883 12.245 10.7176 12.5191L9.4648 17.3774C9.44151 17.4607 9.39164 17.534 9.32279 17.5862C9.25394 17.6384 9.1699 17.6667 9.08349 17.6667C8.99708 17.6667 8.91304 17.6384 8.84419 17.5862C8.77535 17.534 8.72548 17.4607 8.70219 17.3774L7.45018 12.5191Z" stroke="white" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-slate-900 text-lg font-bold">Pricing Control</div>
                                <div className="text-gray-500 text-xs">Manage early access pricing across the platform</div>
                            </div>
                        </div>
                        <div className="w-full py-5 px-4 sm:px-5 bg-gradient-to-b from-green-50 to-green-100 rounded-xl border border-emerald-500 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex-1 w-full sm:w-auto">
                                <div className="flex items-center gap-2.5 mb-1">
                                    <span className="text-slate-900 text-sm font-semibold">Early Access Status</span>
                                    <span className="bg-emerald-500 text-white text-[9.51px] font-bold px-2 py-0.5 rounded-full">OPEN</span>
                                </div>
                                <div className="text-emerald-800 text-xs">✅ Open - Early access pricing is live on the frontend.</div>
                                <div className="text-gray-500 text-xs mt-0.5">When Open, users will see the Early Access price defined within each plan card instead of the standard monthly rate.</div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setEarlyAccessOpen(!earlyAccessOpen)}
                                className={`w-16 h-9 rounded-full flex shrink-0 items-center transition-colors ${earlyAccessOpen ? "bg-emerald-500 justify-end pr-2" : "bg-gray-300 justify-start pl-2"}`}
                            >
                                <div className="size-6 bg-white rounded-full shadow" />
                            </button>
                        </div>
                    </div>

                    {/* Recruiter Subscription Plans */}
                    <div className="w-full flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <svg width="29" height="30" viewBox="0 0 29 30" fill="none" className="text-slate-900 shrink-0">
                                <path d="M13.0704 26.2938C13.4316 26.5062 13.8413 26.6181 14.2584 26.6181C14.6755 26.6181 15.0852 26.5062 15.4464 26.2938L23.7624 21.4536C24.1233 21.2414 24.423 20.9363 24.6315 20.5688C24.84 20.2014 24.95 19.7846 24.9504 19.3602V9.67974C24.95 9.25534 24.84 8.83852 24.6315 8.47109C24.423 8.10366 24.1233 7.79854 23.7624 7.58634L15.4464 2.74611C15.0852 2.5337 14.6755 2.42188 14.2584 2.42188C13.8413 2.42188 13.4316 2.5337 13.0704 2.74611L4.75441 7.58634C4.39357 7.79854 4.09386 8.10366 3.88534 8.47109C3.67682 8.83852 3.56683 9.25534 3.56641 9.67974V19.3602C3.56683 19.7846 3.67682 20.2014 3.88534 20.5688C4.09386 20.9363 4.39357 21.2414 4.75441 21.4536L13.0704 26.2938Z" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="text-slate-900 text-lg font-semibold">Recruiter Subscription Plans</span>
                        </div>

                        <div className="p-4 bg-gradient-to-b from-blue-50 to-blue-100 rounded-xl border border-blue-500 flex items-center gap-3">
                            <div className="size-11 bg-white rounded-xl shadow flex justify-center items-center shrink-0">
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-blue-600">
                                    <path d="M9.875 18.6709H17.9068" stroke="currentColor" strokeWidth="1.80134" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M13.7799 3.78293C14.1352 3.42107 14.6171 3.21777 15.1195 3.21777C15.6219 3.21777 16.1037 3.42107 16.459 3.78293C16.8143 4.14479 17.0139 4.63558 17.0139 5.14733C17.0139 5.65908 16.8143 6.14987 16.459 6.51173L5.74098 17.4297C5.52866 17.6459 5.26623 17.8041 4.97795 17.8896L2.4149 18.6513C2.33811 18.6742 2.25671 18.6755 2.17922 18.6553C2.10173 18.6351 2.03101 18.594 1.97444 18.5364C1.91788 18.4788 1.87756 18.4068 1.85771 18.3278C1.83786 18.2489 1.8392 18.166 1.8616 18.0878L2.60945 15.4771C2.69354 15.1838 2.84884 14.9169 3.06102 14.7009L13.7799 3.78293Z" stroke="currentColor" strokeWidth="1.80134" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <div className="text-blue-800 text-xs font-bold">✏️ All Pricing is Fully Editable</div>
                                <div className="text-blue-800 text-xs">Click on any price amount or limit to edit it directly. Changes will be saved when you click &quot;Save All Configuration&quot; at the bottom.</div>
                            </div>
                        </div>

                        {/* Plan Cards */}
                        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Basic Plan */}
                            <RecruiterPlanCard
                                name="Basic Plan"
                                subtitle="Standard features"
                                earlyAccessPrice={27}
                                gradient="from-blue-500 to-blue-600"
                                boosts={3}
                                resumes={10}
                                jobPosts={5}
                                chatCredits={50}
                                recruiterFee={5}
                            />
                            {/* Pro Plan */}
                            <RecruiterPlanCard
                                name="Pro Plan"
                                subtitle="Advanced features"
                                earlyAccessPrice={79}
                                gradient="from-violet-500 to-violet-600"
                                boosts={3}
                                resumes={10}
                                jobPosts={5}
                                chatCredits={50}
                                recruiterFee={5}
                            />
                            {/* Premium Plan */}
                            <RecruiterPlanCard
                                name="Premium Plan"
                                subtitle="Unlimited access"
                                earlyAccessPrice={199}
                                gradient="from-amber-500 to-amber-600"
                                isPopular
                                boosts={-1}
                                resumes={-1}
                                jobPosts={-1}
                                chatCredits={-1}
                                recruiterFee={2}
                            />
                        </div>
                    </div>

                    {/* Save Button */}
                    <div className="w-full flex justify-end">
                        <button
                            type="button"
                            onClick={handleSaveConfig}
                            className="w-48 h-11 pl-8 bg-gradient-to-b from-slate-900 to-blue-900 rounded-xl shadow-[0px_6.28px_7.85px_-4.71px_rgba(0,0,0,0.10)] shadow-[0px_15.71px_19.64px_-3.92px_rgba(0,0,0,0.10)] text-white text-xs font-semibold flex items-center gap-2.5 hover:opacity-90 transition-opacity"
                        >
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" className="shrink-0 -ml-2.5">
                                <path d="M11.5252 2.60156C11.9397 2.60747 12.335 2.77691 12.6252 3.07299L15.6109 6.05871C15.907 6.34884 16.0764 6.74421 16.0823 7.15871V15.173C16.0823 15.5898 15.9167 15.9895 15.622 16.2842C15.3273 16.5789 14.9277 16.7444 14.5109 16.7444H3.51088C3.09411 16.7444 2.69441 16.5789 2.39971 16.2842C2.10501 15.9895 1.93945 15.5898 1.93945 15.173V4.17299C1.93945 3.75622 2.10501 3.35652 2.39971 3.06182C2.69441 2.76712 3.09411 2.60156 3.51088 2.60156H11.5252Z" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12.9372 16.7447V11.2447C12.9372 11.0363 12.8544 10.8365 12.7071 10.6891C12.5597 10.5418 12.3599 10.459 12.1515 10.459H5.86579C5.65741 10.459 5.45756 10.5418 5.31021 10.6891C5.16286 10.8365 5.08008 11.0363 5.08008 11.2447V16.7447" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M5.08008 2.60156V5.74442C5.08008 5.9528 5.16286 6.15265 5.31021 6.3C5.45756 6.44735 5.65741 6.53013 5.86579 6.53013H11.3658" stroke="white" strokeWidth="1.57" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Save All Configuration
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default RecruiterPricing
