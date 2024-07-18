export function appendWithRandomNumber(context) {
  context += Math.floor(Math.random() * 10000);
  return context;
}
