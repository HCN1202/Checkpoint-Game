function player(x, y) {
    const element = newImage('img/New-Piskel.png')
    element.style.zIndex = 1;
    element.setAttribute("id","bob");   

    
        

    move(element).withArrowKeys(x, y)

    return {
        element: element
    }
}
//, handleDirectionChange