function openChapter(chapterNumber) {
    // Hide the main container and show the chapter content
    document.querySelector('.container').classList.add('hidden');
    document.getElementById('chapter-content').classList.remove('hidden');

    // Update the content based on the chapter number if needed
    if (chapterNumber === 1) {
        document.getElementById('chapter-headline').innerText = "LIGHT REFLECTION AND REFRACTION";
        document.getElementById('chapter-subtext').innerText = "i) torchlight, car headlight. (টৰ্চ , গাড়ীৰ হেডলাইটত)";
        document.getElementById('chapter-image').src = "alfred.jpg";
    }
}
