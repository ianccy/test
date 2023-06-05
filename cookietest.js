var domainName = document.location.host;
document.cookie = "key=value; expires=Tue, 16 Dec 2019 11:31:56 GMT; path=/; domain=." + domainName;
console.log(domainName);
console.log(document.cookie);
fetch('http://localhost:8080/user', { credentials: "include"}).then(res => console.log(`res: ${res}`));
