import { useState } from "react";
import {
  Zap, Star, Crown, Check, Sparkles, TrendingUp, Award,
  ArrowLeft, CreditCard, ChevronDown, Info, Lock, ShieldCheck,
} from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: "€39.00",
    icon: Zap,
    iconBg: "bg-linear-to-b from-slate-900 to-blue-900",
    starCount: 0,
    starColor: "",
    badge: { text: "CURRENT PLAN", bg: "bg-blue-500", Icon: Zap, IconRight: null, size: "h-8 px-4" },
    cardBg: "bg-white",
    cardBorder: "outline-blue-500",
    cardShadow: "",
    buttonStyle: "bg-gray-200 text-gray-600 cursor-default",
    buttonText: "Current Plan",
    buttonIcon: false,
    isCurrent: true,
    features: [
      "Connect with up to 5 profiles",
      "Post up to 1 resume",
      "Full access to the portal",
    ],
    featureIconBg: "bg-blue-50",
    featureIconStroke: "#0F172A",
    footer: null,
    expiry: "Dec 29, 2025",
  },
  {
    id: "pro",
    name: "Pro",
    price: "€89.00",
    icon: Star,
    iconBg: "bg-linear-to-b from-amber-500 to-amber-400",
    starCount: 4,
    starColor: "#F59E0B",
    badge: { text: "MOST POPULAR", bg: "bg-linear-to-b from-amber-500 via-amber-400 to-amber-500", Icon: TrendingUp, IconRight: Star, size: "h-12 px-5" },
    cardBg: "bg-linear-to-b from-white to-amber-50",
    cardBorder: "outline-amber-500",
    cardShadow: "shadow-2xl",
    buttonStyle: "bg-linear-to-b from-amber-500 to-amber-400 text-white hover:opacity-90 cursor-pointer",
    buttonText: "Get Started Now",
    buttonIcon: true,
    isCurrent: false,
    features: [
      "Connect with up to 10 profiles",
      "Post up to 3 resumes",
      "1× Boosts per month for 1 resume",
      "Full access to the portal",
    ],
    featureIconBg: "bg-linear-to-b from-amber-500 to-amber-400",
    featureIconStroke: "white",
    footer: { text: "Save 25% with Annual Plan", color: "text-amber-500", borderColor: "border-amber-100", Icon: Sparkles },
    expiry: null,
  },
  {
    id: "premium",
    name: "Premium",
    price: "€129.00",
    icon: Crown,
    iconBg: "bg-linear-to-b from-violet-500 to-violet-400",
    starCount: 5,
    starColor: "#6366F1",
    badge: { text: "BEST VALUE", bg: "bg-linear-to-b from-violet-500 via-violet-400 to-violet-500", Icon: Award, IconRight: Crown, size: "h-8 px-5" },
    cardBg: "bg-linear-to-b from-white to-violet-50",
    cardBorder: "outline-indigo-500",
    cardShadow: "shadow-2xl",
    buttonStyle: "bg-linear-to-b from-violet-500 to-violet-400 text-white hover:opacity-90 cursor-pointer",
    buttonText: "Get Started Now",
    buttonIcon: true,
    isCurrent: false,
    features: [
      "Unlimited connections",
      "Unlimited resume postings",
      "3× Boosts per month for 3 resumes",
      "Full access to the portal",
    ],
    featureIconBg: "bg-linear-to-b from-violet-500 to-violet-400",
    featureIconStroke: "white",
    footer: { text: "Includes Priority Support", color: "text-indigo-500", borderColor: "border-violet-100", Icon: Crown },
    expiry: null,
  },
];

const paymentMethods = [
  { id: "card", label: "Card", icon: CreditCard, active: true },
  { id: "wechat", label: "WeChat Pay", color: "bg-[#09B83E]", active: false },
  { id: "ideal", label: "iDEAL", color: "bg-[#CC0066]", active: false },
  { id: "sepa", label: "SEPA Debit", color: "bg-[#003399]", active: false },
];

const countries = [
  "Pakistan", "United States", "United Kingdom", "Germany",
  "France", "Netherlands", "Spain", "Italy", "Canada", "Australia",
];

const PlanCard = ({ plan, onSelect }) => {
  const PlanIcon = plan.icon;
  const BadgeIcon = plan.badge.Icon;
  const BadgeIconRight = plan.badge.IconRight;

  return (
    <div className={`relative rounded-2xl outline-[1.3px] outline-offset-[-1.3px] ${plan.cardBorder} ${plan.cardBg} ${plan.cardShadow} flex flex-col`}>
      <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${plan.badge.size} ${plan.badge.bg} rounded-full shadow-lg flex items-center gap-2 z-10`}>
        {BadgeIcon && <BadgeIcon size={16} className="text-white" fill={BadgeIconRight ? "none" : "white"} />}
        <span className="text-white text-xs font-bold leading-4 whitespace-nowrap">{plan.badge.text}</span>
        {BadgeIconRight && <BadgeIconRight size={16} className="text-white" fill="white" />}
      </div>

      <div className="px-8 pt-12 pb-8 flex flex-col flex-1">
        <div className="flex justify-center">
          <div className={`size-10 ${plan.iconBg} rounded-full flex items-center justify-center`}>
            <PlanIcon size={24} className="text-white" fill="white" />
          </div>
        </div>

        <h3 className="text-center text-slate-900 text-2xl font-bold leading-8 mt-2">{plan.name}</h3>
        {plan.starCount > 0 ? (
          <div className="flex justify-center items-center gap-1 mt-2 h-3">
            {Array.from({ length: plan.starCount }).map((_, i) => (
              <Star key={i} size={13} fill={plan.starColor} stroke={plan.starColor} />
            ))}
          </div>
        ) : (
          <div className="h-3 mt-2" />
        )}

        <div className="text-center mt-6">
          <span className="text-slate-900 text-5xl font-bold leading-[48px]">{plan.price}</span>
        </div>
        <p className="text-center text-gray-600 text-sm font-normal leading-5 mt-2">/ Month</p>

        <button
          onClick={() => !plan.isCurrent && onSelect(plan)}
          className={`w-full h-14 rounded-[10px] flex items-center justify-center gap-2 mt-6 text-base font-semibold leading-6 transition-opacity ${plan.buttonStyle}`}
        >
          <span>{plan.buttonText}</span>
          {plan.buttonIcon && <Sparkles size={17} className="text-white" />}
        </button>

        {plan.expiry ? (
          <div className="border-b border-gray-100 pb-4 mt-6">
            <p className="text-center text-sm leading-5">
              <span className="text-gray-600 font-normal">Expires on </span>
              <span className="text-slate-900 font-semibold">{plan.expiry}</span>
            </p>
          </div>
        ) : (
          <div className="mt-6" />
        )}

        <div className="flex flex-col gap-4 mt-6">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className={`size-6 ${plan.featureIconBg} rounded-full flex items-center justify-center shrink-0`}>
                <Check size={16} stroke={plan.featureIconStroke} strokeWidth={2} />
              </div>
              <span className="text-gray-600 text-sm font-normal leading-6">{feature}</span>
            </div>
          ))}
        </div>

        {plan.footer ? (
          <div className={`border-t ${plan.footer.borderColor} mt-auto pt-7`}>
            <div className="flex justify-center items-center gap-2">
              <plan.footer.Icon size={17} className={plan.footer.color} />
              <span className={`${plan.footer.color} text-xs font-semibold leading-4`}>{plan.footer.text}</span>
              <plan.footer.Icon size={17} className={plan.footer.color} />
            </div>
          </div>
        ) : (
          <div className="mt-auto" />
        )}
      </div>
    </div>
  );
};

const PaymentView = ({ plan, onBack }) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex flex-col gap-6">
      {/* Back button */}
      <button onClick={onBack} className="flex items-center gap-2 text-gray-600 text-base font-medium leading-6 hover:text-gray-900 transition-colors w-fit cursor-pointer">
        <ArrowLeft size={20} stroke="#4A5565" />
        <span>Back to Plans</span>
      </button>

      {/* Heading */}
      <div className="flex flex-col gap-2">
        <h1 className="text-slate-900 text-2xl font-semibold leading-10">Complete Your Payment</h1>
        <p className="text-gray-600 text-base font-normal leading-6">Secure payment processing with Stripe</p>
      </div>

      {/* Plan price banner */}
      <div className="bg-linear-to-b from-slate-900 to-blue-900 rounded-2xl px-8 pt-8 pb-8">
        <p className="text-white text-5xl font-bold leading-[48px]">{plan.price}</p>
        <p className="text-white/80 text-sm font-normal leading-5 mt-2">{plan.name} Plan / Month</p>
      </div>

      {/* Payment information card */}
      <div className="bg-white rounded-2xl outline-[1px] outline-gray-100 p-8 flex flex-col gap-6">
        <h2 className="text-gray-600 text-xl font-semibold leading-7">Payment Information</h2>

        {/* Payment method tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setPaymentMethod(method.id)}
              className={`h-16 rounded-[10px] flex items-center justify-center gap-2 outline-[1.3px] outline-offset-[-1.3px] transition-colors cursor-pointer ${
                paymentMethod === method.id
                  ? "bg-blue-50 outline-blue-500"
                  : "outline-gray-200 hover:bg-gray-50"
              }`}
            >
              {method.icon ? (
                <method.icon size={20} stroke="#4A90E2" />
              ) : (
                <div className={`w-5 h-5 ${method.color} rounded-md`} />
              )}
              <span className="text-gray-600 text-sm font-medium leading-5">{method.label}</span>
            </button>
          ))}
          <button className="h-16 rounded-[10px] outline-[1.3px] outline-offset-[-1.3px] outline-gray-200 flex items-center justify-center hover:bg-gray-50 cursor-pointer">
            <ChevronDown size={20} stroke="#0A0A0A" />
          </button>
        </div>

        {/* Secure badge */}
        <div className="w-fit pl-3 pr-4 h-9 bg-green-50 rounded-[10px] flex items-center gap-2">
          <Lock size={16} className="text-emerald-500" fill="#10B981" stroke="white" />
          <span className="text-emerald-500 text-sm font-medium leading-5">Secure, fast checkout with Link</span>
        </div>

        {/* Card number */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 text-sm font-medium leading-5">Card number</label>
          <div className="relative">
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full h-12 px-4 py-3 rounded-[10px] outline-[1.3px] outline-gray-200 text-base placeholder:text-gray-600/50"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <div className="w-8 h-5 bg-gray-200 rounded-sm" />
              <div className="w-8 h-5 bg-gray-200 rounded-sm" />
              <div className="w-8 h-5 bg-gray-200 rounded-sm" />
              <div className="w-8 h-5 bg-gray-200 rounded-sm" />
            </div>
          </div>
        </div>

        {/* Expiry + CVC */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-600 text-sm font-medium leading-5">Expiration date</label>
            <input
              type="text"
              placeholder="MM / YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              className="w-full h-12 px-4 py-3 rounded-[10px] outline-[1.3px] outline-gray-200 text-base placeholder:text-gray-600/50"
            />
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <label className="text-gray-600 text-sm font-medium leading-5">Security code</label>
            <div className="relative">
              <input
                type="text"
                placeholder="CVC"
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
                className="w-full h-12 px-4 py-3 rounded-[10px] outline-[1.3px] outline-gray-200 text-base placeholder:text-gray-600/50"
              />
              <CreditCard size={20} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2" />
            </div>
          </div>
        </div>

        {/* Country */}
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 text-sm font-medium leading-5">Country</label>
          <div className="relative">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full h-12 px-4 py-3 rounded-[10px] outline-[1.3px] outline-gray-200 text-base appearance-none bg-white cursor-pointer"
            >
              <option value="">Select country</option>
              {countries.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={20} stroke="#4A5565" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onBack}
          className="flex-1 h-14 rounded-[10px] outline-[1px] outline-gray-200 flex items-center justify-center text-gray-600 text-base font-semibold leading-6 hover:bg-gray-50 transition-colors cursor-pointer"
        >
          Cancel
        </button>
        <button className="flex-1 h-14 bg-cyan-900 rounded-[10px] flex items-center justify-center text-white text-base font-semibold leading-6 hover:bg-cyan-800 transition-colors cursor-pointer">
          Pay Now
        </button>
      </div>

      {/* Secure payment info */}
      <div className="bg-blue-50 rounded-[10px] outline-[1.3px] outline-blue-100 px-4 pt-4 pb-4">
        <div className="flex items-start gap-3">
          <Info size={20} className="text-blue-500 shrink-0 mt-0.5" fill="#4A90E2" stroke="white" />
          <div className="flex flex-col gap-1">
            <p className="text-slate-900 text-sm font-medium leading-5">Secure Payment</p>
            <p className="text-gray-600 text-xs font-normal leading-4">
              Your payment information is encrypted and secure. We use Stripe for payment processing and never store your card details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const SubscriptionPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (selectedPlan) {
    return <PaymentView plan={selectedPlan} onBack={() => setSelectedPlan(null)} />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-4">
      {plans.map((plan) => (
        <PlanCard key={plan.id} plan={plan} onSelect={setSelectedPlan} />
      ))}
    </div>
  );
};

export default SubscriptionPage;
