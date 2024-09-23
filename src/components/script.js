export function toggleButtons(buttonClicked, setButtonClicked) {
    document.querySelectorAll('.annotation').forEach(button => {
      button.style.display = button.style.display === 'none' ? 'block' : 'none';
    });
    setButtonClicked(!buttonClicked);
  }