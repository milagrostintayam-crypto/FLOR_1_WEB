// Espera a que cargue el documento
document.addEventListener("DOMContentLoaded", () => {
    const petals = document.querySelectorAll(".petal");

    petals.forEach(petal => {
        petal.addEventListener("click", () => {
            // Si el pétalo ya está seleccionado, se deselecciona
            if (petal.classList.contains("selected")) {
                petal.classList.contains("selected")
                petal.classList.remove("selected");
            } else {
                // Quita la selección a cualquier otro pétalo activo
                petals.forEach(p => p.classList.remove("selected"));
                // Selecciona el pétalo actual
                petal.classList.add("selected");
            }
        });
    });
});
