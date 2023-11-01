export const analyze = (text) => {
  if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
    return "Hello, how can I help you? 👋";
  else if (text.includes("weather")) {
    // Check if the user mentioned a city
    if (text.includes("in")) {
      // Extract the city from the text (you may need a more sophisticated approach)
      const city = text.split("in")[1].trim();
      // You can replace this with an actual weather API call
      return `The weather in ${city} is currently sunny. ☀️`;
    } else {
      return "What city are you interested in for the weather? Please specify the city name. 🌍";
    }
  } else if (text.includes("sword")) {
    return "Sword Group is a world-leading IT and digital transformation partner that helps streamline your business, improve quality, and reduce costs. 💼";
  } else if (text.includes("location") || text.includes("address")) {
    return "Elnet Software City, Rajiv Gandhi IT Expy, Tharamani, Chennai, Tamil Nadu 600113 🏢";
  } else if (text.includes("CTO") || text.includes("cto")) {
    return "Mr. Ravi is our Chief Technical Officer (CTO). 👨‍💼";
  } else if (text.includes("time")) {
    return "Our office hours are from 10 am to 5 pm ⏰";
  } else if (text.includes("history") || text.includes("about")) {
    return "Sword Global (India) Private Limited is a Private incorporated on 23 March 1999. It is classified as Non-govt company and is registered at Registrar of Companies, Chennai. Its authorized share capital is Rs. 10,000,000 and its paid-up capital is Rs. 2,800,000. It is involved in Software publishing, consultancy, and supply. 📚";
  } else if (text.includes("employee") || text.includes("employees")) {
    return "Sword Global (India) Pvt Ltd has 80 employees. 👥";
  } else if (text.includes("selva")) {
    return "Thandam. 🔥";
  } else if (
    text.includes("thank you") ||
    text.includes("thanks") ||
    text.includes("thank")
  ) {
    return "You're welcome! If you have any more questions or need further assistance, feel free to ask. I'm here to help! 😊";
  } else {
    return "I'm sorry, I didn't understand your request. Can you please rephrase it ❓";
  }
};
