import { useState } from 'react';
import {AnimatePresence, motion} from 'framer-motion'
import { useStockContext } from '../Context/StockContext';
const faqs = [
  { id: 1, question: "How do I change my password?", answer: "To change your password, go to Settings > Account > Change password. You must verify your identity before proceeding." },
  { id: 2, question: "How do I delete my account?", answer: "In the Settings page, go to security and click Delete account. Please review before deleting as all your information will be permanently erased." },
  { id: 3, question: "How do I track recent events on my account?", answer: "Go to Settings > Security to view recent events on your account with detailed information." },
  { id: 4, question: "How do I follow a particular stock?", answer: "Go to your Portfolio, view More in Market, select a stock, and add it to your watchlist." },
  { id: 5, question: "How do I create an account?", answer: "On the top right of the page, click the user icon to be redirected to the signup page." },
  { id: 6, question: "How do I customize notifications and news?", answer: "Go to Settings and manage notifications under the Notifications section." },
];

export const FAQ = () => {
  const {lightMode} = useStockContext();
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenQuestion((prev) => (prev === id ? null : id)); 
  };

  return (
    
    <motion.div 
      initial={{opacity:0, x:-250}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:0.8, easings:"easeout"}}
      className="flex flex-col gap-5 w-[100%] min-h-screen md:w-[94%] m-auto mt-5 mb-5">
      <p className={` md:text-lg font-bold text-center ${lightMode ? " text-gray-600 bg-white/80 shadow-md": "bg-gray-700 text-white"} cursor-default sticky top-0 w-[96%] md:w-[80%] m-auto p-4`}>
        Frequently Asked Questions
      </p>

      {faqs.map((faq) => (
        <div key={faq.id} className="bg-gray-800 w-[96%] md:w-[80%] m-auto">
          <dt
            onClick={() => toggleAccordion(faq.id)}
            className={`relative text-sm md:text-md text-left ${lightMode ? "bg-purple-700":"bg-green-800"} p-4 m-auto text-white font-bold cursor-pointer
              after:content-['+'] after:absolute after:text-xl md:after:text-4xl ${lightMode ? "after:text-white":"after:text-[cyan]"} after:right-2 after:top-1/2 after:transform after:-translate-y-1/2 
              after:transition-transform after:duration-300 ${
                openQuestion === faq.id ? "after:rotate-45" : ""
              }`}
          >
            {faq.question}
          </dt>
          <AnimatePresence>
            {openQuestion === faq.id && (
              <motion.dd 
              initial = {{ opacity: 0}}
              animate ={{ opacity: 1}}
              exit={{height:0, opacity: 0}}
              transition={{duration: 0.7}}
              className= {`bg-[whitesmoke] transform text-gray-800 leading-8 p-4`}>{faq.answer}</motion.dd>
            )}
          </AnimatePresence>
          
        </div>
      ))}
    </motion.div>
  );
};
