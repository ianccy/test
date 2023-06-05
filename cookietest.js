var domainName = document.location.host;
document.cookie = "key=value; expires=Tue, 16 Dec 2019 11:31:56 GMT; path=/; domain=." + domainName;
console.log(domainName);
console.log(document.cookie);
fetch('https://user-vecxft5f7q-ue.a.run.app/user', { credentials: "include"}).then(res => console.log(`res: ${res}`));
