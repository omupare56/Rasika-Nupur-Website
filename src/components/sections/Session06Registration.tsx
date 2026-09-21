import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// NOTE: Place the PhonePe QR image at this exact path:
//   client-photos/face-of-maharashtra/phonepe_qr.jpg
// Then uncomment the next line and remove the placeholder block below.
import phonePeQR from "../../../client-photos/face-of-maharashtra/phonepe_qr.jpg";

const ease = [0.22, 1, 0.36, 1] as const;

const WHATSAPP_NUMBER = "919545147559";

const categories = [
  { value: "Kids",  label: "Kids (3–10 years)" },
  { value: "Teens", label: "Teens (11–16 years)" },
  { value: "Miss",  label: "Miss (17–25 years)" },
  { value: "Mr",    label: "Mr (18–35 years)" },
  { value: "Mrs",   label: "Mrs (20–70 years)" },
];

interface FormData {
  name: string;
  dobDay: string;
  dobMonth: string;
  dobYear: string;
  age: string;
  category: string;
  address: string;
  height: string;
  weight: string;
  city: string;
  experience: string;
  achievements: string;
  paymentConfirmed: boolean;
}

const emptyForm: FormData = {
  name: "", dobDay: "", dobMonth: "", dobYear: "", age: "", category: "",
  address: "", height: "", weight: "", city: "",
  experience: "", achievements: "", paymentConfirmed: false,
};

interface FieldError { [key: string]: string }

function calcAge(d: string, m: string, y: string): string {
  if (!d || !m || !y) return "";
  const today = new Date();
  const birth = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
  let age = today.getFullYear() - birth.getFullYear();
  const md = today.getMonth() - birth.getMonth();
  if (md < 0 || (md === 0 && today.getDate() < birth.getDate())) age--;
  return age >= 0 ? String(age) : "";
}

interface Session06RegistrationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Session06Registration({ isOpen, onClose }: Session06RegistrationProps) {
  const [form, setForm] = useState<FormData>(emptyForm);
  const [errors, setErrors] = useState<FieldError>({});
  const overlayRef = useRef<HTMLDivElement>(null);

  // Auto-calculate age when DOB changes
  useEffect(() => {
    if (form.dobDay && form.dobMonth && form.dobYear) {
      setForm(f => ({ ...f, age: calcAge(form.dobDay, form.dobMonth, form.dobYear) }));
    }
  }, [form.dobDay, form.dobMonth, form.dobYear]);

  // Keyboard close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const set = (field: keyof FormData, value: string | boolean) =>
    setForm(f => ({ ...f, [field]: value }));

  const required = ["name", "dobDay", "dobMonth", "dobYear", "age", "category", "address", "height", "weight", "city", "experience"];

  const validate = (): boolean => {
    const errs: FieldError = {};
    required.forEach(k => {
      if (!form[k as keyof FormData]) errs[k] = "This field is required.";
    });
    if (!form.paymentConfirmed) errs.paymentConfirmed = "Please confirm payment before registering.";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const msg = [
      "FACE OF MAHARASHTRA: SEASON 6",
      "NASHIK AUDITION REGISTRATION",
      "",
      `Name: ${form.name}`,
      `DOB: ${form.dobDay}/${form.dobMonth}/${form.dobYear}`,
      `Age: ${form.age}`,
      `Category: ${form.category}`,
      `Address: ${form.address}`,
      `Height: ${form.height}`,
      `Weight: ${form.weight}`,
      `City: ${form.city}`,
      `Experience: ${form.experience}`,
      `Achievements: ${form.achievements || "None"}`,
      "",
      "Audition Date: 27 September 2026",
      "Audition Time: 3 PM Sharp",
      "Audition Fee: ₹300/-",
      "",
      "Payment: Completed via PhonePe",
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const inputClass = (field: string) =>
    `w-full bg-[#100508] border ${errors[field] ? "border-red-500/60" : "border-[#faf8f4]/10"} text-[#faf8f4] text-sm px-4 py-3 font-sans placeholder-[#faf8f4]/25 focus:outline-none focus:border-[#c9a96e]/50 transition-colors`;

  const labelClass = "font-sans text-[9px] tracking-[0.28em] uppercase text-[#c9a96e]/70 block mb-2";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[9998] flex items-start justify-center bg-[#080808]/95 overflow-y-auto py-8 px-4"
          onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease }}
            className="w-full max-w-2xl bg-[#0d0406] border border-[#c9a96e]/15 relative"
            onClick={e => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#faf8f4]/50 hover:text-[#c9a96e] text-3xl font-light transition-colors z-10 w-10 h-10 flex items-center justify-center"
              aria-label="Close"
            >
              &#215;
            </button>

            {/* Header */}
            <div className="border-b border-[#c9a96e]/10 px-8 py-8">
              <span className="font-sans text-[8px] tracking-[0.38em] uppercase text-[#c9a96e] block mb-3">Upcoming</span>
              <h2 className="font-serif text-[#faf8f4] text-2xl sm:text-3xl leading-tight mb-1">
                Face of Maharashtra
              </h2>
              <h3 className="font-serif text-[#c9a96e] text-xl mb-4">Season 6</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-[#faf8f4]/6 mt-6">
                {[
                  { label: "Auditions", value: "27 September 2026" },
                  { label: "Time", value: "3 PM Sharp" },
                  { label: "Final Event", value: "3 January 2027" },
                ].map(item => (
                  <div key={item.label} className="bg-[#0d0406] px-4 py-4">
                    <span className="font-sans text-[8px] tracking-[0.26em] uppercase text-[#c9a96e]/50 block mb-1">{item.label}</span>
                    <span className="font-serif text-[#faf8f4] text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Audition details */}
            <div className="border-b border-[#c9a96e]/10 px-8 py-7">
              <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e] block mb-5">Nashik Audition Details</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className={labelClass}>Venue</p>
                  <p className="font-sans text-[#faf8f4]/70 text-sm leading-relaxed">
                    Ghhunggroo The Modelling Institute<br />
                    1st Floor, Above Samrat Fabrics<br />
                    Opposite Topchi, Between ABB &amp; ITI Circle<br />
                    Trimbak Road, Nashik
                  </p>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className={labelClass}>Date</p>
                    <p className="font-serif text-[#faf8f4] text-sm">27 September 2026</p>
                  </div>
                  <div>
                    <p className={labelClass}>Time</p>
                    <p className="font-serif text-[#faf8f4] text-sm">3 PM Sharp</p>
                  </div>
                  <div>
                    <p className={labelClass}>Audition Fee</p>
                    <p className="font-serif text-[#c9a96e] text-xl">₹300/-</p>
                  </div>
                </div>
              </div>

              {/* Categories */}
              <p className={labelClass}>Categories</p>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[#faf8f4]/6 mb-6">
                {[
                  { cat: "Kids",  age: "3–10 yrs" },
                  { cat: "Teens", age: "11–16 yrs" },
                  { cat: "Miss",  age: "17–25 yrs" },
                  { cat: "Mr",    age: "18–35 yrs" },
                  { cat: "Mrs",   age: "20–70 yrs" },
                ].map(c => (
                  <div key={c.cat} className="bg-[#0d0406] px-3 py-4 text-center">
                    <span className="font-serif text-[#faf8f4] text-sm block">{c.cat}</span>
                    <span className="font-sans text-[#c9a96e]/50 text-[10px]">{c.age}</span>
                  </div>
                ))}
              </div>

              {/* Theme */}
              <p className={labelClass}>Audition Theme</p>
              <div className="grid grid-cols-2 gap-px bg-[#faf8f4]/6">
                <div className="bg-[#0d0406] px-4 py-4">
                  <span className="font-sans text-[#faf8f4]/40 text-[10px] block mb-1">Girls</span>
                  <span className="font-serif text-[#faf8f4] text-sm">Red Bodycon</span>
                </div>
                <div className="bg-[#0d0406] px-4 py-4">
                  <span className="font-sans text-[#faf8f4]/40 text-[10px] block mb-1">Boys</span>
                  <span className="font-serif text-[#faf8f4] text-sm">Solid Colour T-shirt &amp; Jeans</span>
                </div>
              </div>
            </div>

            {/* Registration form */}
            <div className="px-8 py-7 border-b border-[#c9a96e]/10">
              <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e] block mb-7">Participant Details</span>
              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label className={labelClass}>Full Name <span className="text-red-400">*</span></label>
                  <input type="text" value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your full name" className={inputClass("name")} />
                  {errors.name && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.name}</p>}
                </div>

                {/* DOB + Age */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Date of Birth <span className="text-red-400">*</span></label>
                    <div className="flex gap-2">
                      <select value={form.dobDay} onChange={e => set("dobDay", e.target.value)} className={inputClass("dobDay") + " px-2"}>
                        <option value="" disabled>DD</option>
                        {Array.from({ length: 31 }, (_, i) => i + 1).map(d => <option key={d} value={String(d).padStart(2, '0')}>{String(d).padStart(2, '0')}</option>)}
                      </select>
                      <select value={form.dobMonth} onChange={e => set("dobMonth", e.target.value)} className={inputClass("dobMonth") + " px-2"}>
                        <option value="" disabled>MM</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map(m => <option key={m} value={String(m).padStart(2, '0')}>{String(m).padStart(2, '0')}</option>)}
                      </select>
                      <select value={form.dobYear} onChange={e => set("dobYear", e.target.value)} className={inputClass("dobYear") + " px-2"}>
                        <option value="" disabled>YYYY</option>
                        {Array.from({ length: 70 }, (_, i) => new Date().getFullYear() - 3 - i).map(y => <option key={y} value={String(y)}>{y}</option>)}
                      </select>
                    </div>
                    {(errors.dobDay || errors.dobMonth || errors.dobYear) && <p className="text-red-400/80 text-[10px] mt-1 font-sans">Please select a valid date</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Age <span className="text-red-400">*</span></label>
                    <input type="number" value={form.age} onChange={e => set("age", e.target.value)} placeholder="Auto-filled from DOB" className={inputClass("age")} />
                    {errors.age && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.age}</p>}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className={labelClass}>Category <span className="text-red-400">*</span></label>
                  <select value={form.category} onChange={e => set("category", e.target.value)} className={`${inputClass("category")} cursor-pointer`}>
                    <option value="" disabled>Select your category</option>
                    {categories.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
                  </select>
                  {errors.category && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.category}</p>}
                </div>

                {/* Address */}
                <div>
                  <label className={labelClass}>Address <span className="text-red-400">*</span></label>
                  <textarea value={form.address} onChange={e => set("address", e.target.value)} rows={2} placeholder="Your full address" className={`${inputClass("address")} resize-none`} />
                  {errors.address && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.address}</p>}
                </div>

                {/* Height + Weight */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Height <span className="text-red-400">*</span></label>
                    <input type="text" value={form.height} onChange={e => set("height", e.target.value)} placeholder="e.g. 5ft 6in or 168 cm" className={inputClass("height")} />
                    {errors.height && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.height}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Weight <span className="text-red-400">*</span></label>
                    <input type="text" value={form.weight} onChange={e => set("weight", e.target.value)} placeholder="e.g. 58 kg" className={inputClass("weight")} />
                    {errors.weight && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.weight}</p>}
                  </div>
                </div>

                {/* City */}
                <div>
                  <label className={labelClass}>City <span className="text-red-400">*</span></label>
                  <input type="text" value={form.city} onChange={e => set("city", e.target.value)} placeholder="Your city" className={inputClass("city")} />
                  {errors.city && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.city}</p>}
                </div>

                {/* Experience */}
                <div>
                  <label className={labelClass}>Experience <span className="text-red-400">*</span></label>
                  <textarea value={form.experience} onChange={e => set("experience", e.target.value)} rows={2} placeholder="Describe any relevant experience (or 'No prior experience')" className={`${inputClass("experience")} resize-none`} />
                  {errors.experience && <p className="text-red-400/80 text-[10px] mt-1 font-sans">{errors.experience}</p>}
                </div>

                {/* Achievements */}
                <div>
                  <label className={labelClass}>Achievements, if any</label>
                  <textarea value={form.achievements} onChange={e => set("achievements", e.target.value)} rows={2} placeholder="List any achievements, awards, or titles (optional)" className={`${inputClass("achievements")} resize-none`} />
                </div>

              </div>
            </div>

            {/* Payment section */}
            <div className="px-8 py-7 border-b border-[#c9a96e]/10">
              <span className="font-sans text-[9px] tracking-[0.32em] uppercase text-[#c9a96e] block mb-2">Audition Fee</span>
              <p className="font-serif text-[#c9a96e] text-3xl mb-6">₹300/-</p>
              <p className="font-sans text-[#faf8f4]/50 text-sm mb-7">
                Scan the QR code to pay the ₹300 audition fee through PhonePe.
              </p>
              {/* QR Code */}
              <div className="flex flex-col items-center mb-6">
                <div className="border border-[#c9a96e]/20 p-4 w-52 mx-auto flex items-center justify-center mb-3 bg-white">
                  <img src={phonePeQR} alt="PhonePe QR Code" className="w-52 h-auto max-w-full object-contain" />
                </div>
                <p className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#c9a96e]/50">Pay via PhonePe</p>
              </div>
            </div>

            {/* Payment confirmation + Submit */}
            <div className="px-8 py-7">
              {/* Checkbox */}
              <label className="flex items-start gap-3 cursor-pointer mb-6 group">
                <input
                  type="checkbox"
                  checked={form.paymentConfirmed}
                  onChange={e => set("paymentConfirmed", e.target.checked)}
                  className="mt-0.5 w-4 h-4 accent-[#c9a96e] shrink-0 cursor-pointer"
                />
                <span className="font-sans text-[#faf8f4]/60 text-sm group-hover:text-[#faf8f4]/80 transition-colors">
                  I have paid the ₹300 audition fee via the provided PhonePe QR code.
                </span>
              </label>
              {errors.paymentConfirmed && (
                <p className="text-red-400/80 text-[10px] font-sans mb-4">{errors.paymentConfirmed}</p>
              )}

              {/* WhatsApp button */}
              <button
                onClick={handleWhatsApp}
                disabled={!form.paymentConfirmed}
                className={`w-full py-4 px-8 font-sans text-[9.5px] tracking-[0.28em] uppercase flex items-center justify-center gap-3 transition-all duration-300 ${
                  form.paymentConfirmed
                    ? "bg-[#25D366] text-white hover:bg-[#1db954] cursor-pointer"
                    : "bg-[#25D366]/20 text-white/30 cursor-not-allowed"
                }`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Register &amp; Send Details on WhatsApp
              </button>

              <p className="font-sans text-[#faf8f4]/30 text-[10px] text-center mt-4 leading-relaxed">
                WhatsApp will open with your details pre-filled. Please press Send to complete your registration.
              </p>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

