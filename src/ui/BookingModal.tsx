import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package } from '../data/packages';
import { useForm, ValidationError } from '@formspree/react';

// Date picker library
import 'react-datepicker/dist/react-datepicker.css';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: Package;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, packageData }) => {
  const [adults, setAdults] = useState(1);
  const [totalCost, setTotalCost] = useState(packageData.price);
  const [state, handleSubmit] = useForm('mdkgaaby');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [step, setStep] = useState(1);
  
  // Form data with added date field
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: ''
  });

  // Ensure the modal doesn't affect page scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Calculate total cost whenever adults count changes
  useEffect(() => {
    setTotalCost(packageData.price * adults);
  }, [adults, packageData.price]);

  // Watch for successful form submission
  useEffect(() => {
    if (state.succeeded) {
      setFormSubmitted(true);
    }
  }, [state.succeeded]);

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form submission handler
  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSubmit(formData);
    // handleSendWhatsApp();
  };

  const handleSendWhatsApp = () => {
    // Format date to readable string
    const formattedDate = formData.date ? new Date(formData.date).toLocaleDateString() : 'Not selected';
    
    // Create WhatsApp message
    const message = encodeURIComponent(
      `Hello! I would like to book the ${packageData.title} package.\n\n` +
      `Details:\n` +
      `- Adults: ${adults}\n` +
      `- Date: ${formattedDate}\n` +
      `- Total Cost: ₹${totalCost}\n\n` +
      `My name: ${formData.name}\n` +
      `My email: ${formData.email}\n` +
      `My phone: ${formData.phone}\n` +
      `Additional message: ${formData.message}`
    );
    
    // Replace with actual WhatsApp number
    window.open(`https://wa.me/918766274009?text=${message}`, '_blank');
  };

  // Increment adult count
  const incrementAdults = () => {
    setAdults(prev => prev + 1);
  };

  // Decrement adult count, minimum 1
  const decrementAdults = () => {
    setAdults(prev => (prev > 1 ? prev - 1 : 1));
  };

  // Modal animations
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  // Function to move to next step
  const nextStep = () => {
    if (step === 1 && !formData.date) {
      alert('Please select a date before proceeding');
      return;
    }
    setStep(prev => prev + 1);
  };

  // Function to go back to previous step
  const prevStep = () => {
    setStep(prev => prev - 1);
  };

  // Function to render content based on current step
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Select Details</h3>
            
            {/* Adults Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <label className="text-gray-700 font-medium">Adults</label>
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={decrementAdults}
                    className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                    aria-label="Decrease adults"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                  <span className="font-semibold text-gray-800">{adults}</span>
                  <button 
                    onClick={incrementAdults}
                    className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-200 transition-colors"
                    aria-label="Increase adults"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Date Selection */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <label className="block text-gray-700 font-medium mb-2">Select Date</label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleInputChange}
                required
                min={new Date().toISOString().split('T')[0]} // Set minimum date to today
                className="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <ValidationError prefix="Date" field="date" errors={state.errors} />
            </div>

            {/* Cost Summary */}
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="text-green-800 font-medium mb-2">Trip Summary</h4>
              <div className="flex justify-between items-center border-b border-green-100 pb-2 mb-2">
                <span className="text-gray-600">Package</span>
                <span className="font-medium">{packageData.title}</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-100 pb-2 mb-2">
                <span className="text-gray-600">Duration</span>
                <span className="font-medium">{packageData.duration}</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-100 pb-2 mb-2">
                <span className="text-gray-600">Adults</span>
                <span className="font-medium">{adults}</span>
              </div>
              <div className="flex justify-between items-center border-b border-green-100 pb-2 mb-2">
                <span className="text-gray-600">Price per Adult</span>
                <span className="font-medium">₹{packageData.price}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-800 font-semibold">Total Cost</span>
                <span className="text-green-600 font-bold text-xl">₹{totalCost}</span>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800">Enter Your Details</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-1">Additional Message (Optional)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                ></textarea>
              </div>

              {/* Trip Summary - Collapsed version */}
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Trip Total</span>
                  <span className="text-green-600 font-bold">₹{totalCost}</span>
                </div>
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 text-center">
            {formSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Booking Submitted!</h3>
                <p className="text-gray-600">Thank you for booking with us. We will contact you shortly to confirm your reservation.</p>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-gray-800">Confirm Your Booking</h3>
                
                <div className="bg-green-50 p-4 rounded-lg text-left">
                  <h4 className="text-green-800 font-medium mb-3">Booking Summary</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Package:</span>
                      <span className="font-medium">{packageData.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Date:</span>
                      <span className="font-medium">
                        {formData.date ? new Date(formData.date).toLocaleDateString() : 'Not selected'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Adults:</span>
                      <span className="font-medium">{adults}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Name:</span>
                      <span className="font-medium">{formData.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="font-medium">{formData.phone}</span>
                    </div>
                    <div className="border-t border-green-100 mt-2 pt-2 flex justify-between">
                      <span className="text-gray-800 font-semibold">Total Cost:</span>
                      <span className="text-green-600 font-bold">₹{totalCost}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  // Function to render buttons based on current step
  const renderButtons = () => {
    if (formSubmitted) {
      return (
        <div className="flex flex-col space-y-3">
          <button 
            type="button"
            onClick={handleSendWhatsApp}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Contact us on WhatsApp
          </button>
          <button
            type="button"
            onClick={onClose}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      );
    }
    
    switch (step) {
      case 1:
        return (
          <div className="flex justify-end">
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              disabled={!formData.date}
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div className="flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
            >
              Back
            </button>
            <button
              type="button"
              onClick={nextStep}
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
              disabled={!formData.name || !formData.email || !formData.phone}
            >
              Next
            </button>
          </div>
        );
      case 3:
        return (
          <div className="flex justify-between">
            {!formSubmitted && (
              <>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={handleFinalSubmit}
                  className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Confirm Booking
                </button>
              </>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        onClick={onClose}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="flex justify-between items-center border-b border-gray-200 p-4">
            <h2 className="text-xl font-bold text-gray-800">Book Your Trip</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
              type="button"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
          
          {/* Progress Indicator */}
          <div className="px-4 pt-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <div className={`h-1 w-12 ${step > 1 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <div className={`h-1 w-12 ${step > 2 ? 'bg-green-500' : 'bg-gray-200'}`}></div>
              </div>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'}`}>
                3
              </div>
            </div>
          </div>
          
          {/* Modal Content */}
          <div className="p-4">
            {renderStepContent()}
          </div>
          
          {/* Modal Footer */}
          <div className="border-t border-gray-200 p-4">
            {renderButtons()}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BookingModal;
