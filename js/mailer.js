const email_form = document.querySelector(".email-form");
const submit_button_container = document.querySelector(".submit_button");

const sendMail = () => {
  if (
    email_form.name.value !== "" &&
    email_form.email.value !== "" &&
    email_form.message.value !== ""
  ) {
    const submit_button = `
          <a href= "mailto:jumashafara@gmail.com?subject=Can we connect?&body=${
            email_form.message.value +
            " From " +
            email_form.name.value +
            ", " +
            email_form.email.value
          }">Confirm and Submit Message</a>
          `;

    submit_button_container.innerHTML = submit_button;
  }
};
