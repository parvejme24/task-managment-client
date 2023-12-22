import React from "react";
import { Accordion } from "keep-react";
import { Plus } from "phosphor-react";

const FAQSection = () => {
  const faqData = [
    {
      question: "What is the purpose of this task management application?",
      answer:
        "The task management application is designed to help users organize and keep track of their tasks efficiently. It provides a user-friendly interface for creating, managing, and monitoring tasks throughout their lifecycle.",
    },
    {
      question: "How do I get started with the application?",
      answer:
        "To get started, you need to sign up for an account. Click on the 'Sign Up' link, fill in the required information, and you'll be ready to explore the task management dashboard.",
    },
    {
      question: "Is the application free to use?",
      answer:
        "Yes, the basic features of the task management application are free to use. However, there may be premium features or plans with additional functionalities that require a subscription.",
    },
    {
      question: "Can I use the application on multiple devices?",
      answer:
        "Yes, the task management application is designed to be responsive and accessible from any device with an internet connection. You can use it on your computer, tablet, or smartphone.",
    },
    {
      question: "How can I create a new task?",
      answer:
        "To create a new task, log in to your account and navigate to the task management dashboard. Look for the 'Add Task' button, click on it, and fill in the details for your new task, such as title, description, deadline, and priority.",
    },
    {
      question: "Is there a way to delete tasks?",
      answer:
        "Yes, you can delete tasks from the task management dashboard. Locate the task you want to delete, and there should be an option or button to remove it. Please note that this action is irreversible.",
    },
    {
      question: "How does the drag-and-drop functionality work?",
      answer:
        "The drag-and-drop functionality allows you to move tasks between different lists (e.g., from 'To-Do' to 'Ongoing' or 'Completed'). Simply click and hold the task, drag it to the desired list, and release the mouse button to drop it there.",
    },
    {
      question: "Can I edit a task after creating it?",
      answer:
        "Yes, you can edit a task after creating it. Look for an 'Edit' button or option on the task details page. Make the necessary changes and save the updated information.",
    },
    {
      question: "Are there notifications for task updates?",
      answer:
        "Yes, the task management application supports notifications. You will receive notifications for task assignments, updates, and approaching deadlines. Ensure that you have enabled notifications in your account settings.",
    },
    {
      question: "How can I contact support if I encounter issues?",
      answer:
        "If you encounter any issues or have questions, you can reach out to our support team by clicking on the 'Contact Us' link in the application. Alternatively, you can email support@example.com for assistance.",
    },
  ];

  return (
    <div className="container mx-auto py-14">
      <h2 className="text-center mb-12 text-4xl font-bold text-blue-600">
        FAQ
      </h2>
      <Accordion className="space-y-3 px-10">
        {faqData.map((item) => (
          <Accordion.Panel>
            <Accordion.Container>
              <Accordion.Title className="text-blue-500">
                {item.question}
              </Accordion.Title>
              <Accordion.Icon>
                <Plus size={24} color="#444" />
              </Accordion.Icon>
            </Accordion.Container>
            <Accordion.Content>{item.answer}</Accordion.Content>
          </Accordion.Panel>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQSection;
