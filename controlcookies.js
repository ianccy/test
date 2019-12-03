var domainName = 'google.com';
document.cookie = "key=value; expires=Tue, 20 Dec 2019 11:31:56 GMT; path=/; domain=." + domainName;

console.log(document.cookie)
