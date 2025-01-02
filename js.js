window.onload = () => {
    const submitButton = document.getElementById('submit-btn');
    const usernameInput = document.getElementById('username');
    const errorMessage = document.getElementById('error-message');
  
    submitButton.addEventListener('click', () => {
      const username = usernameInput.value.trim().toLowerCase();
        
      if (username === 'nargiz' || username === 'наргиз' || username === 'nako' || username === 'нако') {
        window.location.href = `index12.html`;
      } else {
        errorMessage.textContent = 'Это не для тебя!';
      }
    });
  };
  
