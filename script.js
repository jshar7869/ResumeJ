function educationClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("education-header")));
}
function introductionClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("introduction-header")));
}
function skillsetClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("skillset-header"))); 
} 
function experienceClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("experience-header")));
}
function achievementsClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("achievements-header")));
}
function projectsClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("projects-header")));
}
function contactMeClicked()
{
    window.scrollTo(0, findPosition(document.getElementById("contactMe-header")));
}
function findPosition(obj) { 
    var currenttop = 0; 
    if (obj.offsetParent) { 
        do { 
            currenttop += obj.offsetTop; 
        } while ((obj = obj.offsetParent)); 
        return [currenttop]; 
    }
}