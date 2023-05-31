/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

// Solution

function domainNameUrl(url) {
    return url.replace("http://", '').replace("https://", '').replace("www.", '')
                .split('.')[0]
}
console.log(domainNameUrl("https://www.cnet.com"));

// Code breakdown

/* 1) Replaces the string "http://" or ""https://" or "www." in an url if present with an empty string, effectively removing it 
        (e.g "https://www.cnet.com" now becomes "cnet.com")
    2) Splits the string on the dot (.) and grabs the first element (the domain name)
        ("cnet.com" => ["cnet", "com"] => "cnet")
*/
