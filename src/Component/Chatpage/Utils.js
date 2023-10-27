export const analyze = (text) => {
  if (text.includes("hi") || text.includes("hai") || text.includes("hello"))
    return "Hello how can i help you?";
  else if (text.includes("weather")) {
    return "What city are you interested in for the weather?";
  } else if (text.includes("time")) {
    const currentTime = new Date().toLocaleTimeString();
    return `The current time is ${currentTime}.`;
  } else {
    return "I'm sorry, I didn't understand your request. Can you please rephrase it?";
  }
};
