function changeClass(id, currentClass, newClass) {
    document.querySelector(id).classList.remove(currentClass);
    document.querySelector(id).classList.add(newClass);
};

