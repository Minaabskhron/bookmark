var bookmarkNameInput=document.getElementById("siteName");
var websiteURLInput=document.getElementById("SiteUrl");

var websiteContainer=[]

if(localStorage.getItem("Website")!=null)
{
    websiteContainer=JSON.parse(localStorage.getItem("Website"));
    displayItems();
}
var closeBtnElement=document.getElementById("myLayer");

function submitWebsite(){
    if(validateSiteNAme() && validateSiteURL())
    {
        var website={
            name:bookmarkNameInput.value,
            URL:websiteURLInput.value
        }
        websiteContainer.push(website);
        console.log(websiteContainer);
        displayItems();
        clearAll();
        localStorage.setItem("Website",JSON.stringify(websiteContainer))
    }
    else
    {
        closeBtnElement.classList.remove("d-none")
    }

}

function displayItems()
{
    var cartona=``;
    for (var i=0; i<websiteContainer.length;i++)
    {
        cartona=cartona+` <tr>
        <td>${i+1}</td>
        <td>${websiteContainer[i].name}</td>
        <td><a href="https://${websiteContainer[i].URL}" target="_blank" class="btn visitButton"><i class="fa-solid fa-eye"></i> visit</a></td>
        <td><button onclick="deleteElement(${i});" class="btn btn-danger"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
    </tr>`
    }
    document.getElementById("tbody").innerHTML=cartona;
}

function clearAll()
{
    bookmarkNameInput.value=""
    websiteURLInput.value=""
}

function deleteElement(idx)
{
    websiteContainer.splice(idx,1);
    displayItems();
    localStorage.setItem("Website",JSON.stringify(websiteContainer));
}

function validateSiteNAme()
{
    var Siteregex=/[a-zA-z0-9]{3}/;
    return Siteregex.test(bookmarkNameInput.value);
}
function validateSiteURL()
{
    var URLregex=/(w{3}\.)?[a-zA-z0-9](\.[a-z]{2,4})$/;
    return URLregex.test(websiteURLInput.value);
}

var SiteNameVar= document.getElementById("siteName");
var SiteURLVar= document.getElementById("SiteUrl");

function validateSiteNameInWrite(){

    
    if(validateSiteNAme())
    {
        SiteNameVar.classList.add("right")
    }
    else
    {
        SiteNameVar.classList.remove("right")
        SiteNameVar.classList.add("wrong")
    }
}

function validateSiteURLInWrite()
{
    if(validateSiteURL())
    {
        SiteURLVar.classList.add("right")
    }
    else
    {
        SiteURLVar.classList.remove("right")
        SiteURLVar.classList.add("wrong")
    }
}

function closeBtnFuncticlose()
{
    closeBtnElement.classList.add("d-none")
}