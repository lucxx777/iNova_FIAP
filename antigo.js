function redirectToFirstLesson() {
    var courses = document.getElementsByName('courses');
    var selectedCourses = Array.from(courses).filter(course => course.checked);

    if (selectedCourses.length > 0) {
        var firstLessonURL = "/cursosprogramacao/aula0.html";
        window.location.href = firstLessonURL;
    } else {
        alert("Por favor, selecione pelo menos um curso para se matricular.");
    }
}