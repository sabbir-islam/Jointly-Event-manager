import React, { useState } from 'react';

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: "How do I create an event on Jointly?",
      answer: "Creating an event is simple! Click 'Create Event' from your profile dropdown, fill in the event details including title, description, date, time, and location. Add a cover image and set your capacity limit. Once published, your event will be visible to the community."
    },
    {
      question: "Can I edit my event after publishing?",
      answer: "Yes, you can edit your event details at any time from the 'Manage Events' section in your profile. However, if attendees have already registered, major changes (like date/time) should be communicated to them via the event updates feature."
    },
    {
      question: "How do attendees register for events?",
      answer: "Attendees can browse events on the 'Upcoming Events' page, click on any event they're interested in, and hit the 'Join Event' button. They'll receive confirmation and can view their registered events in their profile."
    },
    {
      question: "Is there a limit to how many events I can create?",
      answer: "Currently, there's no limit on the number of events you can create. We encourage active community building! However, we ask that you only create events you genuinely plan to host."
    },
    {
      question: "Can I cancel my event registration?",
      answer: "Yes, you can cancel your registration from the event details page or from your 'Joined Events' section. Please cancel as early as possible to allow others to take your spot if the event has limited capacity."
    },
    {
      question: "How do I contact event organizers?",
      answer: "Event organizers' contact information is available on the event details page. You can also use the event comments section to ask questions that might benefit other attendees."
    },
    {
      question: "What happens if an event is cancelled?",
      answer: "If an organizer cancels an event, all registered attendees will be automatically notified. The event will be marked as cancelled and removed from upcoming events lists."
    },
    {
      question: "Can I make my events private or invite-only?",
      answer: "Currently, all events on Jointly are public to encourage community participation. Private event features are planned for future updates. Stay tuned!"
    }
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-12 ">
      <div className="mx-auto w-[92%] md:w-[80%] max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about using Jointly for events and community building.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="nav-bg rounded-lg border border-gray-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between  transition-colors"
              >
                <h3 className="font-semibold  pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-4">
                  <div className="h-px bg-gray-200 mb-4"></div>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;