document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const selectedCourses = Array.from(document.getElementById("courses").selectedOptions).map(option => option.value);

        if (selectedCourses.length === 0) {
            alert("Selecione pelo menos um curso.");
            return;
        }

   

        console.log("Nome:", name);
        console.log("E-mail:", email);
        console.log("Cursos selecionados:", selectedCourses);
        

        form.reset();
    });
});
