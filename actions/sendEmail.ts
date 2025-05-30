"use server";

export const sendEmail = async (formData: FormData) => {
  console.log("Running on server");
  console.log("Form submitted:", formData.get("senderEmail"));
  console.log("Form submitted:", formData.get("message"));
};
