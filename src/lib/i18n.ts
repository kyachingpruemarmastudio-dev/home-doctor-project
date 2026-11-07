export const messages = {
  en: {
    home:"Home", doctors:"Doctors", services:"Services", appointments:"Appointments", signIn:"Sign in", getStarted:"Get started",
    heroEyebrow:"CARE THAT CONNECTS", heroTitle:"Your health, thoughtfully connected.", heroText:"Book trusted clinicians, manage appointments and keep your care journey organized in one secure place.",
    findDoctor:"Find a doctor", learnMore:"Explore services", trusted:"Care built around you", specialists:"Expert specialists", booking:"Easy appointments",
    servicesTitle:"Healthcare made simpler", servicesText:"Tools that help you make confident decisions about your care.",
    consult:"Doctor consultation", consultText:"Find the right specialist and request an appointment.", records:"Health records", recordsText:"Keep important visit notes and prescriptions together.", follow:"Care follow-ups", followText:"Stay on top of upcoming visits and care plans.",
    doctorsTitle:"Meet our specialists", viewAll:"View all doctors", book:"Book appointment", dashboard:"Dashboard", welcome:"Welcome back",
    email:"Email address", password:"Password", fullName:"Full name", role:"Account type", patient:"Patient", doctor:"Doctor", createAccount:"Create account",
    appointmentTitle:"Book an appointment", date:"Preferred date", reason:"Reason for visit", submit:"Request appointment", status:"Status", pending:"Pending",
    footer:"A calmer, clearer way to manage healthcare."
  },
  bn: {
    home:"হোম", doctors:"চিকিৎসক", services:"সেবাসমূহ", appointments:"অ্যাপয়েন্টমেন্ট", signIn:"সাইন ইন", getStarted:"শুরু করুন",
    heroEyebrow:"যত্নের নতুন সংযোগ", heroTitle:"আপনার স্বাস্থ্য, আরও যত্নে সংযুক্ত।", heroText:"বিশ্বস্ত চিকিৎসক খুঁজুন, অ্যাপয়েন্টমেন্ট নিন এবং নিরাপদে আপনার চিকিৎসার তথ্য গুছিয়ে রাখুন।",
    findDoctor:"চিকিৎসক খুঁজুন", learnMore:"সেবাগুলো দেখুন", trusted:"আপনাকে ঘিরে স্বাস্থ্যসেবা", specialists:"অভিজ্ঞ বিশেষজ্ঞ", booking:"সহজ অ্যাপয়েন্টমেন্ট",
    servicesTitle:"স্বাস্থ্যসেবা এখন আরও সহজ", servicesText:"আপনার চিকিৎসা সম্পর্কে আত্মবিশ্বাসী সিদ্ধান্ত নিতে সহায়ক টুল।",
    consult:"চিকিৎসকের পরামর্শ", consultText:"সঠিক বিশেষজ্ঞ খুঁজে অ্যাপয়েন্টমেন্টের অনুরোধ করুন।", records:"স্বাস্থ্য রেকর্ড", recordsText:"গুরুত্বপূর্ণ ভিজিট নোট ও প্রেসক্রিপশন একসাথে রাখুন।", follow:"পরবর্তী যত্ন", followText:"আসন্ন ভিজিট ও চিকিৎসা পরিকল্পনার খোঁজ রাখুন।",
    doctorsTitle:"আমাদের বিশেষজ্ঞ চিকিৎসক", viewAll:"সব চিকিৎসক দেখুন", book:"অ্যাপয়েন্টমেন্ট নিন", dashboard:"ড্যাশবোর্ড", welcome:"আবার স্বাগতম",
    email:"ইমেইল ঠিকানা", password:"পাসওয়ার্ড", fullName:"পূর্ণ নাম", role:"অ্যাকাউন্টের ধরন", patient:"রোগী", doctor:"চিকিৎসক", createAccount:"অ্যাকাউন্ট তৈরি করুন",
    appointmentTitle:"অ্যাপয়েন্টমেন্ট বুক করুন", date:"পছন্দের তারিখ", reason:"ভিজিটের কারণ", submit:"অ্যাপয়েন্টমেন্ট অনুরোধ করুন", status:"অবস্থা", pending:"অপেক্ষমাণ",
    footer:"স্বাস্থ্যসেবা পরিচালনার আরও সহজ ও স্বচ্ছ উপায়।"
  }
} as const;
export type Locale = keyof typeof messages;
export type MessageKey = keyof typeof messages.en;