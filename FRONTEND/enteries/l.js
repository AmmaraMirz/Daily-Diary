
document.addEventListener("DOMContentLoaded", () => {
  const diaryForm = document.getElementById("diaryForm");
  const diaryEntry = document.getElementById("diaryEntry");
  const entriesList = document.getElementById("entriesList");

  diaryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const entryText = diaryEntry.value.trim();
      if (entryText) {
          const listItem = document.createElement("li");
          listItem.textContent = entryText;
          entriesList.appendChild(listItem);

          diaryEntry.value = ""; // Clear the textarea
      }
  });
});
