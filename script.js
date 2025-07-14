document.getElementById("subscribe-form").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email-input").value;

  try {
    const res = await fetch("/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    const data = await res.json();
    alert(data.message);
    this.reset();
  } catch (err) {
    alert("Error subscribing. Try again later.");
  }
});

<script>
  function openAlbumPage(artist) {
    const encoded = encodeURIComponent(artist);
    window.open(`album.html?artist=${encoded}`, '_blank');
  }
</script>
