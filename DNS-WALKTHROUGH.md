# DNS walkthrough

DNS is the internet's address book. People remember names such as `praveenkumar.netlify.app`; computers need a numerical network address, or IP address, to know where to send a request. DNS translates the name into the information needed to reach the correct host.

## The route from browser to website

1. A visitor types a URL. The browser first checks whether it already knows the answer from a recent visit.
2. If it does not, it asks a **DNS resolver**, usually supplied by the visitor's internet provider, workplace, or a public DNS service.
3. The resolver follows the DNS hierarchy. It asks the root system where to find the domain ending (such as `.app`), then asks the relevant nameserver which service is responsible for the domain.
4. That authoritative nameserver returns the DNS record for the name. The answer can be an IP address, or a pointer to another hostname.
5. The browser then connects to the hosting provider. Here, Netlify receives the HTTPS request and returns the portfolio files securely.

## What a CNAME record does

A **CNAME** (canonical name) record makes one domain name an alias for another. If you buy `www.yourname.com`, you can create a CNAME that points it to the hostname Netlify gives you. DNS follows that alias to Netlify, which serves the deployed site.

Netlify shows the exact CNAME target and any additional DNS instructions in the site's domain settings. Copy those values exactly, then allow time for DNS propagation. Changes often appear quickly but can take up to 24–48 hours worldwide because DNS resolvers keep temporary cached answers.

## Custom-domain checklist

1. Buy or use a domain from a registrar.
2. In Netlify, open the site's domain-management settings and add the domain.
3. At the registrar, add the CNAME or other record Netlify displays.
4. Wait for Netlify to verify the record and provision HTTPS.
5. Visit the custom address. Once verification is complete, Netlify securely serves the portfolio there.
