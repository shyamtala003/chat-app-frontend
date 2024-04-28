export default function scrollDown(element) {
  return setTimeout(() => {
    const messageContainer = document.getElementById(element);
    messageContainer.scrollTo(0, messageContainer.scrollHeight);
  });
}
