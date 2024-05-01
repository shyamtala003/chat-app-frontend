export default function scrollDown(element) {
  return setTimeout(() => {
    if (element) {
      const messageContainer = document.getElementById(element);
      messageContainer.scrollTo(0, messageContainer.scrollHeight);
    } else {
      window.scrollTo(0, document.body.scrollHeight);
    }
  });
}
