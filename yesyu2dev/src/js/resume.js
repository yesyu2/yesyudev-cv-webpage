// All functions required for the resume page 
// It closes when you press the cross sign above or any space on the screen
// Before moving to another page, the resume area appears on the same page. 

function openModal() 
{
    document.getElementById("myModal").style.display = "block";
}

function closeModal() 
{
    document.getElementById("myModal").style.display = "none";
}

window.onclick = function(event) 
{
    if (event.target == document.getElementById("myModal")) 
    {
        closeModal();
    }
}