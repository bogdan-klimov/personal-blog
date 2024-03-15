const contactItems = document.getElementsByClassName('contact_item')
const contactTxt = document.getElementsByClassName('contact_txt')

for (let i = 0; i < contacts.length; i++) {
    contactItems[i].style.backgroundImage = `url(content/images/contact/${contacts[i].background})`
    contactItems[i].href = contacts[i].link
    contactTxt[i].innerText = contacts[i].text
}