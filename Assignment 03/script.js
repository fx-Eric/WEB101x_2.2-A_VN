const myInfo = document.getElementById("myInfo");
const EmailForm = document.getElementById("email-form");
const cardToggle = document.querySelectorAll('.card-toggle');

displayUserInfo();

cardToggle.forEach(card => {
    const btn = card.querySelector('.view-toggle');
    const content = card.querySelector('.extra-content');

    btn.addEventListener('click', (e) => {
      e.preventDefault(); 
      const isShown = !content.classList.contains('d-none');
      content.classList.toggle('d-none');
      btn.textContent = isShown ? 'View more' : 'View less';
    });
  });


function displayUserInfo() {
  myInfo.style.display = "none";
  EmailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const alertMes = "Sai cú pháp email. vui lòng nhập lại!";
    const email = document.getElementById("input-email").value;
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regex)) {
      myInfo.style.display = "block";
      EmailForm.style.display = "none";
    } else {
      alert(alertMes);
    }
  });
}
