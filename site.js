// Only configure a video once the asset has been prepared and playback verified.
const videoSource = "assets/criteriacue-evidence-20260927-v2.mp4";

if (videoSource) {
  const video = document.querySelector("#product-video");
  video.src = videoSource;
  document.querySelector("#video-shell").hidden = false;
  video.addEventListener("error", () => {
    document.querySelector("#video-fallback").hidden = false;
  });
}

for (const button of document.querySelectorAll("[data-copy]")) {
  button.addEventListener("click", async () => {
    const template = document.getElementById(button.dataset.copy);
    const status = document.querySelector("#copy-status");
    try {
      await navigator.clipboard.writeText(template.value);
      status.textContent = "Template copied. Adapt and confirm each criterion in CriteriaCue Setup.";
    } catch {
      template.focus();
      template.select();
      status.textContent = "Automatic copy is unavailable. The template is selected; use your device’s Copy command.";
    }
  });
}
