import React from 'react'

const data: { id: number, question: string, answer: string }[] = [
    {
      id: 1,
      question: "What is DonorVerse?",
      answer: "DonorVerse is a secure fundraising DApp where users can create campaigns and donate to support the poor, needy, and those in need. It ensures transparency with a chat feature to connect with campaign creators and rewards donors for their generosity."
    },
    {
      id: 2,
      question: "How is DonorVerse different from other fundraising platforms?",
      answer: "Unlike traditional platforms, DonorVerse offers complete transparency by allowing donors to chat directly with campaign creators. Donations are stored securely within the DApp, and campaign creators can only withdraw funds through a controlled process, minimizing the risk of fraud."
    },
    {
      id: 3,
      question: "How does the reward system work?",
      answer: "When you donate through DonorVerse, you receive tokens as a reward. These tokens represent your support and may have future benefits within the platform."
    },
    {
      id: 4,
      question: "Can I trust campaign creators on DonorVerse?",
      answer: "Yes, DonorVerse allows donors to chat with campaign creators before donating. This direct communication helps build trust and ensures transparency in how donations will be used."
    },
    {
      id: 5,
      question: "How are donations managed in DonorVerse?",
      answer: "Donations are securely stored in the DApp's smart contract. Campaign creators do not receive the funds directly; instead, they must request a withdrawal, ensuring a more controlled and fraud-free process."
    },
    {
      id: 6,
      question: "Who can benefit from DonorVerse?",
      answer: "DonorVerse aims to support the poor, needy, and anyone seeking financial aid through community-driven campaigns. Whether it’s for education, healthcare, or other essential needs, DonorVerse helps connect those in need with generous donors."
    }
  ];

const FAQ = () => {
  return (
    <div className='w-full my-6' id='faq'>
      {
        data.map(faq=>{
          return (
            <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium border-b-[0.5px] border-gray-400">{faq.question}</div>
            <div className="collapse-content light_bg">
              <p className='mt-2'>{faq.answer}</p>
            </div>
          </div>
          )
        })
      }
  </div>
  )
}

export default FAQ