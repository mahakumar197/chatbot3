export const analyze = (text) => {
  if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
    return "Hello how can i help you?";
  else if (text.includes("weather")) {
    return "What city are you interested in for the weather?";
  } else if (text.includes("sword")) {
    return "Sword Group is a world-leading IT and digital transformation partner that helps streamline your business, improve quality and reduce costs.";
  } else if (text.includes("location") || text.includes("address")) {
    return " Elnet Software City, Rajiv Gandhi IT Expy, Tharamani, Chennai, Tamil Nadu 600113";
  } else if (text.includes("CTO") || text.includes("cto")) {
    return "Mr.Ravi";
  } else if (text.includes("time")) {
    return "10 am to 5 pm";
  } else if (text.includes("history") || text.includes("about")) {
    return "Sword Global (india) Private Limited is a Private incorporated on 23 March 1999. It is classified as Non-govt company and is registered at Registrar of Companies, Chennai. Its authorized share capital is Rs. 10,000,000 and its paid up capital is Rs. 2,800,000. It is inolved in Software publishing, consultancy and supply [Software publishing includes production, supply and documentation of ready-made (non-customized) software, operating systems software, business & other applications software, computer games software for all platforms.";
  } else if (text.includes("employee") || text.includes("employees")) {
    return "Sword Global (india) Pvt Ltd has 80 employees.";
  } else if (text.includes("selva")) {
    return "waste of time.";
  } else {
    return "I'm sorry, I didn't understand your request. Can you please rephrase it?";
  }
};
