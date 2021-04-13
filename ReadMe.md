# Steps to reproduce 

- add secret to pulumi stack config:
    ```
    pulumi config set --secret test "9#^XeshqnX$bG9vFPa@r7Ti98uo@sS"
    ```
- read secret from pulumi program
- store secret as AWS SecretsManager string secret
- retrieve AWS SecretsManager value and compare:
    I retrive value "9#^XeshqnX@r7Ti98uo@sS"