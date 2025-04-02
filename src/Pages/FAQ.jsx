import { useState } from 'react';
import {motion} from 'framer-motion'
const faqs = [
  { id: 1, question: "How do I change my password?", answer: "To change your password, go to Settings > Account > Change password. You must verify your identity before proceeding." },
  { id: 2, question: "How do I delete my account?", answer: "In the Settings page, go to security and click Delete account. Please review before deleting as all your information will be permanently erased." },
  { id: 3, question: "How do I track recent events on my account?", answer: "Go to Settings > Security to view recent events on your account with detailed information." },
  { id: 4, question: "How do I follow a particular stock?", answer: "Go to your Portfolio, view More in Market, select a stock, and add it to your watchlist." },
  { id: 5, question: "How do I create an account?", answer: "On the top right of the page, click the user icon to be redirected to the signup page." },
  { id: 6, question: "How do I customize notifications and news?", answer: "Go to Settings and manage notifications under the Notifications section." },
];

export const FAQ = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenQuestion((prev) => (prev === id ? null : id)); 
  };

  return (
    
    <motion.div 
      initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
      className="flex flex-col gap-5 w-[94%] m-auto">
      <p className="text-white text-lg font-bold text-center bg-gray-700 sticky top-0 w-[80%] m-auto p-4">
        Frequently Asked Questions
      </p>

      {faqs.map((faq) => (
        <div key={faq.id} className="bg-gray-800 w-[80%] m-auto">
          <dt
            onClick={() => toggleAccordion(faq.id)}
            className={`relative text-left bg-green-800 p-4 m-auto text-white font-bold cursor-pointer
              after:content-['+'] after:absolute after:text-4xl after:text-[cyan] after:right-2 after:top-1/2 after:transform after:-translate-y-1/2 
              after:transition-transform after:duration-300 ${
                openQuestion === faq.id ? "after:rotate-45" : ""
              }`}
          >
            {faq.question}
          </dt>
          {openQuestion === faq.id && (
            <dd className=" bg-[whitesmoke] text-gray-800 leading-8 p-4">{faq.answer}</dd>
          )}
        </div>
      ))}
    </motion.div>
  );
};
