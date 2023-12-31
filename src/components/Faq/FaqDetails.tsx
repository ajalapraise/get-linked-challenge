import React, { useState } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

export interface FAQProps {
    question: string,
    answer: string,
    id: number
    className?: string
}

export const FAQData = [
    {
        question: 'Can I work on a project I started before the hackathon?',
        answer: 'No, in most hackathons, you are generally expected to start a new project within the specified timeframe, and working on a project started before the hackathon may not be allowed.',
        id: 1
    },

    {
        question: 'What happens if I need help during the hackathon?',
        answer: ` During a hackathon, you can ask for help from mentors, organizers, or fellow participants when needed. It's encouraged to seek assistance to overcome challenges or collaborate on your project.`,
        id: 2
    },

    {
        question: "What happens if I don't have an idea for a project?",
        answer: "If you don't have an idea for a project at the beginning of a hackathon, you can brainstorm, explore sponsor challenges, collaborate with your team, research, pivot if necessary, and seek inspiration from various sources.",
        id: 3
    },

    {
        question: 'Can I join a team or do I have to come with one?',
        answer: `Yes, you can join a team at most hackathons, and you don't necessarily have to come with one.`,
        id: 4
    },

    {
        question: 'What happens after the hackathon ends',
        answer: 'After the hackathon ends, participants typically present their projects, receive judging feedback, network, access resources, learn, and may continue working on projects. Winners may receive prizes and recognition.',
        id: 5
    },

]


export const FAQlayout: React.FC<FAQProps> = ({ question, answer, className }) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="min-h-[50px] w-4/5 md:w-full  flex flex-col  justify-center  border-b-[1px]  border-[#D434FE] my-0 ">
            <div className="flex  justify-between cursor-pointer  ">
                <div className={`w-4/5 md:w-full text-[10px] font-[900] md:text-base`}>
                    <h3 >
                        {question}

                    </h3>
                </div>

                <div
                    className={`transition-transform transform text-base md:text-[20px] bg-black text-[#D434FE] rounded-2xl w-1/5 flex justify-end hover:text-[white]  ${isOpen ? 'rotate-0 justify-end' : '-rotate-0'}`}
                    onClick={toggleOpen}
                >
                    {isOpen ? <><AiOutlineMinus /></> : <><AiOutlinePlus /></>}
                </div>

            </div>
            <div className={`flex  items-center `}>
                {isOpen && <p className={`my-1 md:my-2 text-[10px] w-4/5 md:text-[13px] md:w-[350px] font-normal ${className} flex`}>{answer}</p>}
            </div>

        </div>

    )
}