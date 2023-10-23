
  document.getElementById("downloadButton").addEventListener("click", function () {
    // Replace "resume.pdf" with the exact name of your resume file.
    var resumeFile = "resume.pdf";

    // Create an "a" element (link) and set its attributes.
    var downloadLink = document.createElement("a");
    downloadLink.setAttribute("href", resumeFile);
    downloadLink.setAttribute("download", resumeFile);

    // Simulate a click on the link to trigger the download.
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
//   document.getElementById("btn").addEventListener("click", function() {
//     window.location.href = "https://github.com/aditya383-dumbu","_blank"; // Replace with your GitHub URL
//   });
  function openGitHubInNewWindow() {
    window.open("https://github.com/aditya383-dumbu", "_blank"); // Replace with your GitHub URL
  }

  // Add a click event listener to the button
  document.getElementById("btn").addEventListener("click", openGitHubInNewWindow);
