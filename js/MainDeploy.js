window.onload=function()
{
    // Deploy

    var Deploy = document.getElementById("Deploy");
    var Menu = document.getElementById("Menu");
    var active = false;

    function setDeploy()
    {
        if (innerWidth <= 1090)
        {
            if(active == false)
            {
                Menu.className = "Menu";
                active = true;
            }
            else
            {
                Menu.className = "OffMenu";
                active = false;
            }
        }
    }

    Deploy.addEventListener("click", setDeploy);

    addEventListener('resize', () =>
    {
        if (innerWidth > 1090)
        {
            Menu.className = "Menu";
            active = false;
        }
        else
        {
            Menu.className = "OffMenu";
            active = false;
        }
    })
}