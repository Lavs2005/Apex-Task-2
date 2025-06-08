// Form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const output = document.getElementById("formOutput");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  output.innerHTML = `
    <h3>📝 Submitted Details:</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Optionally clear the form
  document.getElementById("contactForm").reset();
});


// Dynamic Image Gallery
function addImage() {
  const input = document.getElementById("imageUrlInput");
  const url = input.value.trim();
  const gallery = document.getElementById("imageGallery");

  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Gallery Image";
    img.onerror = () => {
      alert("Invalid image URL!");
      img.remove();
    };
    img.onclick = () => img.remove();
    gallery.appendChild(img);
    input.value = "";
  } else {
    alert("Please enter a valid image URL.");
  }
}
